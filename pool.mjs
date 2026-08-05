/* ===== BANCO DE CONTEÚDO (pool) =====
   Posts e tendências prontos, na identidade da Nathalia Matos Lash.
   O robô semanal sorteia alguns daqui e escreve posts.js / radar.js.
   Pode adicionar mais itens a qualquer momento (quanto mais, mais variado).
   Cada item segue a MESMA estrutura de posts.js / radar.js.
*/

export const POSTS_POOL = [
  {
    categoria:"edu", tag:"Dica · Durabilidade", template:"numero", num:"3",
    artTitulo:"cuidados que fazem seu cílio durar mais", artSub:"Anota aí ✨",
    fonte:"", url:"",
    texto:`3 cuidados que fazem seu cílio durar o dobro 💡\n\nAnota aí que isso muda o jogo:\n\n1. Não molhe os fios nas primeiras 24h.\n2. Escove todo dia com a escovinha, pela manhã.\n3. Fuja de produtos oleosos perto dos olhos.\n\nParece detalhe, mas é o que separa o cílio que dura do que cai em uma semana. ✨\n\nSalva pra não esquecer e me conta: qual você já fazia? 👇\n\n#ExtensãoDeCílios #CuidadosComOsCílios #LashDesign #CíliosPerfeitos`
  },
  {
    categoria:"pro", tag:"Antes e depois", template:"cartao",
    artTitulo:"Do olhar apagado ao olhar de boneca", artSub:"Sem maquiagem, só técnica.",
    fonte:"", url:"",
    texto:`Antes: olhar apagado, dependendo de rímel todo dia. 👀\n\nDepois: olhar iluminado e aberto, linda ao acordar sem uma gota de maquiagem. ✨\n\nTécnica usada: volume brasileiro com efeito boneca.\n\nEsse é o poder de um olhar valorizado do jeito certo. 💛\n\nQuer esse resultado? Chama no direct pra agendar. Salva pra inspiração 👇\n\n#AntesEDepois #ExtensãoDeCílios #Transformação #LashLovers`
  },
  {
    categoria:"con", tag:"Agenda aberta", template:"cofre",
    artTitulo:"Seu olhar merece esse cuidado", artSub:"Agende seu horário 💛",
    fonte:"", url:"",
    texto:`Cansada de depender do rímel todo santo dia? ✨\n\nImagina acordar, se olhar no espelho e já estar linda. Sem esconder o olhar cansado. 👀\n\nCom a extensão você acorda pronta e ganha tempo de manhã.\n\nBora realizar esse desejo? Chama no direct ou clica no link da bio 💛\n\n#ExtensãoDeCílios #CíliosRJ #Curicica #AgendaAberta`
  },
  {
    categoria:"edu", tag:"Guia · Técnicas", template:"extrato",
    artTitulo:"Fio a fio x Volume russo", artSub:"Qual combina com você?",
    artData1:"Fio a fio | natural", artData2:"Volume russo | marcante",
    fonte:"", url:"",
    texto:`Fio a fio ou volume russo? A dúvida de toda cliente 👀\n\nFio a fio: um fio pra cada fio natural, efeito leve e discreto.\n\nVolume russo: leques de vários fios, efeito denso e marcante.\n\nDica: olhos com poucos fios pedem volume, olhos cheios ficam lindos no fio a fio. 💛\n\nQual combina mais com você? Comenta 👇\n\n#ExtensãoDeCílios #FioAFio #VolumeRusso #LashDesign`
  },
  {
    categoria:"aut", tag:"Opinião", template:"cofre",
    artTitulo:"O natural voltou com tudo", artSub:"Menos é mais.",
    fonte:"", url:"",
    texto:`Opinião que talvez você não goste de ouvir:\n\nnem toda cliente deveria fazer o volume mais pesado. 💬\n\nCílio bonito é o que respeita a saúde e a quantidade do seu fio natural. Peso demais quebra o cílio.\n\nO luxo de verdade hoje é a delicadeza. 🤍\n\nVocê é time natural ou time volumoso? Comenta 👇\n\n#ExtensãoDeCílios #CíliosNaturais #LashDesign #MenosÉMais`
  },
  {
    categoria:"edu", tag:"Dúvida frequente", template:"cartao",
    artTitulo:"Extensão de cílios dói?", artSub:"Te respondo agora 🤔",
    fonte:"", url:"",
    texto:`"Extensão de cílios dói?" 🤔\n\nRecebo essa pergunta toda semana, então respondo de vez:\n\nnão dói. A maioria das clientes relaxa tanto que dorme durante a aplicação. 😴\n\nVocê fica deitada, de olhos fechados, num ambiente tranquilo do começo ao fim.\n\nFicou com outra dúvida? Manda aqui 👇\n\n#ExtensãoDeCílios #LashDesign #CuidadosComOsCílios #CíliosRJ`
  },
  {
    categoria:"pro", tag:"Depoimento", template:"forbes",
    artTitulo:"Nunca me senti tão bonita, agora acordo pronta.", artSub:"",
    fonte:"", url:"",
    texto:`"Nunca me senti tão bonita, agora acordo pronta." 🥹\n\nFoi o que uma cliente me disse depois da aplicação.\n\nEla veio insegura, achando que não combinava com ela, e saiu apaixonada.\n\nVer a cliente se olhar no espelho e sorrir é tudo pra mim. 💛\n\nQuer sentir isso também? Agenda no direct ✨\n\n#ExtensãoDeCílios #Autoestima #LashLovers #CíliosPerfeitos`
  },
  {
    categoria:"con", tag:"Frase · Rotina", template:"tweet",
    artTitulo:"Acordar linda também é ganhar tempo.", artSub:"Sem correria de manhã.",
    fonte:"", url:"",
    texto:`Acordar linda também é ganhar tempo. ⏰\n\nImagina não precisar do rímel, do curvex, da correria antes de sair.\n\nUm olhar valorizado é praticidade e autoestima logo cedo. 💛\n\nVocê trocaria a maquiagem diária por isso? Comenta 👇\n\n#ExtensãoDeCílios #Praticidade #Autocuidado #CíliosPerfeitos`
  },
  {
    categoria:"car", tag:"Bastidores", template:"cofre",
    artTitulo:"O que ninguém vê no atendimento", artSub:"Cuidado em cada detalhe 🤍",
    fonte:"", url:"",
    texto:`Um pedacinho do meu dia no estúdio 🎧\n\nO que ninguém vê: cada aplicação leva de 1h30 a 2h de concentração total, fio por fio.\n\nAmo esse ritual, é meu momento de foco e de cuidado com a cliente. 💛\n\nCada uma sai com o olhar renovado, e isso não tem preço.\n\nMarca quem merece esse momento de autocuidado 👇\n\n#LashDesigner #EstúdioDeCílios #BastidoresLash #CíliosRJ`
  },
  {
    categoria:"edu", tag:"Dica · Cuidados", template:"numero", num:"4",
    artTitulo:"hábitos que estragam o seu cílio sem você notar", artSub:"Evite esses 🚫",
    fonte:"", url:"",
    texto:`4 hábitos que estragam o seu cílio sem você notar 🚫\n\n1. Coçar ou puxar os fios.\n2. Dormir de bruços amassando o olho.\n3. Usar demaquilante oleoso na região.\n4. Ficar sem escovar por dias.\n\nPequenas mudanças, resultado que dura muito mais. 🤍\n\nSalva e marca a amiga que precisa ver 👇\n\n#CuidadosComOsCílios #ExtensãoDeCílios #LashCare #LashDesign`
  },
  {
    categoria:"pro", tag:"Transformação", template:"cartao",
    artTitulo:"Ela não usava mais rímel", artSub:"E o olhar mudou tudo.",
    fonte:"", url:"",
    texto:`Ela chegou dizendo que vivia cansada de passar rímel e ele borrar. 👀\n\nDepois da extensão, o olhar dela ganhou vida sem nenhum esforço.\n\nNão é sobre exagero, é sobre valorizar o que já é seu. ✨\n\nQuer viver essa mudança? Chama no direct pra agendar 💛\n\n#Transformação #ExtensãoDeCílios #AntesEDepois #LashLovers`
  },
  {
    categoria:"con", tag:"Caixinha", template:"cartao",
    artTitulo:"Qual seu maior medo antes da 1ª vez?", artSub:"Quero saber 💭",
    fonte:"", url:"",
    texto:`Conversando com quem nunca fez cílios, sempre aparece a mesma insegurança. 💭\n\nAí fica a pergunta:\n\nqual é o seu maior medo: ficar exagerado, doer ou não combinar com você?\n\nNão existe resposta errada, quero muito saber a sua. 🤍\n\nComenta aqui embaixo 👇\n\n#ExtensãoDeCílios #CíliosRJ #Curicica #LashDesign`
  }
];

export const RADAR_POOL = [
  {
    categoria:"edu", tag:"Tendência · Efeito", template:"cartao",
    fonte:"", url:"",
    titulo:"Wispy lashes: o efeito boneca que virou febre",
    resumo:"Fios em alturas alternadas que criam um olhar fofo e molhado.",
    artTitulo:"Wispy lashes é a queridinha", artSub:"O efeito boneca que todo mundo quer",
    texto:`Já reparou naqueles cílios fofos, com fios espetadinhos em alturas diferentes? 👀\n\nEsse é o wispy lashes, um dos efeitos mais pedidos.\n\nEle cria um olhar molhado e delicado, natural e marcante ao mesmo tempo.\n\nNem todo olho comporta o mesmo desenho, por isso a avaliação antes importa. 💛\n\nCurtiu? Comenta se faria em você 👇\n\n#ExtensãoDeCílios #WispyLashes #LashDesign #CíliosPerfeitos`
  },
  {
    categoria:"edu", tag:"Tendência · Formato", template:"numero", num:"1",
    fonte:"", url:"",
    titulo:"Efeito raposinha (fox eyes) segue em alta",
    resumo:"O alongamento que puxa o olhar pra cima e lateraliza.",
    artTitulo:"Fox eyes: o olhar felino", artSub:"Puxa o olhar pra cima ✨",
    texto:`O efeito raposinha segue conquistando as clientes. 🦊\n\nEle concentra os fios mais longos no canto externo, criando um ar levantado e felino.\n\nPerfeito pra quem quer um olhar mais alongado.\n\nMas exige um olho que comporte esse desenho, por isso eu avalio antes. 💛\n\nVocê já tem esse efeito ou faria? Comenta 👇\n\n#ExtensãoDeCílios #FoxEyes #EfeitoRaposinha #LashDesign`
  },
  {
    categoria:"aut", tag:"Novidade · Naturalidade", template:"cofre",
    fonte:"", url:"",
    titulo:"Menos é mais: a onda do natural",
    resumo:"O exagero saiu de moda. A busca agora é pelo cílio que parece seu.",
    artTitulo:"O natural voltou com tudo", artSub:"O cílio que parece seu, só que melhor",
    texto:`A tendência mais forte agora é o olhar natural. 🤍\n\nAs clientes chegam pedindo o efeito de "parece que nasci assim".\n\nE eu amo isso, porque cílio bonito respeita o seu fio natural e a sua rotina.\n\nUm bom mapeamento faz o volume certo valorizar sem sobrecarregar. 💛\n\nVocê é time natural ou volumoso? Comenta 👇\n\n#ExtensãoDeCílios #CíliosNaturais #LashDesign #MenosÉMais`
  },
  {
    categoria:"edu", tag:"Tendência · Técnica", template:"cartao",
    fonte:"", url:"",
    titulo:"Lash lifting: o realce sem extensão",
    resumo:"Curvatura e nutrição no seu próprio fio, pra quem quer algo mais discreto.",
    artTitulo:"Lash lifting é pra você?", artSub:"Realce no seu próprio cílio",
    texto:`Nem toda cliente quer extensão, e tá tudo bem. 🤍\n\nO lash lifting curva e realça o seu próprio fio, com um efeito natural de rímel.\n\nÉ ótimo pra quem tem cílios bons e quer algo discreto e prático.\n\nQuer entender se combina com você? Me chama no direct 💛\n\n#LashLifting #ExtensãoDeCílios #CíliosNaturais #LashDesign`
  },
  {
    categoria:"edu", tag:"Tendência · Mapeamento", template:"extrato",
    fonte:"", url:"",
    titulo:"Efeito boneca x efeito gatinho: qual é o seu?",
    resumo:"O mapeamento muda tudo. Entenda a diferença dos dois efeitos.",
    artTitulo:"Boneca x Gatinho", artSub:"O mapa muda o seu olhar",
    artData1:"Boneca | olhar aberto", artData2:"Gatinho | olhar puxado",
    texto:`O mesmo material, mapeamentos diferentes, olhares completamente diferentes. 👀\n\nEfeito boneca: fios mais longos no centro, olhar aberto e arredondado.\n\nEfeito gatinho: fios mais longos no canto, olhar puxado e sensual.\n\nÉ o mapeamento que desenha o seu olhar, não só o material. 💛\n\nQual combina com você? Comenta 👇\n\n#ExtensãoDeCílios #EfeitoBoneca #EfeitoGatinho #LashDesign`
  },
  {
    categoria:"edu", tag:"Tendência · Curvatura", template:"numero", num:"3",
    fonte:"", url:"",
    titulo:"Curvaturas C, D e M: o que muda",
    resumo:"A curvatura certa valoriza o formato do seu olho.",
    artTitulo:"A curvatura muda tudo", artSub:"C, D ou M pro seu olho",
    texto:`A curvatura é o segredo que poucas clientes conhecem. 💡\n\n1. Curvatura C: levanta de forma suave e natural.\n2. Curvatura D: bem marcante, olhar bem aberto.\n3. Curvatura M: efeito espetadinho, super em alta.\n\nA escolha certa depende do formato do seu olho e da queda do seu fio. 💛\n\nQuer saber qual é a sua? Me chama 👇\n\n#ExtensãoDeCílios #CurvaturaDeCílios #LashDesign #CíliosPerfeitos`
  },
  {
    categoria:"aut", tag:"Tendência · Híbrido", template:"cartao",
    fonte:"", url:"",
    titulo:"Efeito híbrido: o melhor dos dois mundos",
    resumo:"Mistura de fio a fio com volume, textura natural e cheia ao mesmo tempo.",
    artTitulo:"Híbrido: textura e volume", artSub:"O melhor dos dois mundos",
    texto:`Não consegue decidir entre fio a fio e volume? O híbrido é pra você. ✨\n\nEle mistura as duas técnicas, criando textura natural com um toque de volume.\n\nFica cheio sem parecer pesado, com aquele ar despojado e real.\n\nTendência forte pra quem quer natural, mas com presença. 💛\n\nVocê faria um híbrido? Comenta 👇\n\n#ExtensãoDeCílios #EfeitoHíbrido #LashDesign #CíliosNaturais`
  },
  {
    categoria:"edu", tag:"Tendência · Cuidado", template:"cofre",
    fonte:"", url:"",
    titulo:"O óleo é o inimigo número 1 dos cílios",
    resumo:"Produtos oleosos derrubam a extensão antes da hora.",
    artTitulo:"Fuja do óleo perto dos olhos", artSub:"Proteja a fixação",
    texto:`Se tem uma coisa que derruba cílio antes da hora, é o óleo. 🚫\n\nDemaquilantes bifásicos, cremes oleosos e alguns protetores soltam os fios mais rápido.\n\nA dica é usar produtos oil free na região e limpar com shampoo específico.\n\nCuidado simples, resultado que dura muito mais. 💛\n\nVocê sabia dessa? Comenta 👇\n\n#CuidadosComOsCílios #ExtensãoDeCílios #LashCare #CíliosPerfeitos`
  },
  {
    categoria:"edu", tag:"Tendência · Manutenção", template:"numero", num:"3",
    fonte:"", url:"",
    titulo:"De quanto em quanto tempo fazer manutenção",
    resumo:"A média é a cada 3 semanas, mas depende do seu cuidado.",
    artTitulo:"3 semanas é o ideal", artSub:"Não deixe passar 💆‍♀️",
    texto:`De quanto em quanto tempo fazer a manutenção? 💆‍♀️\n\nA média é a cada 3 semanas, mas varia com o ciclo do seu cílio e os seus cuidados.\n\nAgende antes de perder metade dos fios: fica mais rápido e econômico.\n\nQuem cuida direitinho estica o intervalo e economiza. 🤍\n\nSalva pra lembrar da sua próxima 👇\n\n#ManutençãoDeCílios #ExtensãoDeCílios #CuidadosComOsCílios #LashCare`
  },
  {
    categoria:"aut", tag:"Tendência · Segurança", template:"cofre",
    fonte:"", url:"",
    titulo:"Beleza de verdade respeita a sua saúde",
    resumo:"Higiene, produtos de qualidade e avaliação honesta em primeiro lugar.",
    artTitulo:"Beleza com saúde sempre", artSub:"Cílio bonito é cílio saudável",
    texto:`Cílio bonito de verdade é cílio saudável. 🤍\n\nDesconfie de quem promete tudo sem te avaliar ou usa material duvidoso.\n\nHigiene, produtos de qualidade e uma conversa honesta protegem a sua saúde ocular.\n\nSeu olhar merece cuidado, não pressa. 💛\n\nJá passou por alguma experiência ruim? Comenta 👇\n\n#ExtensãoDeCílios #SaúdeOcular #LashDesign #CíliosNaturais`
  }
];
