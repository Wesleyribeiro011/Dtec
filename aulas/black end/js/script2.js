let num = 9.54
let num2 = 9.52
let num3 = 9.35
let num4 = 9.62

let resultado = Math.floor(num)
console.log (resultado)

resultado = Math.round(num3)
console.log(resultado)
resultado = Math.round(num4)
console.log(resultado)

let maior = Math.max (1,3,3000,-3,3.62)
console.log(maior)

let menor = Math.min (1,3,3000,-3,3.62)
console.log(menor)

let aleatorio = Math.random()
console.log(aleatorio)

let min = 1;
let max = 1000;

let nAleatorio = Math.random() * (max - min) + min;
console.log(Math.round(nAleatorio))