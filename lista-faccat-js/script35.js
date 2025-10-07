let numero_conta = parseInt(prompt("Digite o numero da sua conta: "))

let saldo = parseFloat(prompt("Digite o saldo da sua conta: "))

let debito = parseFloat(prompt("Digite o débito da sua conta: "))

let credito = parseFloat(prompt("Digite o crédito da sua conta: "))

let saldo_atual = (saldo-debito+credito)

if (saldo_atual >= 0){
    document.getElementById("saldo").innerHTML=("Saldo positivo")
}
else{
    document.getElementById("saldo").innerHTML=("Saldo negativo")
}

