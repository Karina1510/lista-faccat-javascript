let timea = prompt(" nome time a: ")
let timeb = prompt(" nome time b: ")

let pontuacaotimea=parseInt(prompt("digite a qtd de gols da equipe "+ timea+" : "))

let pontuacaotimeb=parseInt(prompt("digite a qtd de gols da equipe "+ timeb+" : "))

if (pontuacaotimea > pontuacaotimeb){
    document.getElementById("numero").innerHTML=("o time" + timea + " ganhou com a pontuação "+ " "+ pontuacaotimea)
}

else if (pontuacaotimeb > pontuacaotimea){
    document.getElementById("numero").innerHTML=("o time" + timeb + " ganhou com a pontuação "+ " "+ pontuacaotimeb)
    
}
else{
    document.getElementById("numero").innerHTML=("Deu empate")
}