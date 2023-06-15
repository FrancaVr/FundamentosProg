// Funções Paginas //
function exercicio1() {
    window.location.href="exercicio1.html"
}
function exercicio2() {
    window.location.href="exercicio2.html"
}
function exercicio3() {
    window.location.href="exercicio3.html"
}
function exercicio4() {
    window.location.href="exercicio4.html"
}
function exercicio5() {
    window.location.href="exercicio5.html"
}
function exercicio6() {
    window.location.href="exercicio6.html"
}
function exercicio7() {
    window.location.href="exercicio7.html"
}
function exercicio8() {
    window.location.href="exercicio8.html"
}
function exercicio9() {
    window.location.href="exercicio9.html"
}
function exercicio10() {
    window.location.href="exercicio10.html"
}
function exercicio11() {
    window.location.href="exercicio11.html"
}
function exercicio12() {
    window.location.href="exercicio12.html"
}
function exercicio13() {
    window.location.href="exercicio13.html"
}
function exercicio14() {
    window.location.href="exercicio14.html"
}
 // exercicio 1 //
    let altura = document.querySelector("#altura");
    let largura = document.querySelector("#largura");
    let resultadoArea = document.querySelector("#resultadoArea");

function calculoArea(){
    let h = Number(altura.value);
    let l = Number(largura.value);

    resultadoArea.textContent = "Seu terreno tem " + h * l + "m² de área";
}
// exercicio 2//
    let quantidadeCavalos = document.querySelector("#quantidadeCavalos");
    let resultadoFerraduras = document.querySelector("#resultadoFerraduras");

    function calculoCavalos() {
        let cavalos = Number(quantidadeCavalos.value);
        let quantidadeFerraduras = cavalos * 4;
        resultadoFerraduras.textContent = "São necessárias " + quantidadeFerraduras + " ferraduras.";
    }


// exercicio 3 //

    let pao = document.querySelector("#pao");
    let broa = document.querySelector("#broa");
    let resultadopadaria = document.querySelector("#resultadopadaria");
    let poupança = document.querySelector("#poupança");

function padaria(){
    let quantPao = Number(pao.value);
    let quantBroa = Number(broa.value);
    let PrecoPao = quantPao * 0.12;
    let PrecoBroa = quantBroa * 1.5;
    let resultadoPaes = PrecoPao + PrecoBroa;

    resultadopadaria.textContent = "O valor obtido no fim do dia foi: " + resultadoPaes;
    poupança.textContent = "O valor a ser depositado na poupança é: " + (resultadoPaes * 0.1);
}

// exercicio 4 //
    let nomeNascimento = document.querySelector("#nomeNascimento");
    let diaNascimento = document.querySelector("#diaNascimento");
    let mesNascimento = document.querySelector("#mesNascimento");
    let anoNascimento = document.querySelector("#anoNascimento");
    let resultadoCalendarioNascimento = document.querySelector("#resultadoCalendarioNascimento");


    function calculoNascimento() {
        let nomezinho = String(nomeNascimento.value);
        let diaEx4 = Number(diaNascimento.value);
        let mesEx4 = Number(mesNascimento.value);
        let anoEx4 = Number(anoNascimento.value);

        let calculoMesNascimento = ((mesEx4 - 1) * 30)
        let calculoAnoNascimento = (2023 - (anoEx4 + 1)) * 365;
        let resultadoCalculoNascimento = calculoMesNascimento + calculoAnoNascimento + diaEx4;

        resultadoCalendarioNascimento.textContent = "Você " + nomezinho + " viveu no total: " + resultadoCalculoNascimento + " dias."
    }

// exercicio 5 //
    let preçoCombustivel = document.querySelector("#preçoCombustivel");
    let pagarCombustivel = document.querySelector("#pagarCombustivel");
    let resultadoPosto = document.querySelector("#resultadoPosto");

function combustivel() {
    let pCombustivel = Number(preçoCombustivel.value);
    let pagCombustivel = Number(pagarCombustivel.value);

    resultadoCombustivel = pagCombustivel / pCombustivel;
    resultadoPosto.textContent = "O Cliente irá encher o tanque com " + resultadoCombustivel + " litros";
}

// exercicio 6 //

    let taraPrato = document.querySelector("#taraPrato");
    let pesoPratoCheio = document.querySelector("#pesoPratoCheio");
    let resultadoCalculoPrato = document.querySelector("#resultadoCalculoPrato");

function calculoDoPrato() {
    let taraPratoRestaurante = Number(taraPrato.value);
    let PratoCheioRestaurante = Number(pesoPratoCheio.value);

    let CalculoPratao = PratoCheioRestaurante - taraPratoRestaurante;
    // divide por 1000 pra saber em kg //
    let PreçoPratao = (CalculoPratao/1000) * 12.00;

    resultadoCalculoPrato.textContent = "O valor do seu prato é: R$ " + PreçoPratao.toFixed(2);
}

// exercicio 7 //

    let diaCalendario = document.querySelector("#diaCalendario");
    let mesCalendario = document.querySelector("#mesCalendario");
    let resultadoCalendario = document.querySelector("#resultadoCalendario");

function calendario(){
    let dias = Number(diaCalendario.value);
    let meses = Number(mesCalendario.value);

    ContaCalendario = ((meses - 1)*30) + dias;

    resultadoCalendario.textContent = "Já se passaram " + ContaCalendario + "dias."
}

//exercicio 8//

    let camisetaPequena = document.querySelector("#camisetaPequena");
    let camisetaMedia = document.querySelector("#camisetaMedia");
    let camisetaGrande = document.querySelector("#camisetaGrande");
    let resultadoCamisetas = document.querySelector("#resultadoCamisetas");
    let QuantidadesCamisetas = document.querySelector("#QuantidadesCamisetas");

function calculoDasCamisetas() {
    let quantCamisetaPequena = Number(camisetaPequena.value);
    let quantCamisetaMedia = Number(camisetaMedia.value);
    let quantCamisetaGrande = Number(camisetaGrande.value);

    let calculoCamisetaPequena = quantCamisetaPequena * 10.00;
    let calculoCamisetaMedia = quantCamisetaMedia * 12.00;
    let calculoCamisetaGrande = quantCamisetaGrande * 15.00;
    let totalCamisetas = calculoCamisetaPequena + calculoCamisetaMedia + calculoCamisetaGrande;

    resultadoCamisetas.textContent = "O valor total foi de: " + totalCamisetas;
    QuantidadesCamisetas.innerHTML = "A quantidade de camisetas Pequenas foi de: " + quantCamisetaPequena + 
    "<br> A quantidade de camisetas Medias foi de: " + quantCamisetaMedia + 
    "<br> A quantidade de camisetas Grandes foi de: " + quantCamisetaGrande;
}

//exercicio 9//
    let xOndeEstou = document.querySelector("#xOndeEstou");
    let yOndeEstou = document.querySelector("#yOndeEstou");
    let xParaIr = document.querySelector("#xParaIr");
    let yParaIr = document.querySelector("#yParaIr");
    let resultadoX = document.querySelector("#resultadoX");
    let resultadoY = document.querySelector("#resultadoY");

function Coordenada(){
    let x1 = Number(xOndeEstou.value);
    let x2 = Number(xParaIr.value);
    let y1 = Number(yOndeEstou.value);
    let y2 = Number(yParaIr.value);

    let calculoX = Math.abs(x1 - x2);
    let calculoY = Math.abs(y1 - y2);

    let calculoXQuadrado = Math.pow(x2 - x1, 2);
    let calculoYQuadrado = Math.pow(y2 - y1, 2);

    let calculoDistancia = Math.sqrt(calculoXQuadrado + calculoYQuadrado).toFixed(2);

    resultadoX.textContent = "Sua distância entre pontos X é igual à: " + calculoX;
    resultadoY.textContent = "Sua distância entre pontos Y é igual à: " + calculoY;
    resultadoDistancia.textContent = "Sua distância entre pontos é igual à: " + calculoDistancia;
    
}

// Exercicio 10 // 
let diaAcidente = document.querySelector("#diaAcidente");
let resultadoDiasAcidente = document.querySelector("#resultadoDiasAcidente");

function calculoAcidente() {
    let dataAcidente = new Date(diaAcidente.value);
    let dataAtual = new Date();

    // Calcula a diferença em milissegundos entre as datas
    let tempoAcidente = (dataAtual - dataAcidente);

    // Converte a diferença para dias
    var diasDoAcidente = Math.floor(tempoAcidente / (1000 * 60 * 60 * 24));

    resultadoDiasAcidente.textContent = "Fazem " + diasDoAcidente + " dias desde o ultimo acidente.";
}

// Exercicio 11 //
    let salarioInicial = document.querySelector("#salarioInicial");
    let resultadoSalario = document.querySelector("#resultadoSalario");
    let resultadoAumentoSalario = document.querySelector("#resultadoAumentoSalario");
    let resultadoSalarioFinal = document.querySelector("#resultadoSalarioFinal");

function calculoSalario() { 
    let salario = Number(salarioInicial.value);

    let calculoAumentoSalario = (salario * 1.15);
    let calculoSalarioFinal = (salario - (salario * 0.08));

    resultadoSalario.textContent = "Seu salário é de: " + salario;
    resultadoAumentoSalario.textContent = "Seu salário com o Aumento é de: " + calculoAumentoSalario;
    resultadoSalarioFinal.textContent = "Seu salário, com o aumento e já descontado o imposto é de: " + calculoSalarioFinal;
}

// exercicio 12 //
    let numeroCentena = document.querySelector("#numeroCentena");
    let resultadoCentenas = document.querySelector("#resultadoCentenas");

    function calculoCentena(){
        let Numeral = Number (numeroCentena.value);

        if (Numeral >= 0 && Numeral <= 999) {
            let centena = Math.floor(Numeral /100);
            let dezena = Math.floor((Numeral % 100)/10);
            let unidade = Numeral % 10;
    
        resultadoCentenas.textContent= "CENTENA = " + centena + " DEZENA = " + dezena + " UNIDADE = " + unidade;

        } else {
            alert("Digite um número inteiro de até três dígitos!");
        }
    }

// exercicio 13 //
    let raioPizza = document.querySelector("#raioPizza");
    let areaPizza = document.querySelector("#areaPizza");

function calculoPizza(){
        let raio = Number(raioPizza.value);

        let CalculoAreaPizza = (3.14 * raio**2);

        areaPizza.textContent = "A área da sua pizza é de: " + CalculoAreaPizza +" cm²";
    }

// exercicio 14 //

    let gastoBar = document.querySelector("#gastoBar");
    let resultadoBar = document.querySelector("#resultadoBar");

function calculoBar() {
        let contaBar = Number(gastoBar.value);
        let valorCarlos = Math.floor(contaBar/3);
        let valorAndre = Math.floor(contaBar/3);
        let valorFelipe = (contaBar - (valorCarlos + valorAndre));

        resultadoBar.innerHTML = "O Total foi: R$ " + contaBar + "<br> Para Carlos ficou: R$ " + valorCarlos +
        "<br> Para Andre ficou: R$ " + valorAndre +
        "<br> Para Felipe ficou: R$ " + valorFelipe.toFixed(2);
    }