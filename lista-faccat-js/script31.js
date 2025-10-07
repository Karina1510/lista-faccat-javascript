let hora_inicio = parseInt(prompt("Digite a hora que iniciou a partida: "))

let hora_fim = parseInt(prompt("Digite a hora que terminou a partida: "))

let duracao = 0

if (hora_inicio<hora_fim){
    duracao=(hora_fim-hora_inicio)
    document.getElementById("xadrez").innerHTML=(" a partida terminou no mesmo dia e durou " + duracao + " horas")
}

else{
    duracao=(24 - (hora_fim-hora_inicio))
    document.getElementById("xadrez").innerHTML=(" a partida terminou no dia seguinte e durou " + duracao + " horas")
}

