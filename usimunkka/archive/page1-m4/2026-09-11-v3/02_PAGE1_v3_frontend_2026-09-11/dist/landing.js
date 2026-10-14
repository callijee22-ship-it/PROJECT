import { rankingApi } from "./services/rankingApi.js";
import { mascotMeta, regionMascotSvg, resolveProvinceFromProfile } from "./mascots.js";

const positions = {
  "서울특별시":[151,145],"경기도":[176,174],"인천광역시":[103,148],"강원특별자치도":[303,107],"충청북도":[244,238],
  "세종특별자치시":[203,255],"충청남도":[145,278],"대전광역시":[203,281],"전북특별자치도":[190,350],
  "전남광주통합특별시":[149,424],"대구광역시":[320,345],"경상북도":[334,295],"경상남도":[278,415],
  "울산광역시":[367,365],"부산광역시":[351,407],"제주특별자치도":[111,610]
};
const shortNames={"서울특별시":"서울","경기도":"경기","인천광역시":"인천","강원특별자치도":"강원","충청북도":"충북","세종특별자치시":"세종","충청남도":"충남","대전광역시":"대전","전북특별자치도":"전북","전남광주통합특별시":"광주권","대구광역시":"대구","경상북도":"경북","경상남도":"경남","울산광역시":"울산","부산광역시":"부산","제주특별자치도":"제주"};
const stateLabel={hot:"🔥 HOT",top:"🏆 TOP",rising:"▲ RISING",falling:"▼ FALLING"};
let payload=null,mode="activity",selectedProvince="서울특별시",lastFocusedRegion=null,currentUser=null;
const $=selector=>document.querySelector(selector); const $$=selector=>[...document.querySelectorAll(selector)];
const modeData=()=>payload?.[mode]||[]; const findRegion=province=>modeData().find(item=>item.province===province);
const formatDate=date=>date?date.replaceAll("-","."):"";
const rankingProvinceFor=province=>{
  if(!province) return null;
  if(payload?.activity?.some(row=>row.province===province)) return province;
  if(["광주광역시","전라남도"].includes(province) && payload?.activity?.some(row=>row.province==="전남광주통합특별시")) return "전남광주통합특별시";
  return province;
};
const popupMascotProvinceFor=province=>province==="전남광주통합특별시"?"광주광역시":province;

const mascotLabelFor=province=>mascotMeta(province)?.short||shortNames[province]||province||'지역';
function championDecorMarkup(){
  return `<span class="champion-aura" aria-hidden="true"></span><span class="champion-prop champion-medal" aria-hidden="true">🥇</span><span class="champion-prop champion-trophy" aria-hidden="true">🏆</span><span class="champion-caption" aria-hidden="true"><b>TOP 1</b></span>`;
}
function renderMascotWithMotion(container, province, {champion=false, label='지역 마스코트'}={}){
  if(!container) return;
  container.classList.toggle('is-champion', Boolean(champion));
  container.innerHTML=`<div class="mascot-stage">${regionMascotSvg(province)}${champion?championDecorMarkup():''}</div>`;
  container.setAttribute('aria-label', champion?`${label} · 1위 축하 모션` : label);
}

function renderMarkers(){
  const svg=$(".map-stage"); svg.querySelector(".dynamic-markers")?.remove();
  const ns="http://www.w3.org/2000/svg",layer=document.createElementNS(ns,"g"); layer.classList.add("dynamic-markers");
  $$(".region").forEach(region=>{const data=findRegion(region.dataset.region);region.dataset.state=data?.state||""});
  modeData().forEach(item=>{const point=positions[item.province];if(!point)return;const g=document.createElementNS(ns,"g");g.setAttribute("class",`map-marker ${item.state}`);g.setAttribute("transform",`translate(${point[0]} ${point[1]-25})`);const circle=document.createElementNS(ns,"circle");circle.setAttribute("class","marker-bg");circle.setAttribute("r","15");g.append(circle);const text=document.createElementNS(ns,"text");text.setAttribute("y","1");text.textContent=item.national_rank;g.append(text);if(item.is_hot){const fire=document.createElementNS(ns,"text");fire.setAttribute("class","flame");fire.setAttribute("x","14");fire.setAttribute("y","-12");fire.textContent="🔥";g.append(fire)}if(item.national_rank<=3){[[-17,-13],[18,-9],[17,16]].forEach(([x,y],i)=>{const s=document.createElementNS(ns,"circle");s.setAttribute("class","spark");s.setAttribute("cx",x);s.setAttribute("cy",y);s.setAttribute("r",i===1?"2.3":"1.8");s.style.animationDelay=`${i*160}ms`;g.prepend(s)})}layer.append(g)});svg.append(layer)
}
function renderRegion(province){
  const data=findRegion(province)||modeData()[0];if(!data)return;selectedProvince=data.province;$$('.region').forEach(r=>r.setAttribute('aria-pressed',String(r.dataset.region===data.province)));$('#regionProvince').textContent=data.province;$('#regionName').textContent=data.region_name;const popupMascot=$('#regionPopupMascot');if(popupMascot){const mascotProvince=popupMascotProvinceFor(data.province);renderMascotWithMotion(popupMascot,mascotProvince,{champion:data.national_rank===1,label:`${mascotLabelFor(mascotProvince)} 지역 마스코트`})}$('#nationalRank').textContent=`전국 ${data.national_rank}위`;const sign=data.rank_change>0?'▲':data.rank_change<0?'▼':'—';$('#rankChange').innerHTML=`${data.previous_rank}위 → ${data.national_rank}위 <b>${sign} ${Math.abs(data.rank_change)}</b>`;const status=$('#regionStatus');status.className=`status-chip ${data.state}`;status.textContent=stateLabel[data.state]||'💪 ACTIVE';const max=Math.max(...Object.values(data.metrics),30);$('#metricList').innerHTML=Object.entries(data.metrics).map(([name,rank])=>`<div class="metric"><span>${name}</span><i style="--fill:${Math.max(12,100-rank/max*78)}%"></i><strong>${rank}위</strong></div>`).join('');$('#updatedAt').textContent=mode==='activity'?`최근 ${payload?.window_days||7}일 활동 · ${formatDate(payload?.snapshot_date)} 기준`:'공공데이터 기준 · 2026년';
}
function openRegionPopup(trigger){const popup=$('#regionPopup');if(!popup)return;lastFocusedRegion=trigger||document.activeElement;popup.hidden=false;document.body.classList.add('region-popup-open');requestAnimationFrame(()=>$('.close-detail')?.focus())}
function closeRegionPopup(){const popup=$('#regionPopup');if(!popup||popup.hidden)return;popup.hidden=true;document.body.classList.remove('region-popup-open');if(lastFocusedRegion?.focus)lastFocusedRegion.focus()}
function renderTicker(){const items=modeData().filter(x=>x.rank_change>0).sort((a,b)=>b.rank_change-a.rank_change).slice(0,5);$('#risingTicker').innerHTML=items.length?items.map(x=>`<span class="ticker-item">${shortNames[x.province]||x.province} ${x.region_name}<b>▲ ${x.rank_change}</b></span>`).join(''):"<span class='ticker-item'>상승 지역 데이터가 아직 없어요.</span>"}
function renderMyRegion(){
  const panel=$('#myRegionPanel'), mascot=$('#myRegionMascot');
  if(!currentUser){
    panel?.classList.add('is-guest');
    $('#myRegionProvince').textContent='LOGIN';$('#myRegionRank').textContent='—';$('#myRegionChange').textContent='';
    $('#myRegionName').textContent='로그인 후 확인';$('#myRegionHeatCopy').textContent='';
    $('#myRegionAddress').textContent='로그인 정보의 주소지를 기준으로 보여줘요.';
    $('#myRegionSummary').textContent='로그인하면 내 지역 순위와 마스코트가 보여요.';
    if(mascot) renderMascotWithMotion(mascot,null,{champion:false,label:'내 지역 마스코트'});
    return;
  }
  panel?.classList.remove('is-guest');
  const resolvedProvince=resolveProvinceFromProfile(currentUser);
  const rankingProvince=rankingProvinceFor(resolvedProvince);
  const data=payload?.activity?.find(row=>row.province===rankingProvince);
  const meta=mascotMeta(resolvedProvince);
  $('#myRegionProvince').textContent=meta?.short||shortNames[rankingProvince]||resolvedProvince||'지역';
  $('#myRegionAddress').textContent=currentUser.address||currentUser.road_address||`${resolvedProvince||''} ${currentUser.region_name||''}`.trim();
  $('#myRegionName').textContent=currentUser.region_name||data?.region_name||meta?.short||'내 지역';
  $('#myRegionHeatCopy').textContent=' 운동 열기가';
  if(mascot) renderMascotWithMotion(mascot,resolvedProvince,{champion:data?.national_rank===1,label:`${mascotLabelFor(resolvedProvince)} 지역 마스코트`});
  if(!data){
    $('#myRegionRank').textContent='—';$('#myRegionChange').textContent='';
    $('#myRegionSummary').textContent='아직 이 지역의 랭킹 데이터가 없어요.';
    return;
  }
  $('#myRegionRank').textContent=data.regional_rank||data.national_rank;
  const sign=data.rank_change>0?'▲':data.rank_change<0?'▼':'—';$('#myRegionChange').textContent=`${sign} ${Math.abs(data.rank_change)}`;
  const rate=Math.round(Math.abs((data.score_change_rate||0)*100));
  $('#myRegionSummary').textContent=data.score_change_rate>0?`이번 주 ${rate}% 올랐어요.`:data.score_change_rate<0?`이번 주 ${rate}% 내려갔어요.`:'이번 주 순위를 유지하고 있어요.';
}
function renderProfile(){const avatar=$('#profileAvatar'),text=$('#profileText');if(currentUser){avatar.textContent=currentUser.nickname.slice(0,1);text.textContent=`${currentUser.nickname} · ${currentUser.region_name||''}`;}else{avatar.textContent='↪';text.textContent='로그인';}}
function setFriendGate(loggedIn){$('#friendAuthGate').hidden=loggedIn;$('#friendMemberArea').hidden=!loggedIn;if(!loggedIn){$('#friendList').innerHTML='';$('#rivalMessage').hidden=true;}}
async function renderFriends(){
  setFriendGate(Boolean(currentUser)); if(!currentUser)return;
  try{
    const friends=await rankingApi.getFriendRanking();
    $('#friendList').innerHTML=friends.length?friends.map(friend=>`<div class="friend-row ${friend.is_me?'is-me':''}"><span class="friend-rank">${friend.rank}</span><span class="avatar" style="--avatar:${friend.color}">${friend.nickname[0]}</span><span class="friend-name"><strong>${friend.nickname}${friend.is_me?' (나)':''}</strong><small>${friend.rank_change>0?`▲ ${friend.rank_change}계단`:friend.rank_change<0?`▼ ${Math.abs(friend.rank_change)}계단`:'순위 유지'}</small></span><span class="friend-score"><strong>${friend.activity_score.toLocaleString()}점</strong><small>${friend.rank===1?'🔥 선두':friend.is_me?'추격 중':''}</small></span></div>`).join(''):"<div class='friend-empty'>아직 등록된 친구가 없어요.</div>";
    const me=friends.find(x=>x.is_me),above=me&&friends.find(x=>x.rank===me.rank-1),rival=$('#rivalMessage');
    if(me&&above){rival.hidden=false;rival.innerHTML=`<span>⚡</span><p><strong>${above.nickname}까지 ${(above.activity_score-me.activity_score).toLocaleString()}점 남았어요.</strong><br>오늘 운동하면 차이를 줄일 수 있어요.</p>`}else{rival.hidden=true;rival.innerHTML=''}
  }catch(error){if(error.status===401){currentUser=null;renderProfile();setFriendGate(false);return}throw error}
}
async function refreshSession(){currentUser=await rankingApi.getMe();renderProfile();setFriendGate(Boolean(currentUser));renderMyRegion();await renderFriends();if(rankingApi.isMock){const codes=rankingApi.getMockFriendCodes();$('#friendCodeHint').textContent=`MOCK 친구 코드: ${codes.slice(0,4).join(' · ')}`}}
async function handleLogin(){if(!rankingApi.isMock){location.href=rankingApi.getLoginUrl();return}currentUser=await rankingApi.loginForPreview();renderProfile();renderMyRegion();await renderFriends()}
async function handleProfile(){if(!currentUser){await handleLogin();return}if(rankingApi.isMock){if(confirm('MOCK 로그인 상태를 종료할까요?')){await rankingApi.logout();currentUser=null;renderProfile();setFriendGate(false);renderMyRegion();}}}
async function handleFriendAdd(event){event.preventDefault();const input=$('#friendCodeInput'),feedback=$('#friendAddFeedback'),code=input.value.trim();feedback.className='friend-add-feedback';feedback.textContent='';try{const result=await rankingApi.addFriend(code);feedback.classList.add('is-success');feedback.textContent=result.already_exists?`${result.friend.nickname}님은 이미 친구예요.`:`${result.friend.nickname}님을 친구로 추가했어요.`;input.value='';await renderFriends()}catch(error){feedback.classList.add('is-error');feedback.textContent=error.message||'친구 추가 중 문제가 발생했어요.'}}
function setMode(next){mode=next;$$('.rank-tab').forEach(tab=>{const active=tab.dataset.mode===mode;tab.classList.toggle('is-active',active);tab.setAttribute('aria-pressed',String(active))});$('#modeKicker').textContent=mode==='activity'?'WEEKLY HEAT MAP':'OFFICIAL SPORTS INDEX';$('#map-heading').textContent=mode==='activity'?'지역별 운동 열기':'지역 생활체육 랭킹';renderMarkers();renderRegion(selectedProvince);renderTicker()}
function bind(){
  $$('.rank-tab').forEach(tab=>tab.addEventListener('click',()=>setMode(tab.dataset.mode)));$$('.region').forEach(region=>{const select=()=>{renderRegion(region.dataset.region);openRegionPopup(region)};region.addEventListener('click',select);region.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();select()}})});$('.close-detail').addEventListener('click',closeRegionPopup);$('#regionPopup').addEventListener('click',e=>{if(e.target===e.currentTarget)closeRegionPopup()});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeRegionPopup()});$('#retryButton').addEventListener('click',load);$('#friendLoginButton').addEventListener('click',handleLogin);$('#profileButton').addEventListener('click',handleProfile);$('#friendAddForm').addEventListener('submit',handleFriendAdd)
}
async function load(){
  $('#mapLoading').hidden=false;$('#mapError').hidden=true;try{payload=await rankingApi.getRankings();renderMarkers();renderRegion(selectedProvince);renderTicker();await refreshSession();renderMyRegion()}catch(error){console.error(error);$('#mapError').hidden=false}finally{$('#mapLoading').hidden=true}
}
bind();load();
