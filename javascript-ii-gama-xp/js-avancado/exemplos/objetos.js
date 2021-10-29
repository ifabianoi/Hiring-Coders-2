const pessoa = {
    nome: "Fabiano",
    idade: 30,
    cidade: "Goiânia"
}

console.log("Notação de ponto (pessoa.nome): "+ pessoa.nome);

console.log("Notação de colchetes (pessoa['idade']) : " + pessoa['idade']);

const { nome, idade, cidade } = pessoa;

console.log("");
console.log("Como desestruturar Objetos");
console.log("nome: " + nome);
console.log("idade: " + idade);
console.log("cidade: " + cidade);