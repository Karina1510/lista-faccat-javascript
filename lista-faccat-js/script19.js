let salario_atual= parseFloat(prompt("Digite o seu salário atual: "))
let salario_reajuste=parseFloat(prompt("Digite o seu reasute percentual de salário: "))
let salario_novo

salario_novo=(salario_atual+(salario_atual*(salario_reajuste/100)))

document.getElementById("salarionovo").innerHTML=("Seu salário com o reajuste de  " + salario_reajuste + "% é de " + salario_novo)

