// Exercício 1 – Dobro dos números
// Crie um novo array onde cada número seja o dobro do original.

// const numeros = [1, 2, 3, 4];

// Resultado esperado: [2, 4, 6, 8]

// const numeros = [1, 2, 3, 4];

// const duplicaNumeros = numeros.map(numero => numero * 2);
// console.log(duplicaNumeros);

// // _______________________________________________________________________________________

// // Exercício 2 – Transformar em string
// // Transforme os números em strings.

// // const numeros = [10, 20, 30];

// // Resultado esperado: ["10", "20", "30"]

// const numbers = [10, 20, 30];

// const numbersToString = numbers.map( number => number.toString());

// console.log(numbersToString);
// // _______________________________________________________________________________________

// // 🧪 Exercício 3 – Primeiras letras maiúsculas
// // Retorne um novo array com a primeira letra em maiúsculo de cada palavra.

// // const palavras = ["pedro", "henrique", "alves"];

// // Resultado esperado: ["P", "H", "A"]

// const palavras = ["pedro", "henrique", "alves"];

// const letras = palavras.map(palavra => palavra.trim().split(''));

// const letraMaiuscula = letras.map( maiuscula => maiuscula.join(' ').charAt(0).toUpperCase())

// console.log(letraMaiuscula);
// // _______________________________________________________________________________________


// // Exercício 4 – Adicionar índice no texto
// // Adicione o índice ao final de cada nome.

// // const nomes = ["Ana", "Bruno", "Carlos"];

// // Resultado esperado: ["Ana-0", "Bruno-1", "Carlos-2"]

// const nomes = ["Ana", "Bruno", "Carlos"];

// const nomesIndice = nomes.map((nome, index) => {
//     return `${nome}-${index}`;
// })

// console.log(nomesIndice)
// _______________________________________________________________________________________

// Exercício 5 – Nome completo formatado
// Dado um array de objetos, transforme em nomes completos.

// const pessoas = [
//   { nome: "Pedro", sobrenome: "Henrique" },
//   { nome: "Maria", sobrenome: "Silva" }
// ];

// Resultado esperado: ["Pedro Henrique", "Maria Silva"]

// const pessoas = [
//   { nome: "Pedro", sobrenome: "Henrique" },
//   { nome: "Maria", sobrenome: "Silva" }
// ];

// const pessoa = pessoas.map( dados => {
//     const nomePessoa = dados.nome;
//     const sobrenomePessoa = dados.sobrenome

//     return nomePessoa + ' ' + sobrenomePessoa;
// });

// console.log(pessoa);

// // _______________________________________________________________________________________
// // Exercício 6 – Remover espaços e colocar em maiúsculo
// // Receba um array de strings bagunçadas, limpe com trim() e transforme em letras maiúsculas.

// // const sujo = ["  pedro ", "henrique  ", "  dev"];

// // // Resultado esperado: ["PEDRO", "HENRIQUE", "DEV"]

// const sujo = ["  pedro ", "henrique  ", "  dev"];

// const formatando = sujo.map( limpando => limpando.trim().toUpperCase());

// console.log(formatando);
// // _______________________________________________________________________________________
// // Exercício 7 – Array de siglas
// // Dado um array de frases, retorne as iniciais de cada palavra em maiúsculas, formando uma sigla.

// // const frases = ["programador backend", "interface de programação"];

// // Resultado esperado: ["PB", "IDP"]

// const frases = ["programador backend", "interface de programação"];

// const siglas = frases.map(frase => 
//     frase.split(' ')
//     .map(palavra => palavra.charAt(0).toUpperCase())
//     .join('')
// );

// console.log(siglas)

// // _______________________________________________________________________________________
// // 🧪 Exercício 8 – Converter em leet speak
// // Use este objeto para converter as letras de uma palavra para leet speak:

const LEET = {
  a: "4",
  e: "3",
  i: "1",
  o: "0",
  s: "5"
};

const palavra = "seios";

const letras = palavra.split('')

const converter = letras.map(letra => {
    return LEET[letra] || letra
})

const resultado = converter.join('')

console.log(resultado)

// Resultado esperado: "53105"
// _______________________________________________________________________________________