const cartas = document.querySelector(".cartas");
const salvarFruteira = document.getElementById("salvarFruteira");


function criarCartao(fruteira){
    const dataPlantio = new Date(fruteira.dataPlantio);
    const hoje = new Date();
    const idadeMeses = (hoje.getFullYear() - dataPlantio.getFullYear()) * 12 + (hoje.getMonth() - dataPlantio.getMonth());


    const cartao = `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
      
        <div class="card-body">
        <h5 class="card-title">
          ${fruteira.nomePopular} <br>
          <span class="text-muted">${fruteira.nomeCientifico}</span>
        </h5>
        <p class="card-text">Produção média: ${fruteira.producao} Kg</p>
        <p class="card-text">Data do plantio: ${fruteira.dataPlantio}</p>
        <p class="card-text"><strong>Idade: ${idadeMeses} meses</strong></p>
      </div>
    </div>
  `;

    const novaDiv = document.createElement("div");
    novaDiv.classList.add("col-md-4", "mb-3");
    novaDiv.innerHTML = cartao;
    cartas.appendChild(novaDiv);

}

salvarFruteira.addEventListener("click", () => {
    const fruteira = {
        id: Date.now(),
        nomePopular: document.getElementById("nomePopular").value,
        nomeCientifico: document.getElementById("nomeCientifico").value,
        producao: Number(document.getElementById("producao").value),
        dataPlantio: document.getElementById("dataPlantio").value,
        
    };
    

    let lista = JSON.parse(localStorage.getItem("fruteiras")) || [];
    lista.push(fruteira);
    localStorage.setItem("fruteiras", JSON.stringify(lista));

    criarCartao(fruteira)

    


    
});


window.addEventListener("DOMContentLoaded", () => {
  let lista = JSON.parse(localStorage.getItem("fruteiras")) || [];
  lista.forEach(fruteira => criarCartao(fruteira));
});
