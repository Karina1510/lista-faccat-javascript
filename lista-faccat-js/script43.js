let valo1 = parseInt(prompt("Digite o 1°número: "))

let valo2 = parseInt(prompt("Digite o 2°número: "))


if (valo1 == valo2 )  {
    document.getElementById("numero").innerHTML = ("os numeros são iguais")

}
else {
    if (valo1 > valo2 ) {
        document.getElementById("numero").innerHTML = ("o número 1 é maior do que o 2")
    }

else {
    document.getElementById("numero").innerHTML = ("o número 2 é maior que o 1")
}
}