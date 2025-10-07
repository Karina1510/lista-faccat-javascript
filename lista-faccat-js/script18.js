let total_eleitores = parseInt(prompt("Digite o total de eleitores da cidade x: "))

let votos_brancos = parseInt(prompt("Digite o total de votos brancos da cidade x: "))

let votos_nulos = parseInt(prompt("Digite o total de votos nulos da cidade x: "))

let votos_validos = parseInt(prompt("Digite o total de votos validos na cidade x: "))
let porcentagembrancos
let porcentagemnulos
let porcentagemvalidos
let percentual



 
    porcentagembrancos = ("O percentual de votos brancos da cidade x é" + (votos_brancos*(total_eleitores/100)) + "%")
    
    porcentagemnulos = ("O percentual de votos nulos da cidade x é" + (votos_nulos*(total_eleitores/100)) + "%")

    porcentagemvalidos = ("O percentual de votos validos da cidade x é" + (votos_validos*(total_eleitores/100)) + "%")

    


document.getElementById("eleicao").innerHTML = porcentagembrancos
document.getElementById("eleicao2").innerHTML = porcentagemnulos
document.getElementById("eleicao3").innerHTML = porcentagemvalidos