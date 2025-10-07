let valor_hora_salario = parseFloat(prompt("Digite o valor da hora paga: "))

let horas_trabalhadas = parseInt(prompt("Digite a qtd de horas trabalhadas: "))
let horas_extras=0
let salario = 0
let salario_final=0
salario = (valor_hora_salario*horas_trabalhadas)


if(horas_trabalhadas > 40){
    salario_final=((horas_trabalhadas-40)*(valor_hora_salario*(50/100)) + salario)
    document.getElementById("salario").innerHTML=("Você tem hora extras e o seu salario final é de R$ "+ salario_final)
}

else{
    salario_final=salario
    document.getElementById("salario").innerHTML=("Você não tem hora extras e o seu salario final é de R$ "+ salario_final)
}
