let preco_carro= parseFloat(prompt("Digite o preço do carro: "))

let porcentagem_distribuidor = 28
let porcentagem_impostos = 45
let valor_final=0

valor_final=(preco_carro+(preco_carro*(porcentagem_distribuidor/100)+(preco_carro*(porcentagem_impostos/100))))

document.getElementById("carro").innerHTML=("O valor final do carro é" + valor_final )

