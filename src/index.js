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

const btnComprar = [...document.querySelectorAll(".btnComprar[data-id]")]

const AdicionarProdutos = document.querySelector("#modal1")
const fecharAdicionar = document.querySelector("#fechar")
const adicionarItem = document.querySelector(".confirmar")
const btnCarrinho = document.querySelector("#carrinho")
const MostrarCarrinho = document.querySelector("#modal2")
const fecharCarrinho = document.querySelector("#fecharCarrinho")
const corpoCarrinho = document.querySelector("#carrinho-corpo")
const comprar = document.getElementById("comprar")


let precoCarrinho = 0




if (fecharAdicionar) {
  fecharAdicionar.addEventListener("click", () => {
    adicionarProdutos.style.display = "none";
  });
}
let imagemCard = ""
const receberImg = document.querySelector("#receberimg")

if (receberImg) {
  receberImg.addEventListener("change", () => {
    const arquivo = receberImg.files[0];
    imagemCard = URL.createObjectURL(arquivo);
  });
}
    btnCarrinho.addEventListener("click", ()=>{
      MostrarCarrinho.style.display = "flex"

    })
if(fecharCarrinho){
fecharCarrinho.addEventListener("click", ()=>{
    MostrarCarrinho.style.display = "none"
  })
}
  
  let RID = 1
  btnComprar.forEach((e)=>{
    e.addEventListener("click",()=>{
        const id = Number(e.dataset.id)
        const produto = produtos.find(p => p.id === id)

        let quantidade = 1

        let itemCarrinho = document.createElement("div")
        
        itemCarrinho.innerHTML = ` <div class="cart-item">
      <img src="${produto.img}" alt="Produto">
      <div class="cart-details">
        <h4>${produto.nome}</h4>
        <button class="aumentar">+</button>
        <p>Quantidade: ${quantidade} <span class="cart-price">R$ ${produto.preco}</span></p>
      </div>
      <button class="remove-btn">Remover</button>
    </div>`
    corpoCarrinho.appendChild(itemCarrinho)
    precoCarrinho += produto.preco
    comprar.innerHTML = `Obter R$ ${precoCarrinho.toFixed(2)}`
    
    
    
    
    
    const aumentar = itemCarrinho.querySelector(".aumentar")
    const removerItem = itemCarrinho.querySelector(".remove-btn")
    
    
    removerItem.addEventListener("click", ()=>{
      corpoCarrinho.removeChild(itemCarrinho)
            precoCarrinho -= produto.preco * quantidade
            comprar.innerHTML = `Obter R$ ${precoCarrinho.toFixed(2)}`
            
          })
          
          
          aumentar.addEventListener("click", ()=>{
            quantidade += 1
            
            itemCarrinho.querySelector("p").innerHTML = `Quantidade: ${quantidade} <span class="cart-price">R$ ${produto.preco * quantidade}</span>`
            precoCarrinho += produto.preco
            comprar.innerHTML = `Obter R$ ${precoCarrinho.toFixed(2)}`
            
            
            
          })
          
          console.log(aumentar);
          
          
          
          
          
          
        })
      })
      
      
let id = 3
// adicionarItem.addEventListener("click",()=>{
//   const tituloAdc = document.querySelector("#titulo")
//   const descricaoAdc = document.querySelector("#descricao")
//   const precoAdc = document.querySelector("#preco")
          
          
//   id++
//   const titulo = tituloAdc.value
//   const descricao = descricaoAdc.value
//   const preco = precoAdc.value
//   const novoElemento = document.createElement("div")
//   novoElemento.classList.add("col-md-4", "mb-3");
//   novoElemento.innerHTML = `<div class="cards">
//     <div class="card" style="width: 18rem;">
//     <img src="${imagemCard}" class="card-img-top" alt="...">
//     <div class="card-body">
//       <h5 class="card-title">${titulo}</h5>
//       <p class="card-text text-truncate">${descricao}</p>
//       <a href="#" class="btn btn-primary" data-id="${id}">${preco}</a>
//         </div>
//       </div>`
//       novoElemento.querySelector(".btn").addEventListener("click", (e)=>{
//         const id = Number(e.target.dataset.id)
//         const produto = produtos.find(p => p.id === id)
//         adicionarAoCarrinho(produto)
//         })
      
//       cartas.appendChild(novoElemento)
      
      
      
//   const novoProduto = {
//       id: id,
//       nome: titulo,
//       descricao: descricao,
//       preco: parseFloat(preco),
//       img: imagemCard
//     };
//     produtos.push(novoProduto);
        
        
        
        
        
        
// })
   




function adicionarAoCarrinho(produto) {
  let quantidade = 1;

  const itemCarrinho = document.createElement("div");
  itemCarrinho.innerHTML = `
    <div class="cart-item">
      <img src="${produto.img}" alt="${produto.nome}">
      <div class="cart-details">
        <h4>${produto.nome}</h4>
        <button class="aumentar">+</button>
        <p>Quantidade: ${quantidade} <span class="cart-price">R$ ${produto.preco.toFixed(2)}</span></p>
      </div>
      <button class="remove-btn">Remover</button>
    </div>
  `;

  corpoCarrinho.appendChild(itemCarrinho);
  precoCarrinho += produto.preco;
  comprar.innerHTML = `Obter R$ ${precoCarrinho.toFixed(2)}`;

  const aumentar = itemCarrinho.querySelector(".aumentar");
  const remover = itemCarrinho.querySelector(".remove-btn");

  aumentar.addEventListener("click", () => {
    quantidade++;
    itemCarrinho.querySelector("p").innerHTML = `Quantidade: ${quantidade} <span class="cart-price">R$ ${(produto.preco * quantidade).toFixed(2)}</span>`;
    precoCarrinho += produto.preco;
    comprar.innerHTML = `Obter R$ ${precoCarrinho.toFixed(2)}`;
  });

  remover.addEventListener("click", () => {
    corpoCarrinho.removeChild(itemCarrinho);
    precoCarrinho -= produto.preco * quantidade;
    comprar.innerHTML = `Obter R$ ${precoCarrinho.toFixed(2)}`;
  });
}
      
      
      
      
