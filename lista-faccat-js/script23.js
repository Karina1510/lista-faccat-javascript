let nota1 = parseInt(prompt("Digite sua nota1: "))

let nota2 = parseInt(prompt("Digite sua nota2: "))

let nota3 = parseInt(prompt("Digite sua nota3: "))

let mediafinal = 0

mediafinal = (nota1*0.2)+(nota2*0.3)+(nota3*0.5)/10

document.getElementById("media").innerHTML=("Sua nota final é " + mediafinal)