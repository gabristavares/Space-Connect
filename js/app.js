// js/app.js
const formSimulador = document.getElementById("formSimulador");
const conectividade = document.getElementById("conectividade");
const valorConectividade = document.getElementById("valorConectividade");

if (conectividade) {
  conectividade.addEventListener("input", function () {
    valorConectividade.textContent = conectividade.value + "%";
  });
}

if (formSimulador) {
  formSimulador.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const empresa = document.getElementById("empresa").value.trim();
    const setor = document.getElementById("setor").value;
    const regiao = document.getElementById("regiao").value;
    const nivelConectividade = Number(document.getElementById("conectividade").value);
    const dados = document.getElementById("dados").value;

     let pontuacao = 0;

     if (empresa !== "") pontuacao += 10;
    if (setor !== "") pontuacao += 15;
    if (regiao === "remota" || regiao === "rural" || regiao === "risco") pontuacao += 25;
    if (regiao === "urbana") pontuacao += 15;

    if (nivelConectividade < 40) pontuacao += 25;
    else if (nivelConectividade < 70) pontuacao += 18;
    else pontuacao += 10;

    if (dados === "sim") pontuacao += 25;
    if (dados === "parcial") pontuacao += 18;
    if (dados === "nao") pontuacao += 10;

    if (pontuacao > 100) pontuacao = 100;

    const tituloResultado = document.getElementById("tituloResultado");
    const textoResultado = document.getElementById("textoResultado");
    const barraResultado = document.getElementById("barraResultado");
    const pontuacaoResultado = document.getElementById("pontuacaoResultado");

    let recomendacao = "";

    if (pontuacao >= 80) {
      recomendacao = "Alta prioridade para implantacao. A empresa tem grande potencial para usar dados orbitais, IA e monitoramento inteligente.";
    } else if (pontuacao >= 55) {
      recomendacao = "Potencial intermediario. A Space Connect pode ajudar a melhorar conectividade, analise de dados e tomada de decisao.";
    } else {
      recomendacao = "Potencial inicial. A empresa pode comecar com diagnostico digital e evoluir aos poucos para solucoes espaciais.";
    }

    tituloResultado.textContent = "Resultado para " + empresa;
    textoResultado.textContent = recomendacao;
    barraResultado.style.width = pontuacao + "%";
    pontuacaoResultado.textContent = "Pontuacao: " + pontuacao + "%";
  });
}