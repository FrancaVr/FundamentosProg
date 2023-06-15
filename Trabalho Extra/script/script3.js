let valorNotas = document.querySelector("#valorNotas");
let separarNotas = document.querySelector("#separarNotas");
let resultadoNotas = document.querySelector("#resultadoNotas");
let resultadoCem;
let resultadoCinquenta;
let resultadoDez;
let resultadoCinco;
let resultadoUm;

function notas() {
  let qtd1 = Number(valorNotas.value);
  resultadoCem = parseInt(qtd1 / 100);
  if ((qtd1 % 100) != 0) {
    resultadoCinquenta = parseInt((qtd1 % 100) / 50);
  }
  if (((qtd1 % 100) % 50) != 0) {
    resultadoDez = parseInt(((qtd1 % 100) % 50) / 10);
  }
  if ((((qtd1 % 100) % 50) % 10) != 0) {
    resultadoCinco = parseInt((((qtd1 % 100) % 50) % 10) / 5);
  }
  resultadoUm = ((((qtd1 % 100) % 50) % 10) % 5) / 1;

  resultadoNotas.textContent =
    resultadoCem +
    " nota(s) de 100, " +
    resultadoCinquenta +
    " nota(s) de cinquenta, " +
    resultadoDez +
    " nota(s) de dez, " +
    resultadoCinco +
    " nota(s) de cinco, " +
    resultadoUm +
    " nota(s) de um.";
}

separarNotas.onclick = function () {
  notas();
};