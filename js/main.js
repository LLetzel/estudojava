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
var idade = 18;
var eleitor = (idade<18) ? "Não, não eleitor": "Sim, Eleitor"

alert("a resposta é: " + eleitor + " a idade dele é de " + idade); 