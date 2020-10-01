// Make Cards
const sectioncards_servico = document.querySelector("section.cards_servico");
const card_servico = document.querySelector("div.card_servico");
const servicos = [
  {
    servico_id: "HousePaint/servicos/acabamento-interno.jpg",
    thumb: "HousePaint/servicos/acabamento-interno.jpg",
  },
  {
    servico_id: "HousePaint/servicos/instalacao-gesso.jpg",
    thumb: "HousePaint/servicos/instalacao-gesso.jpg",
  },
  {
    servico_id: "HousePaint/servicos/pintura-externa.jpg",
    thumb: "HousePaint/servicos/pintura-externa.jpg",
  },
  {
    servico_id: "HousePaint/servicos/pintura-grades-portoes.jpg",
    thumb: "HousePaint/servicos/pintura-grades-portoes.jpg",
  },
  {
    servico_id: "HousePaint/servicos/pintura-interna.jpg",
    thumb: "HousePaint/servicos/pintura-interna.jpg",
  },
];

servicos.map((servico) => {
  const card_servicoClone = card_servico.cloneNode(true);
  card_servicoClone.querySelector("img").src = servico.thumb;
  card_servicoClone.setAttribute("id", servico.servico_id);
  sectioncards_servico.appendChild(card_servicoClone);
});
card_servico.remove();
// Modal actions
const modalOverlay = document.querySelector(".modal-overlay");
const modal = document.querySelector(".modal");
const cards_servico = [
  ...document.querySelectorAll(".cards_servico .card_servico"),
];

cards_servico.forEach((card_servico) => {
  card_servico.addEventListener("click", () => {
    modal.querySelector(".Im1").src = `${card_servico.getAttribute("id")}`;
    modalOverlay.classList.add("active");
    modal.classList.add("active");
    document.querySelector("body").style.overflow = "hidden";
  });
});

function closemodal() {
  modalOverlay.classList.remove("active");
  modal.classList.remove("active");
  modal.querySelector(".Im1").src = ``;
  document.querySelector("body").style.overflow = "initial";
}

document.querySelector(".close-modal").addEventListener("click", () => {
  closemodal();
});
document.onkeydown = function (evt) {
  evt = evt || window.event;
  var isEscape = false;
  if ("key" in evt) {
    isEscape = evt.key === "Escape" || evt.key === "Esc";
  } else {
    isEscape = evt.keyCode === 27;
  }
  if (isEscape) {
    closemodal();
  }
};

const sectioncards_clientes = document.querySelector("section.cards_clientes");
const card_clientes = document.querySelector("div.card_clientes");
const clientes = [
  {
    cliente_id: "HousePaint/clientes/cliente1.jpg",
    thumb: "HousePaint/clientes/cliente1.jpg",
  },
  {
    cliente_id: "HousePaint/clientes/cliente2.jpg",
    thumb: "HousePaint/clientes/cliente2.jpg",
  },
  {
    cliente_id: "HousePaint/clientes/cliente3.jpg",
    thumb: "HousePaint/clientes/cliente3.jpg",
  },
  {
    cliente_id: "HousePaint/clientes/cliente4.jpg",
    thumb: "HousePaint/clientes/cliente4.jpg",
  },
  {
    cliente_id: "HousePaint/clientes/cliente5.jpg",
    thumb: "HousePaint/clientes/cliente5.jpg",
  },
];

clientes.map((cliente) => {
  const card_clientesClone = card_clientes.cloneNode(true);
  card_clientesClone.querySelector("img").src = cliente.thumb;
  card_clientesClone.setAttribute("id", cliente.cliente_id);
  sectioncards_clientes.appendChild(card_clientesClone);
});
card_clientes.remove();

// Modal actions
const cards_clientes = [
  ...document.querySelectorAll(".cards_clientes .card_clientes"),
];

cards_clientes.forEach((card_clientes) => {
  card_clientes.addEventListener("click", () => {
    modal.querySelector(".Im1").src = `${card_clientes.getAttribute("id")}`;
    modalOverlay.classList.add("active");
    modal.classList.add("active");
    document.querySelector("body").style.overflow = "hidden";
  });
});

function closemodal() {
  modalOverlay.classList.remove("active");
  modal.classList.remove("active");
  modal.querySelector(".Im1").src = ``;
  document.querySelector("body").style.overflow = "initial";
}
// MENU RESPONSIVO
