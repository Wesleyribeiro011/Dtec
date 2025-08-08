const resultado = document.querySelector('.resultado');

function registrarProduto(event) {
  const card = event.currentTarget;
  const nome = card.querySelector('h3').textContent;
  const descricao = card.querySelector('p').textContent;
  const valor = card.querySelector('span').textContent;
  resultado.innerHTML += `<p>${nome}, ${descricao}, ${valor}</p>`;
}

document.querySelectorAll('.produto-card').forEach(card =>
  card.addEventListener('click', registrarProduto)
);