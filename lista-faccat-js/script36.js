let qtd_atual = parseInt(prompt("Digite a qtd do estoque: "))

let qtd_maxima = parseInt(prompt("Digite a qtd máxima do estoque: "))

let qtd_minima = parseInt(prompt("Digite a qtd mínima do estoque: "))

let qtd_media = 0

qtd_media= ((qtd_maxima+qtd_minima)/2)

if (qtd_atual >= qtd_media){
    document.getElementById("estoque").innerHTML=("Não efetuar compra")
}

else{
    document.getElementById("estoque").innerHTML=(" efetuar compra")
}
