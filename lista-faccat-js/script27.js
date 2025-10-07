let nota1 = parseFloat(prompt("Digite a sua primeira nota: "))

let nota2 = parseFloat(prompt("Digite a sua segunda nota: "))

media = (nota1+nota2)/2

if (media < 6){
    document.getElementById("media").innerHTML=("Infelizmente, reprovado,  sua nota é "+ media )
}
else{
    document.getElementById("media").innerHTML=("Aprovado, parabéns, sua nota é "+ media)
}