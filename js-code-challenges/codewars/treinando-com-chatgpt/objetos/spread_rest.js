// 🧪 Exercício 1 – Clone profundo parcial com spread
// Você recebeu um objeto de usuário, mas precisa fazer uma cópia dele, alterando apenas o nome. Use o spread para isso.

// const usuario = {
//   nome: "João",
//   idade: 30,
//   endereco: {
//     cidade: "São Paulo",
//     estado: "SP"
//   }
// };

// const novoUsuario = { ...usuario, nome: 'Pedro'  }

// console.log(novoUsuario)

// Crie uma cópia de `usuario` com o nome "Pedro".
// // Dica: o spread não faz cópia profunda no objeto aninhado.
// _______________________________________________________________________________________________________________

// 🧪 Exercício 2 – Função com parâmetro rest
// Crie uma função somaTudo que receba uma quantidade variável de números e retorne a soma total.

// function somaTudo(...numeros) {
//     return numeros.reduce((acc, num) => acc + num) }

// // console.log(somaTudo(1, 2, 3, 4))
// console.log(somaTudo(10, 20));
// _______________________________________________________________________________________________________________

// 🧪 Exercício 3 – Separar o primeiro item do restante
// Você tem um array de requisições. Pegue a primeira requisição e coloque o resto em outro array.

// const requisicoes = ["GET /", "POST /login", "GET /users", "DELETE /logout"];

// const [requisicaoGet, ...resto] = requisicoes

// console.log(requisicaoGet);
// console.log(resto);

// Resultado esperado:
// primeiro: "GET /"
// restantes: ["POST /login", "GET /users", "DELETE /logout"]
// _______________________________________________________________________________________________________________

// 🧪 Exercício 4 – Merge de objetos com spread
// Você recebe um configPadrao e um configUsuario, e precisa gerar um configFinal onde o usuário pode sobrescrever valores.

// const configPadrao = {
//   modo: "light",
//   idioma: "pt-BR",
//   logado: false
// };

// const configUsuario = {
//   modo: "dark",
//   logado: true
// };

// const configFinal = {
//     ...configPadrao,
//     ...configUsuario
// };

// console.log(configFinal)

// Use spread para gerar o configFinal
// Resultado esperado:
// { modo: "dark", idioma: "pt-BR", logado: true }
// _______________________________________________________________________________________________________________

// 🧪 Exercício 5 – Rest em destructuring
// Você recebe um objeto de dados de um banco e quer extrair apenas o campo senha, armazenando o resto em outro objeto.


// const dados = {
//   id: 1,
//   nome: "Alice",
//   email: "alice@email.com",
//   senha: "123456"
// };

// const {senha, ...resto} = dados;

// console.log(`Senha: ${senha}`);
// console.log(dados);

// Resultado esperado:
// senha: "123456"
// restantes: { id: 1, nome: "Alice", email: "alice@email.com" }

// _______________________________________________________________________________________________________________
// 🧪 Exercício 6 – Spread para concatenar arrays de dados
// Imagine que você está lidando com duas páginas de resultados vindas de uma API paginada. Use spread para juntar tudo.

const pagina1 = [{ id: 1 }, { id: 2 }];
const pagina2 = [{ id: 3 }, { id: 4 }];

const organizaTudo = [
    ...pagina1,
    ...pagina2
];

console.log(organizaTudo)


// Resultado esperado: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]