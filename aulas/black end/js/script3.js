const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero
texto.innerHTML += `<p> Sua raiz quadrada: ${numero **0.5}</p>`
texto.innerHTML += `<p> Se é inteiro: ${Number.isInteger(numero)}</p>`
texto.innerHTML += `<p> Se é um NaN (valor inválido):${Number.isNaN(numero)}</p>`
texto.innerHTML += `<p> Seu arredondamento para baixo):${Math.floor(numero)}</p>`
texto.innerHTML += `<p> Arredondamento para cima:${Math.ceil(numero)}</p>`
texto.innerHTML += `<p> Valor com duas casas decimais:${numero.toFixed(2)}</p>`