


const produtos = [
  {
    
    nome: "Maçã",
    nomeCientifico:"Malus domestica",
    descricao: "Maçã fresca por KG.",

    preco: 25.00,
    img: "assets/imagens/maca.jpg"
  },
  {
    
    nome: "Caju",
    nomeCientifico:"Anacardium occidentale",
    descricao: "Caju fresco por KG.",
    preco: 15.00,
    img: "assets/imagens/caju.jpg"
  },
  {
    
    nome: "Manga",
    nomeCientifico:"Mangifera indica",
    descricao: "Manga fresca por KG.",
    preco: 20.00,
    img: "assets/imagens/manga (2).jpg"
  },
  
]; //lista com todos os produtos e suas informações




const cartas = document.querySelector(".cartas")
const cartões = document.querySelector("#cartões")



if (cartas) {
  //vai inserir os itens da lista na variavel cartao. 
  for (let produto of produtos) {
    let cartao = `
      <div class="cards">
        <div class="card" style="width: 18rem;">
          <img src="${produto.img}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${produto.nome}/<span class="nomeCientifico">${produto.nomeCientifico}</span></h5>
            <p class="card-text text-truncate">${produto.descricao}</p>
          </div>
        </div>
      </div>
      `;  // percorre a lista de produtos e para cada produto, ele adiciona um card no html

      
    
    const NovaDiv = document.createElement("div"); //cria uma nova div para esse elemento ser inserido nela

    NovaDiv.classList.add("cards", "col-md-4"); //ele vai adicionar essas classes que são do bootstrap na nova div criada
    NovaDiv.innerHTML = cartao; //procura a nova div criada e após isso, armazena dentro dela o conteudo da variavel cartão que está feita acima
    cartas.appendChild(NovaDiv); //agora ele vai buscar o elemento html com a class ou id(nesse caso class) correspondente e vai adicionar nela a nova div criada
  }
}


