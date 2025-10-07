//fórmula A = (Base Maior + Base Menor) x Altura / 2
function areatrapezio(){
    let base_maior = parseInt(prompt("Digite a base maior do trapézio: "))
    let base_menor = parseInt(prompt("Digite a base menor: "))
    let altura = parseFloat(prompt("Digite a altura: "))
    let area = (base_maior + base_menor) * altura / 2

    alert("Essa é a área do trapézio" + area)
}