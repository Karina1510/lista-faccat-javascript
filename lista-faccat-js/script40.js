let valor1 = parseInt(prompt("Digite o 1°número: "));
let valor2 = parseInt(prompt("Digite o 2°número: "));
let valor3 = parseInt(prompt("Digite o 3°número: "));


let a, b, c; 

if (valor1 < valor2 && valor2 < valor3) {
    a = valor1; b = valor2; c = valor3; 
} else if (valor2 < valor3 && valor3 < valor1) {
    a = valor2; b = valor3; c = valor1; 
} else if (valor3 < valor2 && valor2 < valor1) {
    a = valor3; b = valor2; c = valor1; 
} else if (valor2 < valor1 && valor1 < valor3) {  
    a = valor2; b = valor1; c = valor3; 
} else if (valor1 < valor3 && valor3 < valor2) {
    a = valor1; b = valor3; c = valor2; 
} else if (valor3 < valor1 && valor1 < valor2) {
    a = valor3; b = valor1; c = valor2; 
}


document.getElementById("numero").innerHTML = 'Ordem crescente:' + a +b + c ;