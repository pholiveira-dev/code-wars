// 📌 Exercício 1 – Criar um objeto de pessoa
// Crie um objeto que represente uma pessoa com as propriedades: nome, idade e cidade.

const pessoa = {
    nome: 'Cecília', 
    idade: 22, 
    cidade: 'Sobradinho-DF'
}

// 📌 Exercício 2 – Acessar propriedades
// Usando o objeto criado, exiba no console o nome e a cidade da pessoa.

// 📌 Exercício 3 – Adicionar uma nova propriedade
// Adicione a propriedade "profissão" ao objeto da pessoa e atribua um valor.

pessoa.profissao = 'Estudante';

// 📌 Exercício 4 – Atualizar valores
// Altere a idade da pessoa para um novo valor.

pessoa.idade = 23;

// 📌 Exercício 5 – Remover uma propriedade
// Remova a propriedade "cidade" do objeto da pessoa.

delete pessoa.cidade;

// 📌 Exercício 6 – Verificar se uma propriedade existe
// Verifique se a propriedade "nome" existe dentro do objeto da pessoa.

// 📌 Exercício 7 – Criar um array de objetos
// Crie um array com 3 objetos, cada um representando um livro com: título, autor e ano.

const livros = [
    {titulo: 'O nome do vento', autor: 'Patrick Rothfus', ano: 2003},
    {titulo: 'Guerra dos Tronos', autor: 'George R. R. Martin', ano: 2000},
    {titulo: 'O Senhor dos Aneis', autor: 'J.R.R Tolkien', ano: 2003},
]

// 📌 Exercício 8 – Acessar objetos dentro de um array
// Exiba no console o título do segundo livro do array criado.

// 📌 Exercício 9 – Somar valores dentro de objetos
// Crie um objeto que represente uma compra com 3 produtos, cada um com preço.
// Some os preços e exiba o valor total da compra.

const compras = {
    produto1: {nome: 'Peta', preco: 8.99},
    produto2: {nome: 'Picanha', preco: 55.00},
    produto3: {nome: 'Coxinha da asa', preco: 12.99}
}

const total = Object.values(compras).reduce((acc, item) => acc + item.preco, 0);

// 📌 Exercício 10 – Criar uma função que recebe um objeto
// Crie uma função que receba um objeto de usuário (com nome e email) e exiba no console:
// "Usuário: [nome], Email: [email]"

function mensagemUsuario(objeto) {
    return `Usuário: ${objeto.nome}, Email: ${objeto.email}`
}

const usuario = {
    nome: 'Pedro',
    email: 'pedrohen1001@hotmail.com'
}

// 📌 Exercício 11 – Listar todas as chaves de um objeto
// Usando o objeto "pessoa", exiba no console todas as chaves dele.

const todasChaves = Object.keys(pessoa);

// 📌 Exercício 12 – Listar todos os valores de um objeto
// Exiba no console todos os valores do objeto "pessoa".

const todosValores = Object.values(pessoa);

// 📌 Exercício 13 – Criar um array de usuários e exibir nome e email de todos
// Crie um array com 3 objetos (usuários com nome e email) e use um forEach para exibir as informações.

const usuarios = [
    { nome: 'Ana', email: 'ana@email.com' },
    { nome: 'Carlos', email: 'carlos@email.com' },
    { nome: 'Marina', email: 'marina@email.com' }
];

const informacoes = usuarios.forEach((us) => {
    return Object.values(us.nome)
}
)
console.log(informacoes)
// 📌 Exercício 14 – Criar uma função que retorna o valor de uma chave específica
// Crie uma função que recebe um objeto e uma chave, e retorna o valor dessa chave.


// 📌 Exercício 15 – Filtrar objetos dentro de um array
// Use o array "livros" e filtre apenas os livros lançados após 2001.


// 📌 Exercício 16 – Contar quantas propriedades um objeto possui
// Mostre no console quantas chaves o objeto "pessoa" tem.


// 📌 Exercício 17 – Verificar se um valor existe dentro de um objeto
// Verifique se existe o valor 'Pedro' dentro do objeto "usuario".


// 📌 Exercício 18 – Adicionar um produto novo à compra (objeto)
// Adicione o produto4 com nome e preço ao objeto "compras".


// 📌 Exercício 19 – Calcular média de preços dos produtos
// Calcule a média dos preços dos produtos dentro do objeto "compras".


// 📌 Exercício 20 – Transformar objeto em array de pares chave-valor
// Use Object.entries() para transformar o objeto "usuario" em um array de pares [chave, valor].
