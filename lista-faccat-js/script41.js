let lado1 = parseInt(prompt("Digite o 1°lado do triângulo: "));
let lado2 = parseInt(prompt("Digite o 2°lado do triângulo: "));
let lado3 = parseInt(prompt("Digite o 3°lado do triângulo: "));


if (lado1+lado2 >lado3 || lado1+lado2 >lado2 && lado2 + lado3 > lado1){

    document.getElementById("numero").innerHTML=('é um triângulo')
}
else{
    document.getElementById("numero").innerHTML=('não é um triângulo')
}