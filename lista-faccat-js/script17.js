let anos = parseInt(prompt("Digite sua idade em anos: "))
let meses = parseInt(prompt("Digite sua idade em meses desde o último aniversário: "))
let dias_restantes = parseInt(prompt("Digite dias restantes desde o último aniversário: "))
let idade_em_dias = 0

    idade = ((anos*365) + (meses*30) + dias_restantes)
    

document.getElementById("idadedias").innerHTML= ("Sua idade em dias é " + idade);
