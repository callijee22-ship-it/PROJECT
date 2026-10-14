const mascotDefs = {
  "서울특별시": { short:"서울", kind:"star", body:"#f8fbff", accent:"#73bdf0", dark:"#40608c" },
  "부산광역시": { short:"부산", kind:"bird", body:"#f8fbff", accent:"#5aaee8", dark:"#355b84" },
  "대구광역시": { short:"대구", kind:"apple", body:"#ef8f78", accent:"#79b85b", dark:"#7a4d4f" },
  "인천광역시": { short:"인천", kind:"pilot", body:"#f8fbff", accent:"#6daedb", dark:"#425b84" },
  "광주광역시": { short:"광주", kind:"flower", body:"#ffd7e4", accent:"#ee8dae", dark:"#7e5671" },
  "대전광역시": { short:"대전", kind:"robot", body:"#f4f6ff", accent:"#738bd4", dark:"#43537d" },
  "울산광역시": { short:"울산", kind:"whale", body:"#81c7e8", accent:"#f0c45f", dark:"#355f7d" },
  "세종특별자치시": { short:"세종", kind:"scholar", body:"#fff8ec", accent:"#303847", dark:"#6e584b" },
  "경기도": { short:"경기", kind:"dog", body:"#fffaf4", accent:"#5d9fe4", dark:"#5d5969" },
  "강원특별자치도": { short:"강원", kind:"bear", body:"#fffdf9", accent:"#79b977", dark:"#5b6870" },
  "충청북도": { short:"충북", kind:"turtle", body:"#a7d69e", accent:"#5fae8f", dark:"#4f6c64" },
  "충청남도": { short:"충남", kind:"cow", body:"#d7a36a", accent:"#f3d382", dark:"#745649" },
  "전북특별자치도": { short:"전북", kind:"rice", body:"#fff9ed", accent:"#e2a85a", dark:"#7f654d" },
  "전라남도": { short:"전남", kind:"dolphin", body:"#77bfe6", accent:"#f0c66d", dark:"#3e6b88" },
  "경상북도": { short:"경북", kind:"scholar-book", body:"#f5e6c9", accent:"#303847", dark:"#735e4d" },
  "경상남도": { short:"경남", kind:"bird-cap", body:"#f8fbff", accent:"#5f9ee0", dark:"#455e86" },
  "제주특별자치도": { short:"제주", kind:"stone", body:"#74747b", accent:"#f29a57", dark:"#4f5058" }
};

const provinceAliases = [
  ["서울특별시", ["서울특별시","서울시","서울"]],
  ["부산광역시", ["부산광역시","부산시","부산"]],
  ["대구광역시", ["대구광역시","대구시","대구"]],
  ["인천광역시", ["인천광역시","인천시","인천"]],
  ["광주광역시", ["광주광역시","광주시","광주"]],
  ["대전광역시", ["대전광역시","대전시","대전"]],
  ["울산광역시", ["울산광역시","울산시","울산"]],
  ["세종특별자치시", ["세종특별자치시","세종시","세종"]],
  ["경기도", ["경기도","경기"]],
  ["강원특별자치도", ["강원특별자치도","강원도","강원"]],
  ["충청북도", ["충청북도","충북"]],
  ["충청남도", ["충청남도","충남"]],
  ["전북특별자치도", ["전북특별자치도","전라북도","전북"]],
  ["전라남도", ["전라남도","전남"]],
  ["경상북도", ["경상북도","경북"]],
  ["경상남도", ["경상남도","경남"]],
  ["제주특별자치도", ["제주특별자치도","제주도","제주"]]
];

function flattenAddress(value){
  if(!value) return "";
  if(typeof value === "string") return value;
  if(Array.isArray(value)) return value.map(flattenAddress).join(" ");
  if(typeof value === "object") return Object.values(value).map(flattenAddress).join(" ");
  return String(value);
}

export function resolveProvinceFromProfile(profile){
  if(!profile) return null;
  const haystack=[profile.province,profile.sido,profile.address,profile.road_address,profile.jibun_address,profile.region_name]
    .map(flattenAddress).filter(Boolean).join(" ");
  for(const [province,aliases] of provinceAliases){
    if(aliases.some(alias=>haystack.includes(alias))) return province;
  }
  return profile.province || null;
}

export function mascotMeta(province){ return mascotDefs[province] || null; }

function face(cx=60,cy=49){
  return `<circle cx="${cx-10}" cy="${cy}" r="3.4" fill="#303544"/><circle cx="${cx+10}" cy="${cy}" r="3.4" fill="#303544"/><path d="M54 ${cy+10} Q60 ${cy+15} 66 ${cy+10}" fill="none" stroke="#303544" stroke-width="2.4" stroke-linecap="round"/><circle cx="44" cy="${cy+8}" r="4" fill="#f6a9b5" opacity=".72"/><circle cx="76" cy="${cy+8}" r="4" fill="#f6a9b5" opacity=".72"/>`;
}
function baseBody(body,accent,dark){
  return `<ellipse cx="60" cy="75" rx="28" ry="28" fill="${body}" stroke="#fff" stroke-width="3"/><path d="M38 80 Q27 86 30 94 Q37 96 43 89" fill="${accent}" opacity=".9"/><path d="M82 80 Q93 86 90 94 Q83 96 77 89" fill="${accent}" opacity=".9"/><ellipse cx="60" cy="101" rx="18" ry="6" fill="${dark}" opacity=".08"/>`;
}
function kindMarkup(def){
  const {kind,body,accent,dark}=def;
  switch(kind){
    case "star": return `<path d="M60 13 70 36 96 38 76 54 82 81 60 66 38 81 44 54 24 38 50 36Z" fill="${body}" stroke="#fff" stroke-width="3"/><path d="M43 73 Q32 81 37 90 Q46 90 51 82" fill="${accent}"/>${face(60,49)}<path d="M38 82 Q60 94 82 82" fill="none" stroke="${accent}" stroke-width="7" stroke-linecap="round"/>`;
    case "bird": return `${baseBody(body,accent,dark)}<path d="M39 57 Q46 27 60 30 Q74 27 81 57 Q74 38 60 40 Q46 38 39 57" fill="${dark}"/>${face(60,57)}<path d="M55 66 65 66 60 72Z" fill="#f0b24a"/><path d="M43 35 Q59 23 77 36" fill="none" stroke="${accent}" stroke-width="7" stroke-linecap="round"/>`;
    case "apple": return `<path d="M33 52 Q31 28 51 25 Q58 24 61 30 Q69 22 82 28 Q94 39 87 61 Q82 86 60 95 Q38 86 33 52Z" fill="${body}" stroke="#fff" stroke-width="3"/><path d="M59 28 Q61 14 74 10 Q76 23 63 30" fill="${accent}"/><path d="M55 29 Q48 17 39 17 Q43 30 55 34" fill="${accent}" opacity=".9"/>${face(60,53)}`;
    case "pilot": return `${baseBody(body,accent,dark)}<path d="M42 44 Q60 29 78 44" fill="none" stroke="${accent}" stroke-width="7"/><circle cx="50" cy="39" r="8" fill="none" stroke="${dark}" stroke-width="3"/><circle cx="70" cy="39" r="8" fill="none" stroke="${dark}" stroke-width="3"/><path d="M58 39H62" stroke="${dark}" stroke-width="3"/>${face(60,61)}<path d="M37 78 25 69M83 78 95 69" stroke="${accent}" stroke-width="6" stroke-linecap="round"/>`;
    case "flower": return `<g fill="${body}" stroke="#fff" stroke-width="3"><ellipse cx="60" cy="27" rx="14" ry="19"/><ellipse cx="83" cy="41" rx="14" ry="19" transform="rotate(55 83 41)"/><ellipse cx="77" cy="70" rx="14" ry="19" transform="rotate(120 77 70)"/><ellipse cx="43" cy="70" rx="14" ry="19" transform="rotate(-120 43 70)"/><ellipse cx="37" cy="41" rx="14" ry="19" transform="rotate(-55 37 41)"/></g><circle cx="60" cy="50" r="25" fill="#fff9fb"/>${face(60,50)}<path d="M55 77 60 93 65 77" fill="${accent}"/>`;
    case "robot": return `<rect x="29" y="29" width="62" height="56" rx="24" fill="${body}" stroke="#fff" stroke-width="3"/><path d="M60 29V17M60 17l7-6" stroke="${accent}" stroke-width="4" stroke-linecap="round"/><circle cx="68" cy="10" r="4" fill="${accent}"/><rect x="38" y="40" width="44" height="27" rx="12" fill="${dark}"/>${face(60,52)}<path d="M39 84 Q60 102 81 84" fill="${accent}" opacity=".9"/>`;
    case "whale": return `<path d="M25 65 Q29 34 62 36 Q88 37 91 58 Q94 75 79 87 Q64 98 44 88 Q31 82 25 65Z" fill="${body}" stroke="#fff" stroke-width="3"/><path d="M85 64 Q99 55 104 64 Q99 77 87 78" fill="${accent}"/><path d="M48 34 Q48 20 43 14M54 34 Q58 20 63 15" stroke="${accent}" stroke-width="3" stroke-linecap="round"/>${face(58,60)}`;
    case "scholar": case "scholar-book": return `${baseBody(body,accent,dark)}<path d="M38 35 82 35 75 25 45 25Z" fill="${accent}"/><path d="M44 25 Q60 15 76 25" fill="${dark}"/>${face(60,57)}${kind==="scholar-book"?`<path d="M45 78 Q60 73 60 91 Q45 86 45 78ZM75 78 Q60 73 60 91 Q75 86 75 78Z" fill="#5b7398" stroke="#fff" stroke-width="2"/>`:`<path d="M51 79h18v13H51z" fill="#5b7398" rx="2"/>`}`;
    case "dog": return `${baseBody(body,accent,dark)}<path d="M37 48 Q25 35 30 60 Q36 69 43 61M83 48 Q95 35 90 60 Q84 69 77 61" fill="${dark}" opacity=".85"/>${face(60,58)}<path d="M41 80 Q60 91 79 80" fill="none" stroke="${accent}" stroke-width="7" stroke-linecap="round"/><circle cx="60" cy="83" r="4" fill="#fff"/>`;
    case "bear": return `${baseBody(body,accent,dark)}<circle cx="40" cy="39" r="11" fill="${body}" stroke="#fff" stroke-width="3"/><circle cx="80" cy="39" r="11" fill="${body}" stroke="#fff" stroke-width="3"/>${face(60,58)}<path d="M38 82 Q60 96 82 82" fill="none" stroke="${accent}" stroke-width="7" stroke-linecap="round"/>`;
    case "turtle": return `<ellipse cx="60" cy="67" rx="31" ry="29" fill="${body}" stroke="#fff" stroke-width="3"/><path d="M37 49 Q60 31 83 49 Q76 73 60 87 Q44 73 37 49Z" fill="${accent}" opacity=".55"/><circle cx="60" cy="52" r="20" fill="#dff1d9"/>${face(60,53)}<path d="M27 67h-8M93 67h8" stroke="${dark}" stroke-width="6" stroke-linecap="round"/>`;
    case "cow": return `${baseBody(body,accent,dark)}<path d="M42 40 31 28 Q29 45 41 51M78 40 89 28 Q91 45 79 51" fill="${accent}"/><path d="M48 34 Q60 26 72 34" fill="${body}"/>${face(60,57)}<ellipse cx="60" cy="72" rx="10" ry="7" fill="#f3c6ae"/><circle cx="56" cy="72" r="1.8" fill="${dark}"/><circle cx="64" cy="72" r="1.8" fill="${dark}"/>`;
    case "rice": return `${baseBody(body,accent,dark)}<path d="M40 74 Q60 63 80 74 L75 91 H45Z" fill="${accent}"/><path d="M44 75 Q60 61 76 75" fill="#fff" stroke="#fff" stroke-width="5"/>${face(60,54)}<path d="M31 45 Q44 35 53 37" stroke="#e0ba67" stroke-width="4" stroke-linecap="round"/>`;
    case "dolphin": return `<path d="M25 68 Q35 35 67 39 Q84 40 94 29 Q95 50 84 57 Q94 72 82 84 Q65 98 43 88 Q28 82 25 68Z" fill="${body}" stroke="#fff" stroke-width="3"/><path d="M80 82 Q95 89 98 77" fill="${accent}"/>${face(58,61)}<path d="M46 38 Q53 27 61 38" fill="${accent}" opacity=".8"/>`;
    case "bird-cap": return `${baseBody(body,accent,dark)}<path d="M39 56 Q47 30 60 32 Q73 30 81 56 Q72 40 60 42 Q48 40 39 56" fill="${dark}"/>${face(60,60)}<path d="M38 35 Q58 19 80 34 L72 42 Q54 33 38 44Z" fill="${accent}"/><circle cx="74" cy="27" r="5" fill="#f0b65d"/>`;
    case "stone": return `<path d="M36 93 Q30 67 35 38 Q39 18 60 18 Q81 18 85 38 Q90 67 84 93Z" fill="${body}" stroke="#fff" stroke-width="3"/><path d="M45 32H75M42 42H78" stroke="${dark}" stroke-width="3" stroke-linecap="round" opacity=".55"/>${face(60,57)}<circle cx="84" cy="79" r="9" fill="${accent}"/><path d="M84 70 Q87 61 94 62" stroke="#5ea35e" stroke-width="3"/>`;
    default: return `${baseBody(body,accent,dark)}${face(60,57)}`;
  }
}

export function regionMascotSvg(province){
  const def=mascotDefs[province] || {short:"지역",kind:"bear",body:"#f8fbff",accent:"#9ab8d8",dark:"#5b6678"};
  return `<svg class="region-mascot-svg" viewBox="0 0 120 120" role="img" aria-label="${def.short} 지역 마스코트"><defs><filter id="mascotShadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#61708f" flood-opacity=".18"/></filter></defs><g filter="url(#mascotShadow)">${kindMarkup(def)}</g></svg>`;
}
