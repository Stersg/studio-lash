/* ===== Studio de Conteúdo (motor reutilizável) ===== */
var SG=(window.STUDIO||{});
var SG_NOME=SG.nome||"Sua Marca", SG_HANDLE=SG.handle||"@suamarca", SG_INIC=SG.iniciais||"SM", SG_CAP=SG.caption||"seu nicho • aqui";

const CATS = {
  edu: { nome:"Dicas & Cuidados", cor:"var(--edu)", pct:30,
    tags:["#ExtensãoDeCílios","#CuidadosComOsCílios","#LashDesign","#CíliosPerfeitos","#LashCare"] },
  car: { nome:"Bastidores do Estúdio", cor:"var(--car)", pct:20,
    tags:["#LashDesigner","#EstúdioDeCílios","#BastidoresLash","#CíliosRJ","#LashArtist"] },
  aut: { nome:"Autoridade & Mitos", cor:"var(--aut)", pct:15,
    tags:["#ExtensãoDeCílios","#MitosDosCílios","#LashDesign","#CíliosNaturais"] },
  pro: { nome:"Antes & Depois", cor:"var(--pro)", pct:20,
    tags:["#AntesEDepois","#ExtensãoDeCílios","#Transformação","#CíliosPerfeitos","#LashLovers"] },
  con: { nome:"Conexão & Agenda", cor:"var(--con)", pct:15,
    tags:["#ExtensãoDeCílios","#CíliosRJ","#Curicica","#AgendaAberta","#LashDesignRJ"] }
};
const HEX = {};
function catHex(k){
  if(HEX[k]) return HEX[k];
  const v=getComputedStyle(document.documentElement).getPropertyValue(CATS[k].cor.match(/--[\w-]+/)[0]).trim();
  HEX[k]=v; return v;
}
const catVar = catHex;

/* ---- Roteiros virais ---- */
const ROTEIROS = [
  { id:"lista", nome:"Lista / Número", cat:"edu",
    desc:"Formato mais salvável do Instagram. O número prende o olhar.",
    exemplo:"3 cuidados que fazem seu cílio durar o dobro 💡",
    campos:[{k:"num",l:"Número",ph:"3"},{k:"tema",l:"Tema (do que é a lista)",ph:"cuidados que fazem seu cílio durar mais"},
      {k:"i1",l:"Item 1",ph:"Não molhe os fios nas primeiras 24h"},{k:"i2",l:"Item 2",ph:"Escove os cílios todo dia com a escovinha"},{k:"i3",l:"Item 3",ph:"Evite produtos oleosos na região dos olhos"}],
    montar:v=>`${v.num} ${v.tema} 💡\n\nAnota aí que isso muda o jogo dos seus cílios:\n\n1. ${v.i1}\n\n2. ${v.i2}\n\n3. ${v.i3}\n\nParece detalhe, mas é o que separa o cílio que dura do que cai em uma semana. ✨\n\nSalva esse post pra não esquecer e me conta: qual desses você já fazia? 👇` },
  { id:"mito", nome:"Mito x Verdade", cat:"aut",
    desc:"Derruba uma crença comum sobre cílios. Gera debate e salva a cliente de erros.",
    exemplo:"Extensão de cílios estraga o cílio natural? Mito.",
    campos:[{k:"crenca",l:"O mito (o que dizem por aí)",ph:"Extensão de cílios estraga o cílio natural"},{k:"verdade",l:"A verdade",ph:"Aplicada e mantida do jeito certo, ela protege e valoriza o seu fio"},{k:"expl",l:"Por quê (1-2 frases)",ph:"O que danifica é aplicação mal feita, cola de má qualidade e falta de manutenção"}],
    montar:v=>`Todo mundo repete: "${v.crenca}". 🚫\n\nMito.\n\nA verdade: ${v.verdade}.\n\n${v.expl}.\n\nJá vi muita cliente sofrer por acreditar nisso. Informação boa protege seus cílios (e seu bolso). 💛\n\nVocê também acreditava nesse mito? Comenta aqui 👇` },
  { id:"antesdepois", nome:"Antes e depois", cat:"pro",
    desc:"Contraste de transformação. O formato que mais alcança e mais vende.",
    exemplo:"Antes: olhar apagado. Depois: olhar de boneca. ✨",
    campos:[{k:"antes",l:"Como era ANTES",ph:"olhar apagado, precisando de rímel todo dia pra se sentir arrumada"},{k:"depois",l:"Como ficou DEPOIS",ph:"olhar iluminado e aberto, linda ao acordar sem uma gota de maquiagem"},{k:"tecnica",l:"Técnica usada",ph:"volume brasileiro com efeito boneca"}],
    montar:v=>`Antes: ${v.antes}.\n\nDepois: ${v.depois}. ✨\n\nTécnica usada: ${v.tecnica}.\n\nNada de maquiagem, nada de rímel borrado. Esse é o poder de um olhar valorizado do jeito certo. 👀\n\nQuer esse resultado em você? Chama no direct pra agendar 💛\nSalva pra guardar de inspiração 👇` },
  { id:"cuidado", nome:"Passo a passo de cuidado", cat:"edu",
    desc:"Ensina a manter o resultado. Alto valor percebido, muitos salvamentos.",
    exemplo:"Como fazer seus cílios durarem até a manutenção 💆‍♀️",
    campos:[{k:"obj",l:"O objetivo",ph:"fazer seus cílios durarem lindos até a manutenção"},{k:"p1",l:"Passo 1",ph:"Limpe a região com shampoo específico 2x por semana"},{k:"p2",l:"Passo 2",ph:"Escove os fios pela manhã pra alinhar"},{k:"p3",l:"Passo 3",ph:"Durma de barriga pra cima sempre que possível"}],
    montar:v=>`Como ${v.obj} 💆‍♀️\n\nPasso 1: ${v.p1}.\n\nPasso 2: ${v.p2}.\n\nPasso 3: ${v.p3}.\n\nO segredo não é produto caro, é constância no cuidado. 🤍\n\nSalva pra seguir o passo a passo e marca aquela amiga que precisa ver isso 👇` },
  { id:"bastidores", nome:"Bastidores do estúdio", cat:"car",
    desc:"Mostra o processo e o carinho. Cria conexão e desejo pelo atendimento.",
    exemplo:"Um pedacinho do meu dia no estúdio 🎧",
    campos:[{k:"momento",l:"O momento",ph:"Preparando a maca e separando os materiais antes da primeira cliente"},{k:"detalhe",l:"O que ninguém vê",ph:"cada aplicação leva de 1h30 a 2h de concentração total, fio por fio"},{k:"sentimento",l:"O que isso te faz sentir",ph:"amo esse ritual, é meu momento de foco e de cuidado com a cliente"}],
    montar:v=>`Um pedacinho do meu dia no estúdio 🎧\n\n${v.momento}.\n\nO que ninguém vê: ${v.detalhe}.\n\n${v.sentimento}.\n\nCada cliente que senta na maca sai com o olhar renovado, e isso não tem preço pra mim. 💛\n\nMarca quem merece esse momento de autocuidado 👇` },
  { id:"depoimento", nome:"Depoimento de cliente", cat:"pro",
    desc:"Prova social pura. Fala de cliente vende mais que qualquer anúncio.",
    exemplo:"'Nunca me senti tão bonita' foi o que ela disse 🥹",
    campos:[{k:"cliente",l:"Nome/apelido da cliente",ph:"Ju"},{k:"fala",l:"O que ela disse",ph:"Nunca me senti tão bonita, agora acordo pronta"},{k:"resultado",l:"O resultado/contexto",ph:"Ela veio insegura, achando que não combinava com ela, e saiu apaixonada"}],
    montar:v=>`"${v.fala}" 🥹\n\nFoi o que a ${v.cliente} me disse depois da aplicação.\n\n${v.resultado}.\n\nÉ por isso que eu amo o que faço. Ver a cliente se olhar no espelho e sorrir é tudo. 💛\n\nQuer sentir isso também? Agenda seu horário no direct ✨\nComenta um 💛 se você ama se sentir linda 👇` },
  { id:"duvida", nome:"Dúvida frequente", cat:"edu",
    desc:"Responde a pergunta que trava a cliente antes de agendar. Quebra objeção.",
    exemplo:"Extensão de cílios dói? Te respondo agora 🤔",
    campos:[{k:"pergunta",l:"A pergunta",ph:"Extensão de cílios dói?"},{k:"resposta",l:"A resposta",ph:"Não dói. A maioria das clientes relaxa tanto que dorme durante a aplicação"},{k:"extra",l:"Complemento",ph:"Você fica deitada, de olhos fechados, num ambiente tranquilo do começo ao fim"}],
    montar:v=>`"${v.pergunta}" 🤔\n\nRecebo essa pergunta toda semana, então vou responder de vez:\n\n${v.resposta}.\n\n${v.extra}.\n\nDúvida esclarecida é cliente mais tranquila na maca. 🤍\n\nFicou com outra dúvida? Manda aqui nos comentários que eu respondo 👇` },
  { id:"hottake", nome:"Opinião forte", cat:"aut",
    desc:"Posição clara e corajosa. Posiciona você como profissional de verdade.",
    exemplo:"Volume russo nem sempre é a melhor escolha 💬",
    campos:[{k:"op",l:"Sua opinião (forte e clara)",ph:"Nem toda cliente deveria fazer volume russo"},{k:"arg",l:"O argumento",ph:"O volume tem que respeitar a saúde e a quantidade do seu fio natural. Peso demais quebra o cílio e não é bonito"}],
    montar:v=>`Opinião que talvez você não goste de ouvir:\n\n${v.op}. 💬\n\nSei que soa polêmico, mas me escuta:\n${v.arg}.\n\nCílio bonito é o que respeita a saúde do seu olhar, não o que só enche os olhos no primeiro dia. 💛\n\nConcorda ou discorda? Quero te ler nos comentários 👇` },
  { id:"convite", nome:"Convite pra agendar", cat:"con",
    desc:"Post de venda direta. Desperta o desejo e chama pra ação.",
    exemplo:"Seu olhar merece esse cuidado ✨",
    campos:[{k:"gancho",l:"Gancho de abertura",ph:"Cansada de depender do rímel todo santo dia?"},{k:"beneficio",l:"O benefício principal",ph:"Com a extensão você acorda linda, ganha tempo de manhã e um olhar de tirar o fôlego"},{k:"condicao",l:"Condição/urgência (opcional)",ph:"Essa semana ainda tenho horários de quinta e sexta"}],
    montar:v=>`${v.gancho} ✨\n\nImagina acordar, se olhar no espelho e já estar linda. Sem rímel, sem esconder o olhar cansado. 👀\n\n${v.beneficio}.\n\n${v.condicao}.\n\nBora realizar esse desejo? Chama no direct ou clica no link da bio pra agendar 💛\nAgenda com poucos horários 👇` },
  { id:"pergunta", nome:"Pergunta / Caixinha", cat:"con",
    desc:"Puxa comentário e direct. Ótimo pra reativar o alcance do perfil.",
    exemplo:"Qual seu maior medo antes da primeira aplicação? 💭",
    campos:[{k:"ctx",l:"Contexto curto",ph:"Conversando com quem nunca fez cílios, sempre aparece a mesma insegurança"},{k:"perg",l:"A pergunta",ph:"qual é o seu maior medo: ficar exagerado, doer ou não combinar com você?"}],
    montar:v=>`${v.ctx}. 💭\n\nAí fica a pergunta:\n${v.perg}\n\nNão existe resposta errada, quero muito saber a sua. 🤍\n\nComenta aqui embaixo 👇\nSua resposta ajuda outras meninas que estão na mesma dúvida.` },
  { id:"tipos", nome:"Comparação de técnicas", cat:"edu",
    desc:"Explica a diferença entre técnicas. Educa e ajuda a cliente a escolher.",
    exemplo:"Fio a fio ou volume russo? Entenda a diferença 👀",
    campos:[{k:"op1",l:"Técnica 1",ph:"Fio a fio"},{k:"desc1",l:"Como é a técnica 1",ph:"um fio de extensão para cada fio natural, efeito super natural e leve"},{k:"op2",l:"Técnica 2",ph:"Volume russo"},{k:"desc2",l:"Como é a técnica 2",ph:"leques de vários fios finos, efeito mais denso e marcante"},{k:"dica",l:"Dica de profissional",ph:"olhos com poucos fios pedem volume pra preencher, olhos cheios ficam lindos no fio a fio"}],
    montar:v=>`${v.op1} ou ${v.op2}? A dúvida de toda cliente 👀\n\n${v.op1}: ${v.desc1}.\n\n${v.op2}: ${v.desc2}.\n\nDica de profissional: ${v.dica}.\n\nO ideal é sempre alinhar com o seu tipo de olho e a sua rotina. Cada olhar pede uma técnica. 💛\n\nQual combina mais com você? Comenta 👇` },
  { id:"rotina", nome:"Se cuida comigo", cat:"car",
    desc:"Rotina de autocuidado. Aproxima e mostra o seu estilo de vida.",
    exemplo:"3 hábitos de autocuidado que fazem diferença 🤍",
    campos:[{k:"c1",l:"Hábito 1",ph:"Reservar 1 momento do dia só pra mim, sem celular"},{k:"c2",l:"Hábito 2",ph:"Manter os cílios em dia pra acordar já me sentindo bem"},{k:"c3",l:"Hábito 3",ph:"Beber água e cuidar da pele antes de dormir"}],
    montar:v=>`Se cuida comigo: 3 hábitos que mudaram o meu dia a dia 🤍\n\n1. ${v.c1}.\n\n2. ${v.c2}.\n\n3. ${v.c3}.\n\nAutocuidado não é luxo, é rotina. E começa por pequenas escolhas todo dia. ✨\n\nQual desses você já faz? Comenta 👇` }
];

/* ===================== TABS ===================== */
document.querySelectorAll(".tab").forEach(t=>t.onclick=()=>switchTab(t.dataset.tab,t));
function switchTab(id, btn){
  document.querySelectorAll(".tab").forEach(x=>x.classList.remove("active"));
  document.querySelectorAll(".panel").forEach(x=>x.classList.remove("active"));
  (btn||document.querySelector(`.tab[data-tab="${id}"]`)).classList.add("active");
  document.getElementById(id).classList.add("active");
  window.scrollTo({top:0,behavior:"smooth"});
}

/* ===================== THEME ===================== */
const tbtn=document.getElementById("themeToggle");
tbtn.onclick=()=>{
  const root=document.documentElement, dark=root.getAttribute("data-theme")==="dark";
  root.setAttribute("data-theme",dark?"light":"dark");
  tbtn.textContent=dark?"🌙":"☀️";
  for(const k in HEX) delete HEX[k];
};

/* ===================== FLOW ===================== */
(function flow(){
  const steps=[["📡","Escolher post"],["🎨","Criar arte"],["📋","Copiar"],["🚀","Postar"]];
  document.getElementById("flow").innerHTML=steps.map((s,i)=>
    `<div class="flow-step"><div class="flow-ic">${s[0]}</div><div>${s[1]}</div></div>${i<3?'<div class="flow-arrow">→</div>':''}`
  ).join("");
})();

/* ===================== PROP BARS ===================== */
(function propBars(){
  document.getElementById("propBars").innerHTML=Object.keys(CATS).map(k=>{
    const c=CATS[k];
    return `<div class="bar-row"><div class="bar-label">${c.nome}</div>
      <div class="bar-track"><div class="bar-fill" style="width:${c.pct}%;background:${catVar(k)}">${c.pct}%</div></div></div>`;
  }).join("");
})();

/* ============ POSTS PRONTOS (Hoje / Radar / Produtos / Motivação) ============ */
function escapeHtml(s){return String(s).replace(/[&<>]/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;"}[m]));}
/* ---- marcar "já postei" (salvo no navegador) ---- */
function _postSet(){try{return new Set(JSON.parse(localStorage.getItem("sg_postados")||"[]"));}catch(_){return new Set();}}
function _postSave(s){try{localStorage.setItem("sg_postados",JSON.stringify([...s]));}catch(_){}}
function postKey(scope,it){return scope+"::"+((it.artTitulo||it.titulo||it.texto||"").slice(0,60));}
function markDoneUI(card,btn,done){if(card)card.classList.toggle("postado",done);btn.textContent=done?"✓ Postado":"Já postei";btn.classList.toggle("done",done);}
function wireDone(el,scope,itens){
  el.querySelectorAll("[data-done]").forEach(btn=>{
    const it=itens[+btn.dataset.done];
    const key=postKey(scope,it);
    const card=btn.closest(".radar-card, .hoje-card, .card");
    if(_postSet().has(key)) markDoneUI(card,btn,true);
    btn.onclick=(e)=>{
      e.stopPropagation();
      const s=_postSet(); const now=!s.has(key);
      if(now)s.add(key); else s.delete(key);
      _postSave(s); markDoneUI(card,btn,now);
      toast(now?"Marcado como postado ✓":"Desmarcado");
    };
  });
}
function abrirArte(it){
  document.getElementById("artTitle").value=it.artTitulo||"";
  document.getElementById("artSub").value=it.artSub||"";
  document.getElementById("artTag").value=it.tag||(CATS[it.categoria]?CATS[it.categoria].nome:"");
  document.getElementById("artData1").value=it.artData1||"";
  document.getElementById("artData2").value=it.artData2||"";
  document.getElementById("artNum").value=it.num||"";
  switchTab("arte");
  setArtTemplate(it.template||"cartao");
}
function renderReady(elId, itens, emptyMsg){
  const el=document.getElementById(elId); if(!el) return;
  if(!itens||!itens.length){el.innerHTML=`<div class="card">${emptyMsg||"Nada por aqui ainda."}</div>`;return;}
  el.innerHTML=itens.map((it,i)=>{
    const c=CATS[it.categoria]||CATS.edu;
    return `<div class="card hoje-card" style="border-left-color:${catVar(it.categoria)}">
      <div class="radar-top">
        <span class="cat-tag" style="color:${catVar(it.categoria)}">${it.tag||c.nome}</span>
        ${it.fonte?`<span class="radar-src">${it.fonte}</span>`:""}
      </div>
      <pre class="hoje-text">${escapeHtml(it.texto)}</pre>
      <div class="radar-actions">
        <button class="primary-btn small" data-copy="${i}">📋 Copiar texto</button>
        <button class="secondary-btn inline" data-art="${i}">🎨 Criar arte</button>
        <button class="done-btn" data-done="${i}">Já postei</button>
        ${it.url?`<a class="ghost-btn" href="${it.url}" target="_blank" rel="noopener">Ler ↗</a>`:""}
      </div></div>`;
  }).join("");
  el.querySelectorAll("[data-copy]").forEach(b=>b.onclick=async()=>{
    const t=itens[+b.dataset.copy].texto;
    try{await navigator.clipboard.writeText(t);toast("Post copiado! Cole no Instagram 🚀");}
    catch{toast("Selecione o texto e copie (Ctrl+C)");}
  });
  el.querySelectorAll("[data-art]").forEach(b=>b.onclick=()=>abrirArte(itens[+b.dataset.art]));
  wireDone(el, elId, itens);
}
function renderCollapsible(elId, itens, emptyMsg){
  const el=document.getElementById(elId); if(!el) return;
  if(!itens||!itens.length){el.innerHTML=`<div class="card">${emptyMsg||"Nada por aqui ainda."}</div>`;return;}
  el.innerHTML=itens.map((it,i)=>{
    const c=CATS[it.categoria]||CATS.edu;
    const head=it.titulo||it.artTitulo||"";
    const sub=it.resumo||it.artSub||"";
    return `<div class="card radar-card" style="border-left-color:${catVar(it.categoria)}">
      <div class="radar-top">
        <span class="cat-tag" style="color:${catVar(it.categoria)}">${it.tag||c.nome}</span>
        ${it.fonte?`<span class="radar-src">${it.fonte}</span>`:""}
      </div>
      <h3 class="radar-h">${head}</h3>
      ${sub?`<p class="radar-resumo">${sub}</p>`:""}
      <div class="radar-controls">
        <button class="radar-toggle" aria-expanded="false"><span>📝 Ver post e criar arte</span><span class="arrow">▾</span></button>
        <button class="done-btn" data-done="${i}">Já postei</button>
      </div>
      <div class="radar-body" hidden>
        <pre class="hoje-text">${escapeHtml(it.texto)}</pre>
        <div class="radar-actions">
          <button class="primary-btn small" data-copy="${i}">📋 Copiar texto</button>
          <button class="secondary-btn inline" data-art="${i}">🎨 Criar arte</button>
          ${it.url?`<a class="ghost-btn" href="${it.url}" target="_blank" rel="noopener">Ler notícia ↗</a>`:""}
        </div>
      </div>
    </div>`;
  }).join("");
  el.querySelectorAll(".radar-toggle").forEach(b=>b.onclick=()=>{
    const body=b.closest(".radar-card").querySelector(".radar-body");
    const open=body.hidden; body.hidden=!open;
    b.classList.toggle("open",open);
    b.setAttribute("aria-expanded",open?"true":"false");
  });
  el.querySelectorAll("[data-copy]").forEach(b=>b.onclick=async()=>{
    const t=itens[+b.dataset.copy].texto;
    try{await navigator.clipboard.writeText(t);toast("Post copiado! Cole no Instagram 🚀");}
    catch{toast("Selecione o texto e copie (Ctrl+C)");}
  });
  el.querySelectorAll("[data-art]").forEach(b=>b.onclick=()=>abrirArte(itens[+b.dataset.art]));
  wireDone(el, elId, itens);
}
(function initListas(){
  const R=window.RADAR||{itens:[]};
  const rd=document.getElementById("radarDate"); if(rd) rd.textContent=R.atualizadoEm?("Atualizado: "+R.atualizadoEm):"";
  renderCollapsible("radarList", R.itens, "Sem notícias no radar agora.");
  renderCollapsible("produtosList", (window.PRODUTOS||{}).itens, "Biblioteca de produtos em breve.");
  renderCollapsible("motivaList", (window.MOTIVA||{}).itens, "Mensagens em breve.");
})();

/* ===================== HOJE ===================== */
(function hoje(){
  const P=window.POSTS||{itens:[],data:""};
  const hd=document.getElementById("hojeData"); if(hd) hd.textContent=P.data?("· "+P.data):"";
  renderReady("hojeList", P.itens, "Ainda não há posts de hoje. A rotina da manhã preenche aqui. Enquanto isso, use o Radar, os Produtos ou a Motivação.");
})();

/* ===================== ROTEIROS ===================== */
let filtroAtual="todos";
(function filters(){
  const el=document.getElementById("catFilters");
  const opts=[["todos","Todos"],...Object.keys(CATS).map(k=>[k,CATS[k].nome])];
  el.innerHTML=opts.map(([k,n])=>`<button class="filter ${k==='todos'?'active':''}" data-f="${k}" ${k!=='todos'?`style="border-color:${catVar(k)}"`:''}>${n}</button>`).join("");
  el.querySelectorAll(".filter").forEach(b=>b.onclick=()=>{
    filtroAtual=b.dataset.f;
    el.querySelectorAll(".filter").forEach(x=>{x.classList.remove("active");x.style.background="";x.style.color=""});
    b.classList.add("active");
    if(filtroAtual!=="todos"){b.style.background=catVar(filtroAtual);b.style.color="#fff"}
    renderRoteiros();
  });
})();
function renderRoteiros(){
  const grid=document.getElementById("roteirosGrid");
  const list=ROTEIROS.filter(r=>filtroAtual==="todos"||r.cat===filtroAtual);
  grid.innerHTML=list.map(r=>{
    const c=CATS[r.cat];
    return `<div class="card roteiro-card" style="border-left-color:${catVar(r.cat)}">
      <div class="cat-tag" style="color:${catVar(r.cat)}">${c.nome}</div>
      <h3>${r.nome}</h3><div class="desc">${r.desc}</div>
      <div class="ex">💡 ${r.exemplo}</div>
      <button class="ghost-btn" style="margin-top:12px" data-use="${r.id}">Usar no gerador →</button></div>`;
  }).join("");
  grid.querySelectorAll("[data-use]").forEach(b=>b.onclick=()=>{switchTab("gerador");selectRoteiro(b.dataset.use)});
}
renderRoteiros();

/* ===================== GERADOR ===================== */
let genCat=null, genRoteiroId=null;
(function genCats(){
  document.getElementById("genCats").innerHTML=Object.keys(CATS).map(k=>`<button class="chip" data-c="${k}" style="border-color:${catVar(k)}">${CATS[k].nome}</button>`).join("");
  document.querySelectorAll("#genCats .chip").forEach(b=>b.onclick=()=>{
    genCat=b.dataset.c;
    document.querySelectorAll("#genCats .chip").forEach(x=>{x.classList.remove("active");x.style.background="";x.style.color=""});
    b.classList.add("active");b.style.background=catVar(genCat);b.style.color="#fff";
    fillRoteiroSelect();
  });
})();
function fillRoteiroSelect(){
  const sel=document.getElementById("genRoteiro");
  const list=ROTEIROS.filter(r=>!genCat||r.cat===genCat);
  sel.innerHTML=`<option value="">— escolha um roteiro —</option>`+list.map(r=>`<option value="${r.id}">${r.nome}</option>`).join("");
  sel.onchange=()=>selectRoteiro(sel.value,true);
  document.getElementById("genFields").innerHTML="";
}
function selectRoteiro(id, keepCat){
  const r=ROTEIROS.find(x=>x.id===id); if(!r) return;
  genRoteiroId=id;
  if(!keepCat){
    genCat=r.cat;
    document.querySelectorAll("#genCats .chip").forEach(x=>{
      const on=x.dataset.c===r.cat;x.classList.toggle("active",on);
      x.style.background=on?catVar(r.cat):"";x.style.color=on?"#fff":"";
    });
    fillRoteiroSelect();
  }
  document.getElementById("genRoteiro").value=id;
  const hint=document.getElementById("roteiroHint");
  if(!hint.classList.contains("radar-hint")) hint.textContent=r.desc;
  const f=document.getElementById("genFields");
  f.innerHTML=r.campos.map(c=>{
    const long=c.l.length>18||(c.ph||"").length>40;
    return `<div class="field"><label>${c.l}</label>${long
      ?`<textarea class="fld" data-k="${c.k}" placeholder="${c.ph}"></textarea>`
      :`<input class="fld" data-k="${c.k}" placeholder="${c.ph}" />`}</div>`;
  }).join("");
}
document.getElementById("genBtn").onclick=()=>{
  const r=ROTEIROS.find(x=>x.id===genRoteiroId);
  if(!r){toast("Escolha um roteiro primeiro 🙂");return;}
  const v={};
  document.querySelectorAll("#genFields .fld").forEach(el=>v[el.dataset.k]=(el.value.trim()||el.placeholder));
  const post=`${r.montar(v)}\n\n${CATS[r.cat].tags.slice(0,4).join(" ")}`;
  document.getElementById("genOutput").value=post;
  updateCount();
  document.getElementById("tipLine").textContent=`Categoria: ${CATS[r.cat].nome} · Roteiro: ${r.nome} · Poste 12h/19h/21h e responda os directs rápido. 💛`;
  document.getElementById("genOutput").dataset.cat=r.cat;
};
document.getElementById("genOutput").addEventListener("input",updateCount);
function updateCount(){
  const n=document.getElementById("genOutput").value.length, c=document.getElementById("charCount");
  const ok=n>=150&&n<=1200;
  c.textContent=`${n} caract.${n?(ok?" ✓ ideal":n<150?" · curto":" · longo"):""}`;
  c.style.color=n===0?"var(--muted)":(ok?catVar("pro"):catVar("aut"));
}
document.getElementById("copyBtn").onclick=async()=>{
  const t=document.getElementById("genOutput").value;
  if(!t){toast("Gere um post primeiro ✍️");return;}
  try{await navigator.clipboard.writeText(t);toast("Post copiado! Cole no Instagram 🚀");}
  catch{const o=document.getElementById("genOutput");o.select();document.execCommand("copy");toast("Post copiado! 🚀");}
};
/* post -> arte */
document.getElementById("toArtBtn").onclick=()=>{
  const t=document.getElementById("genOutput").value.trim();
  if(!t){toast("Gere um post primeiro ✍️");return;}
  const linhas=t.split("\n").filter(l=>l.trim()&&!l.trim().startsWith("#"));
  document.getElementById("artTitle").value=linhas[0]||"";
  document.getElementById("artSub").value=linhas[1]&&linhas[1].length<70?linhas[1]:"";
  const cat=document.getElementById("genOutput").dataset.cat||"edu";
  setArtTagFromCat(cat);
  switchTab("arte");
  drawArt();
};

/* ===================== ARTE (canvas -> PNG, 4 modelos) ===================== */
let artTemplate="cartao", artFormat="retrato";
const FORMATS={ retrato:{w:1080,h:1350,nome:"Retrato 4:5"}, quadrado:{w:1080,h:1080,nome:"Quadrado 1:1"}, story:{w:1080,h:1920,nome:"Story 9:16"} };
const TEMPLATES={
  extrato:{nome:"Extrato"}, cofre:{nome:"Cofre"}, cartao:{nome:"Cartão"},
  numero:{nome:"Número"}, fotofrase:{nome:"Foto + Frase"}, forbes:{nome:"Citação"}, tweet:{nome:"Tweet"},
  moldura:{nome:"Foto + Texto"}, antesdepois:{nome:"Foto + Legenda"}
};
const SERIF='Georgia, "Times New Roman", serif';
const MONO='Consolas, "Courier New", monospace';
const SANS='Arial, Helvetica, sans-serif';

function wrap(ctx,text,maxW){
  const words=(text||"").split(/\s+/),lines=[];let line="";
  for(const w of words){
    const test=line?line+" "+w:w;
    if(ctx.measureText(test).width>maxW&&line){lines.push(line);line=w;}
    else line=test;
  }
  if(line)lines.push(line);
  return lines;
}
function roundRect(ctx,x,y,w,h,r){
  ctx.beginPath();ctx.moveTo(x+r,y);
  ctx.arcTo(x+w,y,x+w,y+h,r);ctx.arcTo(x+w,y+h,x,y+h,r);
  ctx.arcTo(x,y+h,x,y,r);ctx.arcTo(x,y,x+w,y,r);ctx.closePath();
}
function artData(){
  return {
    tag:(document.getElementById("artTag").value||"").trim(),
    title:(document.getElementById("artTitle").value||"Seu título aqui").trim(),
    sub:(document.getElementById("artSub").value||"").trim(),
    handle:(document.getElementById("artHandle").value||SG_HANDLE).trim(),
    d1:(document.getElementById("artData1").value||"").trim(),
    d2:(document.getElementById("artData2").value||"").trim(),
    num:(document.getElementById("artNum").value||"").trim(),
    autor:(document.getElementById("artAutor").value||"").trim(),
    autorDesc:(document.getElementById("artAutorDesc").value||"").trim()
  };
}
function footerName(ctx,W,H,pad,ruleColor,nameColor,capColor){
  ctx.fillStyle=ruleColor;ctx.fillRect(pad,H-pad-64,54,6);
  ctx.textBaseline="alphabetic";
  ctx.font=`700 40px ${SANS}`;ctx.fillStyle=nameColor;
  ctx.fillText(SG_NOME,pad,H-pad-14);
  ctx.font=`400 28px ${SANS}`;ctx.fillStyle=capColor;
  ctx.fillText(SG_CAP,pad,H-pad+24);
}

/* Paleta base (sobrescreva em config.js -> STUDIO.paleta) */
const V=Object.assign({cream:"#F0EDE6",gray:"#D8D8D8",teal:"#488399",tealDk:"#2F5A69",coral:"#EA9393",yellow:"#F4D38A",pink:"#F1BEBE",ink:"#3B3A36",inkSoft:"#6E685C",darkbg:"#332F2A"},(window.STUDIO&&window.STUDIO.paleta)||{});

/* ---- Modelo 1: Extrato ---- */
function renderExtrato(ctx,W,H,d){
  ctx.fillStyle=V.cream;ctx.fillRect(0,0,W,H);
  // detalhe vintage: fina régua vertical no canto
  ctx.strokeStyle=V.gray;ctx.lineWidth=2;
  ctx.beginPath();ctx.moveTo(W-56,56);ctx.lineTo(W-56,160);ctx.stroke();
  const pad=90;let y=pad+34;
  ctx.textBaseline="alphabetic";
  if(d.tag){ctx.font=`700 30px ${SANS}`;ctx.fillStyle=V.teal;ctx.fillText(d.tag.toUpperCase(),pad,y);}
  y+=70;
  ctx.fillStyle=V.teal;ctx.fillRect(pad,y-46,84,8);y+=30;
  const fs=d.title.length>60?60:d.title.length>36?72:84;
  ctx.font=`bold ${fs}px ${SERIF}`;ctx.fillStyle=V.ink;
  const lines=wrap(ctx,d.title,W-pad*2);const lh=fs*1.14;
  lines.forEach(l=>{ctx.fillText(l,pad,y+fs);y+=lh;});
  y+=14;
  if(d.sub){ctx.font=`400 42px ${SANS}`;ctx.fillStyle=V.inkSoft;
    wrap(ctx,d.sub,W-pad*2).forEach(l=>{ctx.fillText(l,pad,y+40);y+=56;});}
  const rows=[d.d1,d.d2].filter(Boolean);
  if(rows.length){
    y+=34;ctx.strokeStyle=V.gray;ctx.lineWidth=2;
    rows.forEach(r=>{
      const [lab,val]=r.split("|").map(s=>(s||"").trim());
      ctx.beginPath();ctx.moveTo(pad,y);ctx.lineTo(W-pad,y);ctx.stroke();
      ctx.font=`600 34px ${MONO}`;ctx.fillStyle=V.ink;ctx.textBaseline="middle";
      ctx.fillText(lab||"",pad,y+34);
      ctx.fillStyle=V.teal;ctx.textAlign="right";ctx.fillText(val||"",W-pad,y+34);
      ctx.textAlign="left";ctx.textBaseline="alphabetic";
      y+=68;
    });
    ctx.beginPath();ctx.moveTo(pad,y);ctx.lineTo(W-pad,y);ctx.stroke();
  }
  footerName(ctx,W,H,pad,V.coral,V.ink,V.inkSoft);
}

/* ---- Modelo 2: Cofre (vintage escuro) ---- */
function renderCofre(ctx,W,H,d){
  const g=ctx.createLinearGradient(0,0,W,H);
  g.addColorStop(0,"#3a352f");g.addColorStop(1,V.darkbg);
  ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  ctx.strokeStyle="rgba(244,211,138,.45)";ctx.lineWidth=2;
  roundRect(ctx,40,40,W-80,H-80,14);ctx.stroke();
  const pad=96;let y=pad+40;ctx.textBaseline="alphabetic";
  if(d.tag){ctx.font=`700 30px ${SANS}`;ctx.fillStyle=V.yellow;ctx.fillText(d.tag.toUpperCase(),pad,y);}
  y=H*0.42;
  const fs=d.title.length>60?62:d.title.length>36?74:86;
  ctx.font=`600 ${fs}px ${SERIF}`;
  const lines=wrap(ctx,d.title,W-pad*2);const lh=fs*1.13;
  let ty=y-(lines.length*lh)/2;
  ctx.fillStyle=V.yellow;ctx.fillRect(pad,ty-40,72,6);
  ctx.fillStyle=V.cream;
  lines.forEach(l=>{ctx.fillText(l,pad,ty+fs);ty+=lh;});
  if(d.sub){ctx.font=`400 42px ${SANS}`;ctx.fillStyle="#C9C1B2";ty+=14;
    wrap(ctx,d.sub,W-pad*2).forEach(l=>{ctx.fillText(l,pad,ty+40);ty+=56;});}
  footerName(ctx,W,H,pad,V.yellow,V.cream,"#9C9484");
}

/* ---- Modelo 3: Cartão (bloco de cor) ---- */
function renderCartao(ctx,W,H,d){
  ctx.fillStyle=V.teal;ctx.fillRect(0,0,W,H);
  ctx.fillStyle="rgba(255,255,255,.10)";
  ctx.beginPath();ctx.arc(W-40,-40,240,0,7);ctx.fill();
  ctx.fillStyle="rgba(241,190,190,.16)";
  ctx.beginPath();ctx.arc(0,H,180,0,7);ctx.fill();
  const pad=90;let y=pad+40;ctx.textBaseline="alphabetic";
  if(d.tag){ctx.font=`700 30px ${SANS}`;ctx.fillStyle=V.yellow;ctx.fillText(d.tag.toUpperCase(),pad,y);}
  y=H*0.44;
  const fs=d.title.length>52?70:d.title.length>32?82:96;
  ctx.font=`800 ${fs}px ${SANS}`;
  const lines=wrap(ctx,d.title,W-pad*2);const lh=fs*1.08;
  let ty=y-(lines.length*lh)/2;
  ctx.fillStyle=V.yellow;ctx.fillRect(pad,ty-46,86,10);
  ctx.fillStyle="#FBF7F1";
  lines.forEach(l=>{ctx.fillText(l,pad,ty+fs);ty+=lh;});
  if(d.sub){ctx.font=`400 44px ${SANS}`;ctx.fillStyle="#E7F0F0";ty+=16;
    wrap(ctx,d.sub,W-pad*2).forEach(l=>{ctx.fillText(l,pad,ty+42);ty+=58;});}
  footerName(ctx,W,H,pad,"#FBF7F1","#FBF7F1","rgba(251,247,241,.72)");
}

/* ---- Modelo 4: Tweet (imita X) ---- */
function renderTweet(ctx,W,H,d){
  ctx.fillStyle=V.cream;ctx.fillRect(0,0,W,H);
  const m=54, cx=m, cy=H*0.14, cw=W-m*2, ch=H-cy-m*1.6;
  ctx.save();
  ctx.shadowColor="rgba(60,50,40,.16)";ctx.shadowBlur=40;ctx.shadowOffsetY=16;
  ctx.fillStyle="#FFFFFF";roundRect(ctx,cx,cy,cw,ch,28);ctx.fill();
  ctx.restore();
  const px=cx+52;let y=cy+56;
  const ar=44;
  if(fotoImg&&fotoImg.complete&&fotoImg.naturalWidth){
    drawAvatar(ctx,fotoImg,px+ar,y+ar,ar);
    ctx.strokeStyle="rgba(0,0,0,.06)";ctx.lineWidth=2;
    ctx.beginPath();ctx.arc(px+ar,y+ar,ar,0,7);ctx.stroke();
  }else{
    ctx.fillStyle=V.teal;ctx.beginPath();ctx.arc(px+ar,y+ar,ar,0,7);ctx.fill();
    ctx.fillStyle="#fff";ctx.font=`700 40px ${SANS}`;ctx.textAlign="center";ctx.textBaseline="middle";
    ctx.fillText(SG_INIC,px+ar,y+ar+2);ctx.textAlign="left";ctx.textBaseline="alphabetic";
  }
  const nx=px+ar*2+22;
  ctx.font=`700 36px ${SANS}`;ctx.fillStyle="#26241F";
  ctx.fillText(SG_NOME,nx,y+34);
  const nw=ctx.measureText(SG_NOME).width;
  ctx.fillStyle=V.teal;ctx.beginPath();ctx.arc(nx+nw+26,y+26,17,0,7);ctx.fill();
  ctx.strokeStyle="#fff";ctx.lineWidth=4;ctx.beginPath();
  ctx.moveTo(nx+nw+18,y+26);ctx.lineTo(nx+nw+24,y+32);ctx.lineTo(nx+nw+34,y+20);ctx.stroke();
  ctx.font=`400 30px ${SANS}`;ctx.fillStyle="#8A8478";
  ctx.fillText(d.handle,nx,y+74);
  y+=ar*2+40;
  const body=d.sub?d.title+"\n\n"+d.sub:d.title;
  ctx.font=`400 46px ${SANS}`;ctx.fillStyle="#26241F";
  const maxW=cw-104;const lh=60;
  body.split("\n").forEach(par=>{
    if(!par){y+=lh*0.5;return;}
    wrap(ctx,par,maxW).forEach(l=>{ctx.fillText(l,px,y+40);y+=lh;});
  });
  y+=24;ctx.font=`400 30px ${SANS}`;ctx.fillStyle="#8A8478";
  ctx.fillText("09:15 · "+(window.POSTS&&window.POSTS.data?window.POSTS.data:"hoje"),px,y+30);
  y+=64;
  ctx.strokeStyle="#EDE7DD";ctx.lineWidth=2;
  ctx.beginPath();ctx.moveTo(px,y);ctx.lineTo(cx+cw-52,y);ctx.stroke();
  y+=54;
  ctx.font=`400 32px ${SANS}`;ctx.fillStyle="#8A8478";
  ctx.fillText("💬 88      🔁 340      ❤️ 1,2 mil",px,y);
}

/* ---- Modelo 5: Número (número gigante, tipo "4 dicas") ---- */
function renderNumero(ctx,W,H,d){
  ctx.fillStyle=V.teal;ctx.fillRect(0,0,W,H);
  ctx.fillStyle="rgba(244,211,138,.15)";ctx.beginPath();ctx.arc(W-40,H*0.28,300,0,7);ctx.fill();
  ctx.fillStyle="rgba(241,190,190,.14)";ctx.beginPath();ctx.arc(20,H*0.9,150,0,7);ctx.fill();
  const pad=90;ctx.textBaseline="alphabetic";
  if(d.tag){ctx.font=`700 30px ${SANS}`;ctx.fillStyle=V.yellow;ctx.fillText(d.tag.toUpperCase(),pad,pad+44);}
  // número gigante
  const num=d.num||"3";
  ctx.font=`800 430px ${SANS}`;ctx.fillStyle="#FBF7F1";
  ctx.fillText(num,pad-12,H*0.50);
  // título
  ctx.font=`800 74px ${SANS}`;ctx.fillStyle=V.yellow;
  let ty=H*0.50+34;
  wrap(ctx,d.title,W-pad*2).forEach(l=>{ctx.fillText(l,pad,ty+68);ty+=84;});
  if(d.sub){ctx.font=`400 40px ${SANS}`;ctx.fillStyle="#E7F0F0";ty+=8;
    wrap(ctx,d.sub,W-pad*2).forEach(l=>{ctx.fillText(l,pad,ty+42);ty+=52;});}
  footerName(ctx,W,H,pad,"#FBF7F1","#FBF7F1","rgba(251,247,241,.7)");
}

/* ---- Modelo 6: Foto + Frase ---- */
function drawCover(ctx,img,x,y,w,h){
  const iw=img.naturalWidth,ih=img.naturalHeight,scale=Math.max(w/iw,h/ih);
  const dw=iw*scale,dh=ih*scale,dx=x+(w-dw)/2,dy=y+(h-dh)/2;
  ctx.save();ctx.beginPath();ctx.rect(x,y,w,h);ctx.clip();
  ctx.drawImage(img,dx,dy,dw,dh);ctx.restore();
}
function renderFotoFrase(ctx,W,H,d){
  const img=bgImg||((fotoImg&&fotoImg.complete&&fotoImg.naturalWidth)?fotoImg:null);
  const photoH=Math.round(H*0.56);
  if(img){drawCover(ctx,img,0,0,W,photoH);}
  else{ctx.fillStyle=V.teal;ctx.fillRect(0,0,W,photoH);
    ctx.fillStyle="rgba(255,255,255,.08)";ctx.beginPath();ctx.arc(W-40,-30,200,0,7);ctx.fill();}
  ctx.fillStyle=V.cream;ctx.fillRect(0,photoH,W,H-photoH);
  const pad=90;ctx.textBaseline="alphabetic";
  if(d.tag){ctx.font=`700 28px ${SANS}`;ctx.fillStyle=V.teal;ctx.fillText(d.tag.toUpperCase(),pad,photoH+56);}
  ctx.fillStyle=V.coral;ctx.fillRect(pad,photoH+78,64,8);
  const fs=d.title.length>70?50:d.title.length>40?58:66;
  ctx.font=`italic 600 ${fs}px ${SERIF}`;ctx.fillStyle=V.ink;
  let ty=photoH+120;
  wrap(ctx,d.title,W-pad*2).forEach(l=>{ctx.fillText(l,pad,ty+fs);ty+=fs*1.2;});
  if(d.sub){ctx.font=`400 34px ${SANS}`;ctx.fillStyle=V.inkSoft;ty+=8;
    wrap(ctx,d.sub,W-pad*2).forEach(l=>{ctx.fillText(l,pad,ty+34);ty+=44;});}
  ctx.fillStyle=V.inkSoft;ctx.fillRect(pad,H-pad-46,40,5);
  ctx.font=`700 34px ${SANS}`;ctx.fillStyle=V.ink;
  ctx.fillText(SG_NOME,pad,H-pad-6);
}

/* ---- Modelo 7: Citação (estilo Forbes) ---- */
function renderForbes(ctx,W,H,d){
  ctx.fillStyle=V.cream;ctx.fillRect(0,0,W,H);
  const pad=90;
  const accents=[V.teal,V.coral];
  const acc=accents[((d.title||"").length)%accents.length];
  // aspas gigante
  ctx.fillStyle=acc;ctx.font=`900 240px Georgia, "Times New Roman", serif`;
  ctx.textBaseline="alphabetic";
  ctx.fillText("“", pad-8, pad+170);
  // marca (nome dela) no topo direito, como "publicação"
  ctx.font=`italic 700 34px Georgia, serif`;ctx.fillStyle="#26241F";
  ctx.textAlign="right";ctx.fillText(SG_NOME, W-pad, pad+50);ctx.textAlign="left";
  // frase
  const q=d.title||"Sua frase aqui";
  const fs=q.length>150?48:q.length>95?56:q.length>55?66:76;
  ctx.font=`800 ${fs}px ${SANS}`;ctx.fillStyle="#1C1B17";
  const lh=fs*1.2;
  let y=pad+260;
  wrap(ctx,q,W-pad*2).forEach(l=>{ctx.fillText(l,pad,y+fs);y+=lh;});
  // autor no rodapé (só se preenchido)
  if(d.autor){
    const by=H-pad-(d.autorDesc?36:6);
    ctx.fillStyle=acc;ctx.font=`800 42px ${SANS}`;
    ctx.fillText(d.autor,pad,by);
    if(d.autorDesc){ctx.font=`600 26px ${SANS}`;ctx.fillStyle="#8A8478";
      ctx.fillText(d.autorDesc.toUpperCase(),pad,by+36);}
  }
}

/* ---- Modelo 8: Foto + Texto (texto sobre a foto, minimalista) ---- */
function renderFotoTexto(ctx,W,H,d){
  const img=postImg||bgImg||((fotoImg&&fotoImg.complete&&fotoImg.naturalWidth)?fotoImg:null);
  if(img&&img.complete&&img.naturalWidth){ drawCover(ctx,img,0,0,W,H); }
  else{ ctx.fillStyle=V.darkbg;ctx.fillRect(0,0,W,H);
    ctx.fillStyle=V.yellow;ctx.font=`700 34px ${SANS}`;ctx.textAlign="center";ctx.fillText("adicione uma foto",W/2,H*0.5);ctx.textAlign="left"; }
  const bandH=Math.round(H*0.5);const g=ctx.createLinearGradient(0,H-bandH,0,H);
  g.addColorStop(0,"rgba(15,12,9,0)");g.addColorStop(1,"rgba(15,12,9,.92)");ctx.fillStyle=g;ctx.fillRect(0,H-bandH,W,bandH);
  const pad=Math.round(W*0.085);ctx.textBaseline="alphabetic";
  if(d.tag){ctx.font=`700 24px ${SANS}`;ctx.fillStyle=V.yellow;ctx.fillText(d.tag.toUpperCase(),pad,Math.round(H*0.10));}
  let y=H-pad;
  ctx.font=`600 26px ${SANS}`;ctx.fillStyle=V.yellow;ctx.fillText((SG_NOME||"").toUpperCase(),pad,y);y-=46;
  if(d.sub){ctx.font=`400 40px ${SANS}`;ctx.fillStyle="#EEE7DA";const s=wrap(ctx,d.sub,W-pad*2);for(let i=s.length-1;i>=0;i--){ctx.fillText(s[i],pad,y);y-=50;}y-=8;}
  const q=d.title||"Seu texto aqui";const fs=q.length>44?58:q.length>26?70:82;ctx.font=`800 ${fs}px ${SANS}`;ctx.fillStyle="#FFF9F0";
  const tl=wrap(ctx,q,W-pad*2);for(let i=tl.length-1;i>=0;i--){ctx.fillText(tl[i],pad,y);y-=fs*1.12;}
  y-=6;ctx.fillStyle=V.yellow;ctx.fillRect(pad,y,60,5);
}

/* ---- Modelo 9: Foto + Legenda (foto em cima, faixa clara embaixo) ---- */
function renderFotoLegenda(ctx,W,H,d){
  const img=postImg||bgImg||((fotoImg&&fotoImg.complete&&fotoImg.naturalWidth)?fotoImg:null);
  const photoH=Math.round(H*0.64);
  if(img&&img.complete&&img.naturalWidth){ drawCover(ctx,img,0,0,W,photoH); }
  else{ ctx.fillStyle=V.darkbg;ctx.fillRect(0,0,W,photoH);
    ctx.fillStyle=V.yellow;ctx.font=`700 32px ${SANS}`;ctx.textAlign="center";ctx.fillText("adicione uma foto",W/2,photoH/2);ctx.textAlign="left"; }
  ctx.fillStyle=V.cream;ctx.fillRect(0,photoH,W,H-photoH);
  const pad=Math.round(W*0.085);let y=photoH+Math.round(H*0.075);ctx.textBaseline="alphabetic";
  if(d.tag){ctx.font=`700 24px ${SANS}`;ctx.fillStyle=V.yellow;ctx.fillText(d.tag.toUpperCase(),pad,y);y+=20;}
  ctx.fillStyle=V.yellow;ctx.fillRect(pad,y,54,5);y+=44;
  const q=d.title||"Seu texto aqui";const fs=q.length>44?54:q.length>26?64:74;ctx.font=`700 ${fs}px ${SERIF}`;ctx.fillStyle=V.ink;
  wrap(ctx,q,W-pad*2).forEach(l=>{ctx.fillText(l,pad,y+fs);y+=fs*1.16;});y+=6;
  if(d.sub){ctx.font=`400 36px ${SANS}`;ctx.fillStyle=V.inkSoft;wrap(ctx,d.sub,W-pad*2).forEach(l=>{ctx.fillText(l,pad,y+30);y+=46;});}
  ctx.font=`600 24px ${SANS}`;ctx.fillStyle=V.inkSoft;ctx.fillText((SG_NOME||"").toUpperCase(),pad,H-Math.round(H*0.045));
}

/* ---- foto/avatar do usuário (salva no navegador) ---- */
let fotoImg=null, bgImg=null, postImg=null;
(function bgSetup(){
  let saved=null; try{saved=localStorage.getItem("sg_bg");}catch(_){}
  if(saved){bgImg=new Image();bgImg.onload=()=>drawArt();bgImg.src=saved;}
  const inp=document.getElementById("artBg");
  if(inp) inp.addEventListener("change",e=>{
    const f=e.target.files&&e.target.files[0];if(!f)return;
    const rd=new FileReader();
    rd.onload=()=>{try{localStorage.setItem("sg_bg",rd.result);}catch(_){}
      bgImg=new Image();bgImg.onload=()=>drawArt();bgImg.src=rd.result;toast("Imagem de fundo salva ✨");};
    rd.readAsDataURL(f);
  });
})();
function drawAvatar(ctx,img,cx,cy,r){
  ctx.save();ctx.beginPath();ctx.arc(cx,cy,r,0,7);ctx.closePath();ctx.clip();
  const iw=img.naturalWidth,ih=img.naturalHeight,side=Math.min(iw,ih);
  const sx=(iw-side)/2,sy=(ih-side)/2;
  ctx.drawImage(img,sx,sy,side,side,cx-r,cy-r,r*2,r*2);
  ctx.restore();
}
(function fotoSetup(){
  let saved=null; try{saved=localStorage.getItem("sg_foto");}catch(_){} saved=saved||window.SG_FOTO;
  if(saved){fotoImg=new Image();fotoImg.onload=()=>drawArt();fotoImg.src=saved;}
  const inp=document.getElementById("artFoto");
  if(inp) inp.addEventListener("change",e=>{
    const f=e.target.files&&e.target.files[0];if(!f)return;
    const rd=new FileReader();
    rd.onload=()=>{
      try{localStorage.setItem("sg_foto",rd.result);}catch(_){}
      fotoImg=new Image();fotoImg.onload=()=>drawArt();fotoImg.src=rd.result;
      toast("Foto salva! Aparece no avatar do Tweet ✨");
    };
    rd.readAsDataURL(f);
  });
})();
/* ---- foto dos modelos Foto + Texto e Foto + Legenda (não salva, troca por post) ---- */
function _loadFotoInto(inputId, assign){
  const inp=document.getElementById(inputId); if(!inp) return;
  inp.addEventListener("change",e=>{
    const f=e.target.files&&e.target.files[0]; if(!f) return;
    const rd=new FileReader();
    rd.onload=()=>{ const im=new Image(); im.onload=()=>{ assign(im); drawArt(); }; im.src=rd.result; toast("Foto adicionada ✨"); };
    rd.readAsDataURL(f);
  });
}
(function fotosExtras(){ _loadFotoInto("artFotoPost", im=>{postImg=im;}); })();

function drawArt(){
  const f=FORMATS[artFormat], cv=document.getElementById("artCanvas");
  cv.width=f.w;cv.height=f.h;
  const ctx=cv.getContext("2d");
  const d=artData();
  ({extrato:renderExtrato,cofre:renderCofre,cartao:renderCartao,tweet:renderTweet,numero:renderNumero,fotofrase:renderFotoFrase,forbes:renderForbes,moldura:renderFotoTexto,antesdepois:renderFotoLegenda}[artTemplate]||renderCartao)(ctx,f.w,f.h,d);
}

(function artControls(){
  document.getElementById("artTemplates").innerHTML=Object.keys(TEMPLATES).map(k=>`<button class="chip" data-at="${k}">${TEMPLATES[k].nome}</button>`).join("");
  document.querySelectorAll("#artTemplates .chip").forEach(b=>b.onclick=()=>setArtTemplate(b.dataset.at));
  document.getElementById("artFormats").innerHTML=Object.keys(FORMATS).map(k=>`<button class="chip" data-af="${k}">${FORMATS[k].nome}</button>`).join("");
  document.querySelectorAll("#artFormats .chip").forEach(b=>b.onclick=()=>{
    artFormat=b.dataset.af;
    document.querySelectorAll("#artFormats .chip").forEach(x=>x.classList.remove("active"));
    b.classList.add("active");drawArt();
  });
  document.querySelector('#artFormats .chip[data-af="retrato"]').classList.add("active");
  const pal=document.getElementById("artPalette");
  if(pal){var sw=(window.STUDIO&&window.STUDIO.paletaLista)||[["#D8D8D8","Cinza"],["#488399","Cor 1"],["#EA9393","Cor 2"],["#F4D38A","Cor 3"],["#F1BEBE","Cor 4"]];pal.innerHTML=sw.map(function(p){return '<span class="swatch" title="'+p[1]+'"><i style="background:'+p[0]+'"></i>'+p[0]+'</span>';}).join("");}
  setArtTemplate("cartao");
  ["artTag","artTitle","artSub","artHandle","artData1","artData2","artNum","artAutor","artAutorDesc"].forEach(id=>{
    const el=document.getElementById(id); if(el) el.addEventListener("input",drawArt);
  });
  document.getElementById("artRender").onclick=drawArt;
  document.getElementById("artDownload").onclick=()=>{
    document.getElementById("artCanvas").toBlob(b=>{
      const a=document.createElement("a");a.href=URL.createObjectURL(b);
      a.download="post-"+artTemplate+".png";a.click();URL.revokeObjectURL(a.href);
      toast("Imagem baixada! 🎨");
    },"image/png");
  };
})();
function setArtTemplate(k){
  artTemplate=k;
  document.querySelectorAll("#artTemplates .chip").forEach(x=>{
    const on=x.dataset.at===k;x.classList.toggle("active",on);
    x.style.background=on?"var(--accent)":"";x.style.color=on?"#fff":"";
  });
  document.getElementById("tweetFields").style.display=(k==="tweet")?"block":"none";
  document.getElementById("extratoFields").style.display=(k==="extrato")?"block":"none";
  document.getElementById("numeroFields").style.display=(k==="numero")?"block":"none";
  document.getElementById("fotoFraseFields").style.display=(k==="fotofrase")?"block":"none";
  document.getElementById("forbesFields").style.display=(k==="forbes")?"block":"none";
  var pf=document.getElementById("fotoPostFields"); if(pf) pf.style.display=(k==="moldura"||k==="antesdepois")?"block":"none";
  drawArt();
}
/* tag a partir da categoria (usado pelos botões "Criar arte") */
function setArtTagFromCat(cat){
  const el=document.getElementById("artTag");
  el.value=(CATS[cat]?CATS[cat].nome:"");
}

/* ===================== CALENDÁRIO ===================== */
const DOW=["Segunda","Terça","Quarta","Quinta","Sexta"];
const SEQ=["edu","car","aut","pro","con","edu","car","edu","pro","car","edu","aut","car","pro","edu","con","edu","aut","car","pro"];
const IDEIAS={
  edu:["Ensine 1 cuidado essencial pós aplicação","3 mitos sobre extensão de cílios","Fio a fio x volume russo: a diferença","Como fazer o cílio durar até a manutenção"],
  car:["Bastidores: preparando a maca","O que ninguém vê no atendimento","Se cuida comigo: sua rotina","Um dia no estúdio em stories"],
  aut:["Opinião: volume que respeita o olhar","Mito que toda cliente acredita","Cílio bonito x cílio saudável","O que faz um bom lash design"],
  pro:["Antes e depois de uma cliente","Depoimento real de quem atendeu","Transformação sem maquiagem","Resultado + técnica usada"],
  con:["Pergunta: maior medo antes da 1ª vez?","Caixinha de dúvidas nos stories","Convite pra agendar (horários da semana)","Marca a amiga que ama cílios"]
};
(function calendar(){
  let html="",slot=0;
  for(let w=1;w<=4;w++){
    html+=`<div class="week"><h3>Semana ${w}</h3><div class="days">`;
    for(let d=0;d<5;d++){
      const cat=SEQ[slot%SEQ.length], idea=IDEIAS[cat][Math.floor(slot/5)%IDEIAS[cat].length];
      html+=`<div class="day" style="border-top-color:${catVar(cat)}" data-cat="${cat}">
        <div class="dow">${DOW[d]}</div>
        <div class="cat" style="color:${catVar(cat)}">${CATS[cat].nome.split(" / ")[0]}</div>
        <div class="idea">${idea}</div></div>`;
      slot++;
    }
    html+=`</div></div>`;
  }
  document.getElementById("calendar").innerHTML=html;
  document.querySelectorAll(".day").forEach(dd=>dd.onclick=()=>{
    switchTab("gerador");
    const chip=document.querySelector(`#genCats .chip[data-c="${dd.dataset.cat}"]`);
    if(chip)chip.click();
    toast("Categoria carregada no gerador ✨");
  });
})();

/* ===================== TOAST ===================== */
let toTimer;
function toast(msg){
  const t=document.getElementById("toast");
  t.textContent=msg;t.classList.add("show");
  clearTimeout(toTimer);toTimer=setTimeout(()=>t.classList.remove("show"),2200);
}
