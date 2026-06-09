// js/app.js
const formSimulador = document.getElementById("formSimulador");
const conectividade = document.getElementById("conectividade");
const valorConectividade = document.getElementById("valorConectividade");

if (conectividade) {
  conectividade.addEventListener("input", function () {
    valorConectividade.textContent = conectividade.value + "%";
  });
}