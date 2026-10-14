import { mockCatalog } from "../mock/rankings.js";

const API_BASE = globalThis.USIMUNKKA_API_BASE || "";
const USE_MOCK = globalThis.USIMUNKKA_USE_MOCK !== false;
const SESSION_KEY = "usimunkka.mock.session.userId";
const FRIENDSHIP_KEY = "usimunkka.mock.friendships";
let memorySession = null;
let memoryFriendships = null;

const clone = value => structuredClone(value);
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

function storageGet(key) {
  try { return globalThis.localStorage?.getItem(key) ?? null; } catch { return null; }
}
function storageSet(key, value) {
  try { globalThis.localStorage?.setItem(key, value); } catch { /* file preview may deny storage */ }
}
function storageRemove(key) {
  try { globalThis.localStorage?.removeItem(key); } catch { /* ignore */ }
}
function getMockSessionId() {
  const stored = storageGet(SESSION_KEY);
  if (stored) return Number(stored);
  return memorySession;
}
function setMockSessionId(id) {
  memorySession = id;
  if (id == null) storageRemove(SESSION_KEY); else storageSet(SESSION_KEY, String(id));
}
function getMockFriendships() {
  if (memoryFriendships) return memoryFriendships;
  const stored = storageGet(FRIENDSHIP_KEY);
  if (stored) {
    try { memoryFriendships = JSON.parse(stored); return memoryFriendships; } catch { /* use defaults */ }
  }
  memoryFriendships = clone(mockCatalog.friendships);
  return memoryFriendships;
}
function saveMockFriendships(value) {
  memoryFriendships = value;
  storageSet(FRIENDSHIP_KEY, JSON.stringify(value));
}
function getUser(id) { return mockCatalog.users.find(user => user.id === Number(id)) || null; }
function buildActivityPayload() {
  const history=[...mockCatalog.activity_daily].sort((a,b)=>a.date.localeCompare(b.date));
  const latest=history.at(-1), previous=history.at(-2);
  const prevByProvince=new Map((previous?.regions||[]).map(row=>[row.province,row]));
  const activity=(latest?.regions||[]).map(row=>{
    const prev=prevByProvince.get(row.province);
    const previousRank=prev?.national_rank ?? row.national_rank;
    const rankChange=previousRank-row.national_rank;
    const scoreChange=prev?.score ? (row.score-prev.score)/prev.score : 0;
    const isHot=scoreChange>=0.035 || rankChange>=5;
    let state="";
    if (row.national_rank<=3) state="top";
    else if (isHot) state="hot";
    else if (rankChange>0) state="rising";
    else if (rankChange<0) state="falling";
    return {...clone(row),previous_rank:previousRank,rank_change:rankChange,is_hot:isHot,state,score_change_rate:scoreChange};
  });
  return {generated_at:mockCatalog.generated_at,snapshot_date:latest?.date||null,window_days:latest?.window_days||7,activity,official:clone(mockCatalog.official)};
}
function buildFriendRanking(userId) {
  const me=getUser(userId);
  if (!me) throw Object.assign(new Error("UNAUTHENTICATED"),{status:401});
  const ids=[me.id,...(getMockFriendships()[String(me.id)]||[])];
  const members=[...new Set(ids)].map(getUser).filter(Boolean);
  const current=[...members].sort((a,b)=>b.activity_score-a.activity_score);
  const previous=[...members].sort((a,b)=>b.previous_activity_score-a.previous_activity_score);
  const previousRank=new Map(previous.map((u,i)=>[u.id,i+1]));
  return current.map((user,i)=>({
    rank:i+1,nickname:user.nickname,activity_score:user.activity_score,
    rank_change:(previousRank.get(user.id)||i+1)-(i+1),is_me:user.id===me.id,color:user.color
  }));
}
async function liveRequest(path, options={}) {
  const response=await fetch(`${API_BASE}${path}`,{
    credentials:"include",
    headers:{Accept:"application/json",...(options.body?{"Content-Type":"application/json"}:{}),...(options.headers||{})},
    ...options
  });
  if (response.status===401) throw Object.assign(new Error("UNAUTHENTICATED"),{status:401});
  if (!response.ok) throw Object.assign(new Error(`API ${response.status}`),{status:response.status});
  if (response.status===204) return null;
  return response.json();
}

export const rankingApi = {
  isMock: USE_MOCK,
  async getRankings() {
    if (USE_MOCK) { await sleep(120); return buildActivityPayload(); }
    return liveRequest("/api/rankings");
  },
  async getMe() {
    if (USE_MOCK) { await sleep(60); const id=getMockSessionId(); return id?clone(getUser(id)):null; }
    try { return await liveRequest("/api/users/me"); } catch (error) { if (error.status===401) return null; throw error; }
  },
  async getFriendRanking() {
    if (USE_MOCK) { await sleep(90); return buildFriendRanking(getMockSessionId()); }
    const payload = await liveRequest("/api/friends/ranking");
    return Array.isArray(payload) ? payload : (payload?.ranking || []);
  },
  async addFriend(friendCode) {
    const code=String(friendCode||"").trim().toUpperCase();
    if (!code) throw Object.assign(new Error("친구 코드를 입력해 주세요."),{status:400});
    if (USE_MOCK) {
      await sleep(90);
      const me=getUser(getMockSessionId());
      if (!me) throw Object.assign(new Error("로그인이 필요합니다."),{status:401});
      const friend=mockCatalog.users.find(user=>user.friend_code.toUpperCase()===code);
      if (!friend) throw Object.assign(new Error("해당 친구 코드를 찾지 못했어요."),{status:404});
      if (friend.id===me.id) throw Object.assign(new Error("내 친구 코드는 등록할 수 없어요."),{status:400});
      const all=getMockFriendships(), key=String(me.id), list=all[key]||[];
      if (list.includes(friend.id)) return {friend:clone(friend),already_exists:true};
      all[key]=[...list,friend.id]; saveMockFriendships(all);
      return {friend:clone(friend),already_exists:false};
    }
    return liveRequest("/api/friends",{method:"POST",body:JSON.stringify({friend_code:code})});
  },
  async loginForPreview() {
    if (!USE_MOCK) return {redirect:"/login?next=/"};
    const requested = Number(new URLSearchParams(globalThis.location?.search || "").get("mockUser"));
    const user = getUser(requested) || getUser(7);
    setMockSessionId(user.id); return clone(user);
  },
  async logout() {
    if (USE_MOCK) { setMockSessionId(null); return; }
    try { await liveRequest("/api/auth/logout",{method:"POST"}); } catch (error) { if (error.status!==404) throw error; }
  },
  getLoginUrl() { return "/login?next=/"; },
  getMockFriendCodes() { return USE_MOCK?mockCatalog.users.filter(u=>u.id!==7).map(u=>u.friend_code):[]; }
};
