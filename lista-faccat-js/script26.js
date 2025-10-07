let macas_compradas = parseInt(prompt("Digite a quantidade de macas compradas: "))

let preco = 0

if (macas_compradas <=12){

    preco= macas_compradas*1.3
    document.getElementById("maca").innerHTML=("O valor a pagar é R$ " + preco + " o preço da uni. é de R$ 1.30 ")
}
else{
    preco= macas_compradas*1.0
    document.getElementById("maca").innerHTML=("O valor a pagar é R$ " + preco + " você também teve uma promoção, o preço da uni. é de R$ 1.00 ")
}