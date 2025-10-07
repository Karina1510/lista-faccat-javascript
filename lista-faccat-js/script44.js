let combustivel = prompt("Digite o nome do combustivel: ")

let litros = parseFloat(prompt("Digite a qtd de litros: "))

valor_gasolina = 3.30

valor_alcool = 2.90
valor_final = 0

if (combustivel === "gasolina") {


    if (litros <= 20) {
        valor_final = (litros * valor_gasolina) - (litros * (4 / 100 * valor_gasolina))
        document.getElementById("numero").innerHTML = ("o valor final é R$ " + valor_final)

    } else {
        valor_final = (litros * valor_gasolina) - (litros * (6 / 100 * valor_gasolina))
        document.getElementById("numero").innerHTML = ("o valor final é R$ " + valor_final)
    }

}
else if (combustivel === "alcool") {
    if (litros <= 20) {
        valor_final = (litros * valor_alcool) - (litros * (3 / 100 * valor_alcool))
        document.getElementById("numero").innerHTML = ("o valor final é R$ " + valor_final)
    } else {
    valor_final = (litros * valor_alcool) - (litros * (5 / 100 * valor_alcool))
    document.getElementById("numero").innerHTML = ("o valor final é R$ " + valor_final)
}



} 

