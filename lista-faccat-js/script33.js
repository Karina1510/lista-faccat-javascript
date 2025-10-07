let genero = prompt("Digite o seu genêro (m masculino e f feminino) : ")
let altura = parseFloat(prompt("Digite a sua alura: "))
let peso_ideal = 0
if (genero = "m"){

    peso_ideal=(72.7*altura)-58
    document.getElementById("imc").innerHTML=("O seu peso ideial é de: " + peso_ideal)

}

else{
    if (genero="f"){

    peso_ideal=(62.1*altura)-44.7
    document.getElementById("imc").innerHTML=("O seu peso ideial é de: " + peso_ideal)
    }

    
   
    


}