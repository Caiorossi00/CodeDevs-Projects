let projeto01 = {
  nome: "Aplicativo de anotações",
  sinopse: "",
  tecnologias: "",
  funcionalidades: "",
  layout: "",
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
  tecnologias: "",
  funcionalidades: "",
  layout: "",
  roadmap: {},
};

let projeto03 = {
  nome: "Plataforma de apoio à saúde mental",
  tecnologias: "",
  funcionalidades: "",
  layout: "",
  roadmap: {},
};
let projeto04 = {
  nome: "Calendário temático de eventos",
  tecnologias: "",
  funcionalidades: "",
  layout: "",
  roadmap: {},
};

let projeto05 = {
  nome: "Jogo de Quiz temático",
  tecnologias: "",
  funcionalidades: "",
  layout: "",
  roadmap: {},
};

let projeto06 = {
  nome: "Gerador de frases temáticas engraçadas",
  tecnologias: "",
  funcionalidades: "",
  layout: "",
  roadmap: {},
};

let projeto07 = {
  nome: "Jogo de Memória",
  tecnologias: "",
  funcionalidades: "",
  layout: "",
  roadmap: {},
};

let projeto08 = {
  nome: "Plataforma de previsão do tempo",
  tecnologias: "",
  funcionalidades: "",
  layout: "",
  roadmap: {},
};

let projeto09 = {
  nome: "Lista de compras interativas",
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
