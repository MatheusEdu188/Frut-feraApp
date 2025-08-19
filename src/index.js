const produtos = [
  {
    id: 0,
    nome: "Maçã",
    nomeCientifico:"Malus domestica",
    descricao: "Maçã fresca por KG.",

    preco: 25.00,
    img: "assets/imagens/maca.jpg"
  },
  {
    id: 1,
    nome: "Caju",
    nomeCientifico:"Anacardium occidentale",
    descricao: "Caju fresco por KG.",
    preco: 15.00,
    img: "assets/imagens/caju.jpg"
  },
  {
    id: 2,
    nome: "Manga",
    nomeCientifico:"Mangifera indica",
    descricao: "Manga fresca por KG.",
    preco: 20.00,
    img: "assets/imagens/manga (2).jpg"
  },
  
];




const cartas = document.querySelector(".cartas")
const cartões = document.querySelector("#cartões")



if (cartas) {
  let idB = 0;
  for (let produto of produtos) {
    let cartao = `
      <div class="cards">
        <div class="card" style="width: 18rem;">
          <img src="${produto.img}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${produto.nome}/<span class="nomeCientifico">${produto.nomeCientifico}</span></h5>
            <p class="card-text text-truncate">${produto.descricao}</p>
            <a href="#" data-id="${idB}" class="btnComprar btn btn-primary">R$ ${produto.preco}</a>
          </div>
        </div>
      </div>
    `;
    idB++;
    const NovaDiv = document.createElement("div");
    NovaDiv.classList.add("cards", "col-md-4");
    NovaDiv.innerHTML = cartao;
    cartas.appendChild(NovaDiv);
  }
}


