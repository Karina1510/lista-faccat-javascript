let valo1 = parseInt(prompt("Digite o 1°número: "))

let valo2 = parseInt(prompt("Digite o 2°número: "))

let valo3 = parseInt(prompt("Digite o 3°número: "))

if (valo1 > valo2 && valo1>valo2)  {
    document.getElementById("numero").innerHTML = ("seu número 1 é o maior de todos")

}
else {
    if (valo2 > valo1 && valo2>valo3) {
        document.getElementById("numero").innerHTML = ("o número 2 é o maior de todos")
    }

else {
    document.getElementById("numero").innerHTML = ("o número 3 é o maior de todos")
}
}