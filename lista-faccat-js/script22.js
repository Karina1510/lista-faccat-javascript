let graus_faherenheit= parseInt(prompt("Digite a temperatura em fahereit e descubra em celsius: "))

let faherenheit_para_celsius = 0
faherenheit_para_celsius = (graus_faherenheit-32)/1,8

document.getElementById("temperatura").innerHTML=("Sua temperatura em graus celsius "+ faherenheit_para_celsius + "°")