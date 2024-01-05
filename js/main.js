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

// function eventoClique() {
//     // alert("acionou um evento de clique");
//     document.body.style.backgroundColor = "yellow";
// }

// function eventoDblClick() {
//     alert("Evento de clique duplo");
// }

// function viraVermelho() {
//     let div = document.getElementById("teste"); 
//     div.style.backgroundColor = "red";
// }

// function viraAzul() {
//     let div = document.getElementById("teste");
//     div.style.backgroundColor = "blue"
// }

// const lista = [
//     "arroz", 
//     "feijão",
//     "macarrão",
//     "leite"
//     ];

// var interruptor = "on";
// if (interruptor == "on"){
//     alert("A lâmpada está ligada!");
// } else {
//     alert("A lâmpada está desligada!");
// } 

// var hora = new Date().getHours();

// if (hora < 12) {
//     alert("bom dia");
// } else if (hora < 18) {
//     alert('boa tarde!');
// } else {
//     alert("Boa noite");
// }

// function verificar() {
//     let nome = document.getElementById('nome').Value;

//     if(nome == "" || nome == null) {
//         let p = document.getElementById("teste")
//         p.innerHTML = "O campo não pode ser vazio";
//         p.style.color = "red";

//     } else {
//         let p = document.getElementById("teste")
//         p.innerHTML = "Parabéns! Tudo certo";
//         p.style.color = "green";
//     }
// }
/*
switch (expressao) {
    case valor1:
      // código a ser executado se expressao for igual a valor1
      break;
    case valor2:
      // código a ser executado se expressao for igual a valor2
      break;
    // ...
    default:
      // código a ser executado se nenhum dos casos anteriores for correspondido
  }
  

  let diaDaSemana = 3;
let nomeDoDia;

switch (diaDaSemana) {
  case 1:
    nomeDoDia = "Segunda-feira";
    break;
  case 2:
    nomeDoDia = "Terça-feira";
    break;
  case 3:
    nomeDoDia = "Quarta-feira";
    break;
  case 4:
    nomeDoDia = "Quinta-feira";
    break;
  case 5:
    nomeDoDia = "Sexta-feira";
    break;
  case 6:
    nomeDoDia = "Sábado";
    break;
  case 7:
    nomeDoDia = "Domingo";
    break;
  default:
    nomeDoDia = "Dia inválido";
}

console.log("Hoje é " + nomeDoDia);
*/

// for (let i = 0; i < 5; i++) {
//     console.log("O valor de i é: " + i);
//   }
  
for (let i=1950; i <= 2024; i++) {
    document.getElementById("ano").innerHTML += "<option value='" + i + "'>" + i + "</option>";
}
  

