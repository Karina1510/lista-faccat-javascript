let salario_fixo=parseFloat(prompt("Digite o seu salário fixo: "))
let qtd_carros_vendidos=parseInt(prompt("Digite a quantidade de carros vendidos"))
let comissao_por_carro=parseInt(prompt("Digite a porcentagem por carro: "))
let valor_total=parseFloat(prompt("Digite o valor total de vendas: "))
let salario_final=0
let porcentagem_no_valor_vendas=5
let porcentagens=0

porcentagens=(qtd_carros_vendidos*(comissao_por_carro/100)) + (valor_total*(porcentagem_no_valor_vendas/100))

salario_final= salario_fixo + porcentagens

document.getElementById("vendas").innerHTML=("Seu salario final é de R$"+ salario_final)