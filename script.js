const CHARACTERS=[
  {id:"eichi",name:"天祥院英智",unit:"fine",office:"スターメイカープロダクション",image:"images/eichi.svg"},
  {id:"wataru",name:"日々樹渉",unit:"fine",office:"スターメイカープロダクション",image:"images/wataru.svg"},
  {id:"tori",name:"姫宮桃李",unit:"fine",office:"スターメイカープロダクション",image:"images/tori.svg"},
  {id:"yuzuru",name:"伏見弓弦",unit:"fine",office:"スターメイカープロダクション",image:"images/yuzuru.svg"},
  {id:"hokuto",name:"氷鷹北斗",unit:"Trickstar",office:"スターメイカープロダクション",image:"images/hokuto.svg"},
  {id:"subaru",name:"明星スバル",unit:"Trickstar",office:"スターメイカープロダクション",image:"images/subaru.svg"},
  {id:"makoto",name:"遊木真",unit:"Trickstar",office:"スターメイカープロダクション",image:"images/makoto.svg"},
  {id:"mao",name:"衣更真緒",unit:"Trickstar",office:"スターメイカープロダクション",image:"images/mao.svg"},
  {id:"tetora",name:"南雲鉄虎",unit:"流星隊",office:"スターメイカープロダクション",image:"images/tetora.svg"},
  {id:"midori",name:"高峯翠",unit:"流星隊",office:"スターメイカープロダクション",image:"images/midori.svg"},
  {id:"shinobu",name:"仙石忍",unit:"流星隊",office:"スターメイカープロダクション",image:"images/shinobu.svg"},
  {id:"chiaki",name:"守沢千秋",unit:"流星隊",office:"スターメイカープロダクション",image:"images/chiaki.svg"},
  {id:"kanata",name:"深海奏汰",unit:"流星隊",office:"スターメイカープロダクション",image:"images/kanata.svg"},
  {id:"hiiro",name:"天城一彩",unit:"ALKALOID",office:"スターメイカープロダクション",image:"images/hiiro.svg"},
  {id:"aira",name:"白鳥藍良",unit:"ALKALOID",office:"スターメイカープロダクション",image:"images/aira.svg"},
  {id:"mayoi",name:"礼瀬マヨイ",unit:"ALKALOID",office:"スターメイカープロダクション",image:"images/mayoi.svg"},
  {id:"tatsumi",name:"風早巽",unit:"ALKALOID",office:"スターメイカープロダクション",image:"images/tatsumi.svg"},
  {id:"nagisa",name:"乱凪砂",unit:"Eden",office:"コズミック・プロダクション",image:"images/nagisa.svg"},
  {id:"hiyori",name:"巴日和",unit:"Eden",office:"コズミック・プロダクション",image:"images/hiyori.svg"},
  {id:"ibara",name:"七種茨",unit:"Eden",office:"コズミック・プロダクション",image:"images/ibara.svg"},
  {id:"jun",name:"漣ジュン",unit:"Eden",office:"コズミック・プロダクション",image:"images/jun.svg"},
  {id:"shu",name:"斎宮宗",unit:"Valkyrie",office:"コズミック・プロダクション",image:"images/shu.svg"},
  {id:"mika",name:"影片みか",unit:"Valkyrie",office:"コズミック・プロダクション",image:"images/mika.svg"},
  {id:"hinata",name:"葵ひなた",unit:"2wink",office:"コズミック・プロダクション",image:"images/hinata.svg"},
  {id:"yuta",name:"葵ゆうた",unit:"2wink",office:"コズミック・プロダクション",image:"images/yuta.svg"},
  {id:"rinne",name:"天城燐音",unit:"Crazy:B",office:"コズミック・プロダクション",image:"images/rinne.svg"},
  {id:"himeru",name:"HiMERU",unit:"Crazy:B",office:"コズミック・プロダクション",image:"images/himeru.svg"},
  {id:"kohaku",name:"桜河こはく",unit:"Crazy:B",office:"コズミック・プロダクション",image:"images/kohaku.svg"},
  {id:"niki",name:"椎名ニキ",unit:"Crazy:B",office:"コズミック・プロダクション",image:"images/niki.svg"},
  {id:"rei",name:"朔間零",unit:"UNDEAD",office:"コズミック・プロダクション",image:"images/rei.svg"},
  {id:"kaoru",name:"羽風薫",unit:"UNDEAD",office:"コズミック・プロダクション",image:"images/kaoru.svg"},
  {id:"koga",name:"大神晃牙",unit:"UNDEAD",office:"コズミック・プロダクション",image:"images/koga.svg"},
  {id:"adonis",name:"乙狩アドニス",unit:"UNDEAD",office:"コズミック・プロダクション",image:"images/adonis.svg"},
  {id:"tomoya",name:"真白友也",unit:"Ra*bits",office:"リズムリンク",image:"images/tomoya.svg"},
  {id:"nazuna",name:"仁兎なずな",unit:"Ra*bits",office:"リズムリンク",image:"images/nazuna.svg"},
  {id:"mitsuru",name:"天満光",unit:"Ra*bits",office:"リズムリンク",image:"images/mitsuru.svg"},
  {id:"hajime",name:"紫之創",unit:"Ra*bits",office:"リズムリンク",image:"images/hajime.svg"},
  {id:"keito",name:"蓮巳敬人",unit:"紅月",office:"リズムリンク",image:"images/keito.svg"},
  {id:"kuro",name:"鬼龍紅郎",unit:"紅月",office:"リズムリンク",image:"images/kuro.svg"},
  {id:"souma",name:"神崎颯馬",unit:"紅月",office:"リズムリンク",image:"images/souma.svg"},
  {id:"ibuki",name:"滝維吹",unit:"紅月",office:"リズムリンク",image:"images/ibuki.svg"},
  {id:"juis",name:"小鹿ジュイス",unit:"MELLOW DEAR US",office:"リズムリンク",image:"images/juis.svg"},
  {id:"nozomi",name:"円果望見",unit:"MELLOW DEAR US",office:"リズムリンク",image:"images/nozomi.svg"},
  {id:"mashu",name:"久遠舞珠",unit:"MELLOW DEAR US",office:"リズムリンク",image:"images/mashu.svg"},
  {id:"chitose",name:"甘楽チトセ",unit:"MELLOW DEAR US",office:"リズムリンク",image:"images/chitose.svg"},
  {id:"tsukasa",name:"朱桜司",unit:"Knights",office:"ニューディメンション",image:"images/tsukasa.svg"},
  {id:"leo",name:"月永レオ",unit:"Knights",office:"ニューディメンション",image:"images/leo.svg"},
  {id:"izumi",name:"瀬名泉",unit:"Knights",office:"ニューディメンション",image:"images/izumi.svg"},
  {id:"ritsu",name:"朔間凛月",unit:"Knights",office:"ニューディメンション",image:"images/ritsu.svg"},
  {id:"arashi",name:"鳴上嵐",unit:"Knights",office:"ニューディメンション",image:"images/arashi.svg"},
  {id:"natsume",name:"逆先夏目",unit:"Switch",office:"ニューディメンション",image:"images/natsume.svg"},
  {id:"tsumugi",name:"青葉つむぎ",unit:"Switch",office:"ニューディメンション",image:"images/tsumugi.svg"},
  {id:"sora",name:"春川宙",unit:"Switch",office:"ニューディメンション",image:"images/sora.svg"},
  {id:"madara",name:"三毛縞斑",unit:"MaM",office:"ニューディメンション",image:"images/madara.svg"},
  {id:"es",name:"エス",unit:"Special for Princess!",office:"ニューディメンション",image:"images/es.svg"},
  {id:"kanna",name:"カンナ",unit:"Special for Princess!",office:"ニューディメンション",image:"images/kanna.svg"},
  {id:"yume",name:"ユメ",unit:"Special for Princess!",office:"ニューディメンション",image:"images/yume.svg"},
  {id:"laika",name:"ライカ",unit:"Special for Princess!",office:"ニューディメンション",image:"images/laika.svg"}
];

const OFFICE_ORDER=["スターメイカープロダクション","コズミック・プロダクション","リズムリンク","ニューディメンション"];
const $=id=>document.getElementById(id);
const screens=["start","select","rank","result"];
let selected=[], order=[], pairs=[], pairIndex=0, scores={};

function show(id){
  screens.forEach(s=>$(s).classList.toggle("active",s===id));
  scrollTo({top:0,behavior:"instant"});
}

function updateSelectionUI(){
  $("count").textContent=selected.length;
  $("confirm").disabled=selected.length<2;
  $("confirm").textContent=selected.length<2 ? "2人以上を選択" : `${selected.length}人でスタート`;
}

function renderGrid(){
  $("grid").innerHTML="";
  let currentOffice="", currentUnit="";
  CHARACTERS.forEach(c=>{
    if(c.office!==currentOffice){
      currentOffice=c.office;
      currentUnit="";
      const officeTitle=document.createElement("h3");
      officeTitle.className="officeTitle";
      officeTitle.textContent=c.office;
      $("grid").appendChild(officeTitle);
    }
    if(c.unit!==currentUnit){
      currentUnit=c.unit;
      const unitTitle=document.createElement("div");
      unitTitle.className="unitTitle";
      unitTitle.textContent=c.unit;
      $("grid").appendChild(unitTitle);
    }
    const el=document.createElement("article");
    el.className="card"+(selected.includes(c.id)?" selected":"");
    el.innerHTML=`<button><img src="${c.image}" alt="${c.name}" loading="lazy"><div class="info"><div class="name">${c.name}</div><div class="unit">${c.unit}</div></div></button>`;
    el.onclick=()=>{
      if(selected.includes(c.id)) selected=selected.filter(x=>x!==c.id);
      else selected.push(c.id);
      renderGrid();
      updateSelectionUI();
    };
    $("grid").appendChild(el);
  });
}

function start(){
  selected=[];
  renderGrid();
  updateSelectionUI();
  show("select");
}

function begin(){
  order=CHARACTERS.filter(c=>selected.includes(c.id));
  scores={};
  order.forEach(c=>scores[c.id]=0);
  pairs=[];
  for(let i=0;i<order.length;i++) for(let j=i+1;j<order.length;j++) pairs.push([order[i],order[j]]);
  pairs.sort(()=>Math.random()-.5);
  pairIndex=0;
  $("total").textContent=pairs.length;
  nextPair();
  show("rank");
}

function nextPair(){
  if(pairIndex>=pairs.length) return finish();
  const [a,b]=pairs[pairIndex];
  $("progress").textContent=pairIndex+1;
  $("battle").innerHTML="";
  [a,b].forEach(c=>{
    const el=document.createElement("div");
    el.className="battleCard";
    el.innerHTML=`<button><img src="${c.image}" alt="${c.name}"><div class="battleName">${c.name}</div></button>`;
    el.onclick=()=>vote(c.id);
    $("battle").appendChild(el);
  });
}

function vote(winnerId){
  const [a,b]=pairs[pairIndex];
  scores[winnerId]+=1;
  pairIndex++;
  nextPair();
}

$("skip").onclick=()=>{pairIndex++;nextPair()};

function finish(){
  order.sort((a,b)=>(scores[b.id]-scores[a.id]) || a.name.localeCompare(b.name,"ja"));
  renderResults();
  show("result");
}

function renderResults(){
  $("results").innerHTML=order.map((c,i)=>`<div class="result"><div class="rankNo">${i+1}</div><img src="${c.image}" alt="${c.name}"><div><div class="resultName">${c.name}</div><div class="resultUnit">${c.unit}</div></div></div>`).join("");
}

async function copyResult(){
  const top=order.slice(0,9);
  const text=`あんスタ好き顔TOP${top.length}\n`+top.map((c,i)=>`${i+1}. ${c.name}`).join("\n");
  try{
    if(navigator.share) await navigator.share({title:`あんスタ好き顔TOP${top.length}`,text});
    else {
      await navigator.clipboard.writeText(text);
      $("copied").textContent="結果をコピーしました";
    }
  }catch(e){}
}

$("startBtn").onclick=start;
$("confirm").onclick=begin;
$("copy").onclick=copyResult;
$("again").onclick=()=>show("start");
renderGrid();
