let nome = prompt("Digite seu nome completo:");

document.body.innerHTML += "<p>Seu nome é: " + nome + "</p>";
document.body.innerHTML += "<p>Quantidade de letras (incluindo espaços): " + nome.length + "</p>";
document.body.innerHTML += "<p>Segunda letra: " + nome[1] + "</p>";
document.body.innerHTML += "<p>Primeira letra 'a': posição " + nome.toLowerCase().indexOf("a") + "</p>";
document.body.innerHTML += "<p>Última letra 'a': posição " + nome.toLowerCase().lastIndexOf("a") + "</p>";
document.body.innerHTML += "<p>Últimas 3 letras: " + nome.slice(-3) + "</p>";
document.body.innerHTML += "<p>Palavras do nome: " + nome.split(" ") + "</p>";
document.body.innerHTML += "<p>Nome em MAIÚSCULAS: " + nome.toUpperCase() + "</p>";
document.body.innerHTML += "<p>Nome em minúsculas: " + nome.toLowerCase() + "</p>";