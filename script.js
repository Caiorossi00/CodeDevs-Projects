let projeto01 = {
  nome: "Aplicativo de anotações",
  sinopse:
    "O app de anotações é projetado para proporcionar aos usuários uma plataforma simples e eficiente para registrar e organizar suas notas. Essa aplicação permite a criação, edição e exclusão de notas, promovendo uma organização lógica das informações. Priorizando simplicidade e praticidade, o objetivo é oferecer uma experiência intuitiva e direta para o usuário gerenciar suas anotações de maneira eficaz.",
  tecnologias: "HTML, CSS, Javascript",
  funcionalidades:
    "Adicionar nota, editar nota, apagar nota, filtrar por categoria.",
  layout: "Em desenvolvimento",
  roadmap: {
    create: "Implementação da funcionalidade de criação (Create)",
    read: "Implementação da funcionalidade de leitura (Read)",
    update: "Implementação da funcionalidade de atualização (Update)",
    delete: "Implementação da funcionalidade de exclusão (Delete)",
    categorias: "Desenvolvimento da funcionalidade de categorias",
    pesquisaFiltros: "Implementação da funcionalidade de pesquisa/filtros",
  },
};

let projeto02 = {
  nome: "Site para instituição de caridade",
  sinopse:
    "O site tem como objetivo criar uma presença online impactante para uma organização sem fins lucrativos. Com um design acessível e informativo, o site visa destacar as causas e atividades da instituição, incentivando o engajamento da comunidade.",
  tecnologias: "",
  funcionalidades: "",
  layout: "",
  roadmap: {},
};

let projeto03 = {
  nome: "Plataforma de apoio à saúde mental",
  sinopse:
    "A plataforma de apoio à saúde mental é dedicada a fornecer recursos e suporte online para indivíduos que enfrentam desafios emocionais. Oferecendo informações e ferramentas interativas, o objetivo é criar um ambiente seguro para a promoção da saúde mental.",
  tecnologias: "",
  funcionalidades: "",
  layout: "",
  roadmap: {},
};

let projeto04 = {
  nome: "Calendário temático de eventos",
  sinopse:
    "O calendário temático de eventos é uma ferramenta interativa que apresenta uma variedade de eventos organizados por temas. Com uma interface envolvente, os usuários podem explorar e participar de diversas atividades, criando uma experiência personalizada de descoberta de eventos.",
  tecnologias: "",
  funcionalidades: "",
  layout: "",
  roadmap: {},
};

let projeto05 = {
  nome: "Jogo de Quiz temático",
  sinopse:
    "O jogo de quiz temático é uma forma divertida de testar o conhecimento dos usuários sobre temas específicos. Com perguntas cativantes e desafios interativos, o objetivo é proporcionar entretenimento educativo, incentivando a aprendizagem enquanto se diverte.",
  tecnologias: "",
  funcionalidades: "",
  layout: "",
  roadmap: {},
};

let projeto06 = {
  nome: "Gerador de frases temáticas engraçadas",
  sinopse:
    "O gerador de frases temáticas engraçadas é uma ferramenta leve e divertida que cria frases humorísticas para melhorar o dia do usuário. Projetado para gerar sorrisos, o aplicativo oferece uma maneira descontraída de entretenimento através da criação de frases engraçadas.",
  tecnologias: "",
  funcionalidades: "",
  layout: "",
  roadmap: {},
};

let projeto07 = {
  nome: "Jogo de Memória",
  sinopse:
    "O jogo de memória é uma versão digital do clássico jogo de cartas que desafia a memória dos jogadores. Com diferentes níveis de dificuldade e temas envolventes, o objetivo é proporcionar uma experiência divertida e estimulante para todas as idades.",
  tecnologias: "",
  funcionalidades: "",
  layout: "",
  roadmap: {},
};

let projeto08 = {
  nome: "Plataforma de previsão do tempo",
  sinopse:
    "A plataforma de previsão do tempo oferece informações meteorológicas precisas e visualmente atraentes. O objetivo é fornecer aos usuários uma ferramenta confiável para se manterem informados sobre as condições meteorológicas da sua região.",
  tecnologias: "",
  funcionalidades: "",
  layout: "",
  roadmap: {},
};

let projeto09 = {
  nome: "Lista de compras interativas",
  sinopse:
    "A lista de compras interativas é uma aplicação prática para facilitar o processo de compra. Com recursos de organização, categorização e sugestões inteligentes, o objetivo é tornar a experiência de compra mais eficiente e agradável.",
  tecnologias: "",
  funcionalidades: "",
  layout: "",
  roadmap: {},
};

function displayContent(projeto) {
  let projectDetailsContainer = document.getElementById("projectDetails");

  let projectName = document.createElement("h1");
  projectName.textContent = projeto.nome;

  projectDetailsContainer.innerHTML = "";

  projectDetailsContainer.appendChild(projectName);

  Object.keys(projeto).forEach((key) => {
    if (key !== "nome" && key !== "roadmap") {
      let detailElement = document.createElement("p");
      detailElement.textContent = `${
        key.charAt(0).toUpperCase() + key.slice(1)
      }: ${projeto[key]}`;
      projectDetailsContainer.appendChild(detailElement);
    }
  });

  if (projeto.roadmap) {
    let roadmapContainer = document.createElement("div");
    roadmapContainer.innerHTML = "<h2>Roadmap</h2><ul>";

    Object.keys(projeto.roadmap).forEach((subKey) => {
      let listItem = document.createElement("li");
      listItem.textContent = `${projeto.roadmap[subKey]}`;
      roadmapContainer.querySelector("ul").appendChild(listItem);
    });

    roadmapContainer.innerHTML += "</ul>";
    projectDetailsContainer.appendChild(roadmapContainer);
  }
}

const urlParams = new URLSearchParams(window.location.search);
const projetoSelecionado = urlParams.get("projeto");

if (projetoSelecionado === "projeto01") {
  displayContent(projeto01);
} else if (projetoSelecionado === "projeto02") {
  displayContent(projeto02);
} else if (projetoSelecionado === "projeto03") {
  displayContent(projeto03);
} else if (projetoSelecionado === "projeto04") {
  displayContent(projeto04);
} else if (projetoSelecionado === "projeto05") {
  displayContent(projeto05);
} else if (projetoSelecionado === "projeto06") {
  displayContent(projeto06);
} else if (projetoSelecionado === "projeto07") {
  displayContent(projeto07);
} else if (projetoSelecionado === "projeto08") {
  displayContent(projeto08);
} else if (projetoSelecionado === "projeto09") {
  displayContent(projeto09);
}
