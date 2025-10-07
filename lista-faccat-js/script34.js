let salario_fixo = parseFloat(prompt("Digite o seu salário fixo: "))

let total_vendas = parseFloat(prompt("Digite o total do valor das vendas feitas: "))
let comissao_5 = 0
let comissao_3 = 0
let comissao_final = 0
let vendas_amais = 0

if (total_vendas <= 1.500){
    comissao_3 = (total_vendas*(3/100))
    
    comissao_final=salario_fixo+comissao_3
    document.getElementById("comissao").innerHTML=("O valor da sua comissão com salario é de 3% e total é de" + comissao_final)
}
else{
    comissao_3 = (1.500*(3/100))
    vendas_amais = (total_vendas-1500)
    comissao_final=salario_fixo+comissao_3+(vendas_amais*(comissao_5/100))

    document.getElementById("comissao").innerHTML=("O valor da sua comissão com salario é de 3% e 5% e total é de" + comissao_final)
}
