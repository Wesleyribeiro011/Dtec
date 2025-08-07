const nome1 = "Maria"
const sobrenome1 = "Xavier"
const idade = 50

const pessoa1 = {
    nome: "Maria",
    sobrenome: "Xavier",
    idade: 50
}

console.log(pessoa1.nome)
console.log(pessoa1.sobrenome)
console.log(pessoa1.idade)

function criarPessoa(nome, sobrenome, idade){
    return{
        nome,
        sobrenome,
        idade
    };
}

const pessoa2 = criarPessoa ("josé", "Antonio", 40)
console.log(pessoa2.nome)

function criarCachorro (nome, sono, fome){
    return{
        nome,
        sono,
        fome,
    
    latir(){
        console.log("Au Au")
    },
    dormir(sono){
        if(this.sono){
            this.sono = false
            }
        }
    }
}

const cachorro1 = criarCachorro ("bob", true, 10)
cachorro1.latir()