let ano_nascimento = parseInt(prompt("Digite o seu ano de nascimento: "))
let ano_atual = parseInt(prompt("Digite o ano atual: "))

let idade=0

idade= (ano_atual - ano_nascimento)

if (idade => 16){
    document.getElementById("votacao").innerHTML=("Você tem "+ idade+ " Pode votar")
}
else{
    document.getElementById("votacao").innerHTML=("Você tem "+ idade+ " não Pode votar")
}