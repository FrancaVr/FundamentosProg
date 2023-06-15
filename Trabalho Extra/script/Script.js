// Exercicio 1 //

let resultadoOrdemValores = document.querySelector("#resultadoOrdemValores");

function mostrarOrdemDecrescente() {
    var valores = [];

    // Ler os valores e armazenar
    for (var i = 1; i <= 5; i++) //criando uma repetição de 5 vezes// 
    {
      var valor = parseInt(prompt("Digite o valor " + i));  //parseInt para usar numero inteiro //
      valores.push(valor);  //serve para trazer os numeros que foram enviados antes//
    }

    // Ordenar os valores em ordem decrescente
    valores.sort(function(a, b) {
      return b - a;
    });

    // Exibir os valores em ordem decrescente
    resultadoOrdemValores.innerHTML = "Valores em ordem decrescente: " + valores.join(", ");
  }


  // Exercicio 2 //

  let trianguloX = document.querySelector("#trianguloX");
  let trianguloY = document.querySelector("#trianguloY");
  let trianguloZ = document.querySelector("#trianguloZ");
  let resultadosTriangulo = document.querySelector("#resultadosTriangulo");

  function trianguloCalculo(){ 
    let ladoX = Number(trianguloX.value);
    let ladoY = Number(trianguloY.value);
    let ladoZ = Number(trianguloZ.value);

    if (ladoX + ladoY >= ladoZ && ladoX + ladoZ >= ladoY && ladoY + ladoZ >= ladoX){ 

    if (ladoX == ladoY && ladoY == ladoZ){
      resultadosTriangulo.textContent = "é um triangulo equilátero.";
    }

    else if (ladoX == ladoY && ladoY != ladoZ) {
    resultadosTriangulo.textContent = "é um triangulo isóceles.";
    }

    else if (ladoX == ladoY && ladoX != ladoZ) {
      resultadosTriangulo.textContent = "é um triangulo isóceles.";
    }
    else if (ladoZ == ladoY && ladoX != ladoY) {
      resultadosTriangulo.textContent = "é um triangulo isóceles.";
    }
    else if (ladoX == ladoZ && ladoZ != ladoY) {
    resultadosTriangulo.textContent = "é um triangulo isóceles.";
    }
    else {
    resultadosTriangulo.textContent = "é um triangulo escaleno.";
    }
  }

  else { 
    resultadosTriangulo.innerHTML = "Isso não é triângulo :/ "   
  }
}

// exercicio 3 - falta FALTA falta FALTA //

let valorNotas = document.querySelector("#valorNotas");
let resultadoNotas = document.querySelector("#resultadoNotas");

function separarNotas(){
  let notas = Number(valorNotas.value);
  let notasDe100 = 0;
  let notasDe50 = 0;
  let notasDe10 = 0;
  let notasDe5 = 0;
  let notasDe1 = 0;

  if (notas >= 100){
    notasDe100 = Math.floor(notas/100);
  }

  else if (notas >= 50) {
    notasDe50 = Math.floor(notas/50);
  }
  else if (notas >= 10){
    notasDe10 = Math.floor(notas/10);
  }
  else if (notas>=5){
    notasDe5 = Math.floor(notas/5);

  }
  else {
    notasDe1 = Math.floor(notas);
  }
  
  resultadoNotas.innerHTML= "O valor total é: " + notas 
  + "<br> Notas de 100: " + notasDe100 
  + "<br> Notas de 50: " + notasDe50 
  + "<br> Notas de 10: " + notasDe10 
  + "<br> Notas de 5: " + notasDe5 
  + "<br> Notas de 1: " + notasDe1;
}

// Exercicio 4 //

let anoDoCarro = document.querySelector("#anoDoCarro");
let valorDoCarro = document.querySelector("#valorDoCarro");
let resultadoImpostoCarro = document.querySelector("#resultadoImpostoCarro");

function calculoImpostoCarro() {
  let anoCalculoImposto = Number(anoDoCarro.value);
  let valorCalculoImposto = Number(valorDoCarro.value);

  if (anoCalculoImposto < 1990){
    valorCalculoImposto1990 = valorCalculoImposto * (1/100)

    resultadoImpostoCarro.innerHTML = "O Ano do veículo é: " + anoCalculoImposto 
    + "<br>" + "O Valor do veículo é de: R$ " + valorCalculoImposto 
    + "<br>" + "O Valor de imposto é de: R$ " + valorCalculoImposto1990;
    }

  else {
    valorCalculoImposto1990 = valorCalculoImposto * (1.5/100)

    resultadoImpostoCarro.innerHTML = "O Ano do veículo é: " + anoCalculoImposto 
    + "<br>" + "O Valor do veículo é de: R$ " + valorCalculoImposto 
    + "<br>" + "O Valor de imposto é de: R$ " + valorCalculoImposto1990;
    }
  }


  // Exercicio 5 - FALTA falta FALTA falta//

  function calcularSalario(){


      // Exibir os resultados
      document.getElementById('salarioAntigo').textContent = 'Salário Antigo: R$ ' + salarioAntigo.toFixed(2);
      document.getElementById('novoSalario').textContent = 'Novo Salário: R$ ' + novoSalario.toFixed(2);
      document.getElementById('diferenca').textContent = 'Diferença: R$ ' + diferenca.toFixed(2);
  }


  // Exercicio 6 //
  let saldoMedioBanco = document.querySelector("#saldoMedioBanco");
  let resultadoSaldoBanco = document.querySelector("#resultadoSaldoBanco");

  function calculoSaldoBanco(){
    let valorBanco = Number(saldoMedioBanco.value);

    if (200 >= valorBanco){
    valorCredito = 0;
    }
    else if (200 < valorBanco <= 400){
    valorCredito = valorBanco*(20/100);
    }
    else if (400 < valorBanco <= 600){
    valorCredito = valorBanco*(30/100);
    }
    else {
    valorCredito = valorBanco*(40/100);
    }

    resultadoSaldoBanco.innerHTML = "O valor do saldo é de : R$ " + valorBanco + "<br> O valor do crédito é de: R$ " + valorCredito;
  }

  // Exercicio 7 //