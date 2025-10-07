let mulher_1 = parseInt(prompt("Digite a idade da mulher1 : "))
let mulher_2 = parseInt(prompt("Digite a idade da mulher2 : "))

let homem_1 = parseInt(prompt("Digite a idade da homem 1 : "))
let homem_2 = parseInt(prompt("Digite a idade da homem 2 : "))
let soma = 0

if(mulher_1<mulher_2 && homem_1>homem_2){
    soma=mulher_1+homem_1
    document.getElementById("numero").innerHTML=("a soma da idade da mulher mais nova com a do homem mais velho " + soma )
}
else if(mulher_2<mulher_1 && homem_2>homem_1){
    soma=mulher_2+homem_2
    document.getElementById("numero").innerHTML=("a soma da idade da mulher mais nova com a do homem mais velho " + soma )
}
else if(mulher_1<mulher_2 && homem_2>homem_1){
    soma=mulher_1+homem_2
document.getElementById("numero").innerHTML=("a soma da idade da mulher mais nova com a do homem mais velho " + soma )}

else if(mulher_2<mulher_1 && homem_1>homem_2){
    soma=mulher_2+homem_1
document.getElementById("numero").innerHTML=("a soma da idade da mulher mais nova com a do homem mais velho " + soma )}

