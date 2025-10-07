
let numero = parseInt(prompt("Digite um número: "))

if (numero > 0) {
    document.getElementById("numero").innerHTML = ("seu número é positivo")

}
else {
    if (numero < 0) {
        document.getElementById("numero").innerHTML = ("seu número é negativo")
    }

else {
    document.getElementById("numero").innerHTML = ("seu número é 0")
}
}