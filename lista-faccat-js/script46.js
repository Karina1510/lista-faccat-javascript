let fruta = prompt("Digite o nome da fruta: ")

let kilos = parseFloat(prompt("Digite a qtd de kilo: "))

let morango_5kg = 2.50
let morango_maior5kg = 1.80

let maca_5kg = 2.20
let maca_maior5kg = 1.50

let total = 0

if (fruta === "morango" && kilos <= 5) {
    total = morango_5kg * kilos
    document.getElementById("numero").innerHTML = ("total da compra R$ " + total)

} else if (fruta === "morango" && kilos > 5) {
    total = morango_maior5kg * kilos
    document.getElementById("numero").innerHTML = ("total da compra R$ " + total)
    if (total >= 25) {
        total = total - (total * 10 / 100)
        document.getElementById("numero").innerHTML = ("total da compra R$ " + total)
    }

}
if (fruta === "maca" && kilos <= 5) {
    total = maca_5kg_5kg * kilos
    document.getElementById("numero").innerHTML=("total da compra R$ "+ total)


} else if (fruta === "maca" && kilos > 5) {
    total = maca_maior5kg_maior5kg * kilos
    if (total >= 25.00) {
        total = total - (total * 10 / 100)
        document.getElementById("numero").innerHTML=("total da compra R$ "+ total)
    }
}