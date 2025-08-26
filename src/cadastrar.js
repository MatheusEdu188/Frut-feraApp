const cartas = document.querySelector(".cartas"); //seleciona a class dos cards no html
const salvarFruteira = document.getElementById("salvarFruteira");


function criarCartao(fruteira){
    const dataPlantio = new Date(fruteira.dataPlantio);
    const hoje = new Date(); //define a data de hoje
    
    const diferencaMs = hoje.getTime() - dataPlantio.getTime(); //calcula o numero de milesimos em uma data expecifica
    
    const meses = diferencaMs / (1000 * 60 * 60 * 24 * 30.44); //converte os segundos em meses
    
    const idadeMeses = Math.round(meses);

//cria uma variavel para armazenar o elemento html e colocar no site baseado nos objetos da lista
    const cartao = `
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h6>ID: ${fruteira.id}</h6>
    <h5 class="card-title">
      ${fruteira.nomePopular} <br>
      <span class="text-muted">${fruteira.nomeCientifico}</span>
    </h5>
    <p class="card-text">Produção média: ${fruteira.producao} Kg</p>
    <p class="card-text">Data do plantio: ${fruteira.dataPlantio}</p>
    <p class="card-text"><strong>Idade: ${idadeMeses} meses</strong></p>
  </div>
</div>
`; //ele vai fazer o mesmo esquema do arquivo js anterior, percorrer e adicionar


    const novaDiv = document.createElement("div"); //cria uma div para inserir a variavel cartão nela
    novaDiv.classList.add("col-md-4", "mb-3"); //novamente, adiciona essas classes a ele. classes do bootstrap.
    novaDiv.innerHTML = cartao; //adiciona o conteudo do cartão a nova div
    cartas.appendChild(novaDiv); //adiciona a novadiv na div cartas que foi selecionada no codigo acima

}



salvarFruteira.addEventListener("click", () => {
    const fruteira = {
        id: Date.now(),
        nomePopular: document.getElementById("nomePopular").value,
        nomeCientifico: document.getElementById("nomeCientifico").value,
        producao: Number(document.getElementById("producao").value),
        dataPlantio: document.getElementById("dataPlantio").value,
        
    }; //essa função cria a lista com os ids no html, coleta todos os valores coletados no html e joga para a lista.
    

    let lista = JSON.parse(localStorage.getItem("fruteiras")) || []; //salva a lista no localstorage, foi necessario o JSON pois o localstorage não salva as listas inteiras.
    lista.push(fruteira); //adiciona os itens coletados na lista
    localStorage.setItem("fruteiras", JSON.stringify(lista));

    criarCartao(fruteira)//chama a função para criar um cartão com os itens da lista

    


    
});


window.addEventListener("DOMContentLoaded", () => {
  let lista = JSON.parse(localStorage.getItem("fruteiras")) || [];
  lista.forEach(fruteira => criarCartao(fruteira));
}); //o codigo só será carregado quando todo o html tbm tiver sido carregado. isso foi necessario pq os itens do localstorage não estavam aparecendo no site, e eunão sabia oq fazer.
