let valo1 = parseInt(prompt("Digite o 1°número: "))

let valo2 = parseInt(prompt("Digite o 2°número: "))

let valo3 = parseInt(prompt("Digite o 3°número: "))

let soma = 0

if (valo1 < valo2 && valo1 <valo3)   {
    soma= valo2 + valo3
    document.getElementById("numero").innerHTML = ("seus maiores números são 2 e 3 e a soma é " + soma)

}
else {
    if (valo2 < valo1 && valo2 < valo3) {
        soma= valo1 + valo3
        document.getElementById("numero").innerHTML = ("seus maiores números são 1 e 3 e a soma é "+ soma )
    }

else {
    soma= valo1 + valo2
        document.getElementById("numero").innerHTML = ("seus maiores números são 1 e 2 e a soma é "+ soma )
}
}