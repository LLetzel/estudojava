/*
document.getElementById("texto").innerHTML="meu primeiro texto <b>JS</b>!";
//<b> </b> deixar conteúdo em negrito

alert(5+5)

console.log("oi isso é um console.log")

let a,b,c;
a = 5;
b = 6;
c = 7;

function minhafuncao(){
    document.write("<u>Oi escrito com document.write</u>");
}
*/

// var a = 1
// var b = 5
// var c = a + b
// console.log(c);

/*
No javascrip temos 3 palavras-chaves para declarar variáveis:
-> var
-> let
-> const
*/
/*
// DECLARAÇÃO DE VARIÁVEIS
var nome, sobrenome, nomeCompleto;

//ATRIBUIÇÃO DE VALORES
nome = "Dimitri";
sobrenome = "Teixeira";
idade = 30;
nomeCompleto = nome + " " + sobrenome;

pessoa = idade + nome

document.getElementById("texto").innerHTML = pessoa;
*/
/*
var idade = 18;
var eleitor = (idade<18) ? "Não, não eleitor": "Sim, Eleitor"

alert("a resposta é: " + eleitor + " a idade dele é de " + idade); 
*/
/*
function soma(valor1,valor2){
    return valor1 + valor2;
}
*
document.getElementById("texto").innerHTML = soma(10,24);
*/

// function realparadolar(real, cotacaoDolar){
//     return real / cotacaoDolar;
// }

// var valorReal = 10;
// var cotacao = 4.95;

// var total = realparadolar(valorReal, cotacao);

// alert("O valor em real é R$: " + valorReal + " o valor em dolar é U$: " + total);

// function alertaHello() {
//     alert("Hello word");
// }

// alertaHello();

// let carro = {
//     marca:"ford",
//     modelo: "ka",
//     ano:2015,
//     placa: "ABC-1234",
//     buzina: function () {alert('Biiiiiii')},
//     completo: function() {
//         return "A marca é " + this.marca + " e o modelo é: " + this.modelo;
//     }
// };

// console.log(carro.completo());

function eventoClique() {
    // alert("acionou um evento de clique");
    document.body.style.backgroundColor = "yellow";
}

function eventoDblClick() {
    alert("Evento de clique duplo");
}

function viraVermelho() {
    let div = document.getElementById("teste"); 
    div.style.backgroundColor = "red";
}

function viraAzul() {
    let div = document.getElementById("teste");
    div.style.backgroundColor = "blue"
}
