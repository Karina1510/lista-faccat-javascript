let numero1 = parseInt(prompt("Digite um número: "))

let numero2 = parseInt(prompt("Digite outro número: "))

if (numero1 > numero2){
    document.getElementById("numero").innerHTML=(numero2+" "+numero1)
}
else{
     document.getElementById("numero").innerHTML=(numero1+" "+numero2)
}
