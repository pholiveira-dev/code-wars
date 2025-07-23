// // ########## EXERCÍCIOS SOBRE FILTER ##########

// // 🧪 Exercício 1 – Filtrar números pares
// // Dado um array de números, retorne apenas os números pares.

// const numeros1 = [1, 2, 3, 4, 5, 6];

// // Sua lógica aqui...

// const numerosPares = numeros1.filter(num => num % 2 === 0);

// console.log("Exercício 1:", numerosPares);


// // 🧪 Exercício 2 – Filtrar palavras curtas
// // Filtrar palavras com 4 letras ou menos.

// const palavras2 = ["sol", "chuva", "nuvem", "ar", "vento"];

// // Sua lógica aqui...

// const palavrasCurtas = palavras2.filter(palavra => palavra.length <= 4);
// console.log("Exercício 2:", palavrasCurtas);


// // 🧪 Exercício 3 – Filtrar usuários ativos
// // Filtrar apenas os usuários com ativo: true.

// const usuarios3 = [
//   { nome: "Pedro", ativo: true },
//   { nome: "Ana", ativo: false },
//   { nome: "João", ativo: true },
//   { nome: "Aline", ativo: true},
// ];

// // Sua lógica aqui...

// const usuariosAtivos = usuarios3.filter( usuario => usuario.ativo === true);
// console.log("Exercício 3:", usuariosAtivos);

// // 🧪 Exercício 4 – Filtrar números maiores que a média
// // Filtrar os números maiores que a média do array.

// const numeros4 = [10, 20, 30, 40, 50];

// const mediaNumeros = numeros4.reduce((num, acc) => (acc += num)) / numeros4.length;

// const numMaiorMedia = numeros4.filter(media => media > mediaNumeros);

// // Sua lógica aqui...
// console.log("Exercício 4:", numMaiorMedia);


// // 🧪 Exercício 5 – Filtrar palavras que começam com "a" ou "A"

// const palavras5 = ["Abacate", "banana", "amora", "Laranja", "Ameixa"];

// // Sua lógica aqui...

// const primeiraLetra = palavras5.filter( palavra => palavra.charAt(0) === 'a' || palavra.charAt(0) === 'A');
// console.log("Exercício 5:",primeiraLetra);


// // 🧪 Exercício 6 – Filtrar números únicos (sem repetições)
// // Dado um array com números repetidos, filtre apenas os que aparecem uma única vez.

// const numeros6 = [1, 2, 2, 3, 4, 4, 5];

// // Sua lógica aqui...

// const semRepeticao = numeros6.filter((num, _, arr) => {
//     return arr.indexOf(num) === arr.lastIndexOf(num);
// })
// console.log("Exercício 6:", semRepeticao /* resultado */);

// // ########## EXERCÍCIOS SOBRE REDUCE ##########

// // 🧮 Exercício 1 – Soma total dos números
// // Some todos os valores do array

// const numeros7 = [1, 2, 3, 4, 5];

// // Sua lógica aqui...

// const somaValores = numeros7.reduce((acc, num) => acc += num, 0)
// console.log("Exercício 1:", somaValores);

// // 🧮 Exercício 2 – Produto de todos os números
// // Multiplique todos os valores do array

// const numeros8 = [2, 3, 4];

// const multiplique = numeros8.reduce((acc, num) => acc * num)

// // Sua lógica aqui...
// console.log("Exercício 2:", multiplique);

// // 🧮 Exercício 3 – Concatenar palavras em uma frase
// // Junte todas as palavras formando uma frase

// const palavras9 = ["A", "enfermagem", "transforma", "vidas"];

// // Sua lógica aqui...

// const juntaFrase = palavras9.reduce((frase, palavra) => frase + " " + palavra);
// console.log("Exercício 3:", juntaFrase);


// // 🧮 Exercício 4 – Contar quantas vezes cada número aparece
// // Retorne um objeto com a contagem de cada número

// const numeros10 = [1, 2, 2, 3, 3, 3];

// // Sua lógica aqui...

// const numUnicos = numeros10.reduce((acc, num) => {
//   acc[num] = (acc[num] || 0) + 1;
//   return acc
// }, {})

// console.log("Exercício 4:", numUnicos);


// // 🧮 Exercício 5 – Soma dos valores de um array de objetos
// // Somar os valores da chave "horas" de cada item

// const estagios5 = [
//   { aluno: "Pedro", horas: 6 },
//   { aluno: "Ana", horas: 8 },
//   { aluno: "João", horas: 4 },
// ];

// // Sua lógica aqui...
// const horasEstagio = estagios5.reduce((acumulador, horas) => {
//   return acumulador += horas.horas;
// }, 0)
// console.log("Exercício 5:", horasEstagio);


// // 🧮 Exercício 6 – Encontrar o maior número do array
// // Use reduce para retornar o maior valor

// // const numeros11 = [10, 25, 7, 99, 34];
// const numeros11 = [99, 5, 359, 70, 358];

// // Sua lógica aqui...

// const maiorValor = numeros11.reduce((acc, valor) => {
//   if(valor > acc) {
//     return valor
//   }
//   return acc;
// }, numeros11[0])
  

// console.log("Exercício 6:", maiorValor);

// ########## EXERCÍCIOS SOBRE FOREACH ##########

// 🔁 Exercício 1 – Imprimir cada nome com saudação
// Dado um array de nomes, imprima "Olá, [nome]!" para cada um usando forEach().

const nomes1 = ["Pedro", "Ana", "João", "Aline"];

// Sua lógica aqui...
nomes1.forEach(nome => {
  console.log(`Olá, ${nome}!`);
})


// 🔁 Exercício 2 – Somar todos os números usando forEach
// Some todos os valores do array e imprima o total no final.

const numeros2 = [10, 20, 30, 40];
let total2 = 0;

// Sua lógica aqui...

numeros2.forEach( num => total2 += num);
console.log("Exercício 2:", total2);

// 🔁 Exercício 3 – Contar quantas palavras têm mais de 5 letras
// Use forEach para contar palavras com mais de 5 letras.

const palavras3 = ["computador", "cão", "janela", "ar", "teclado"];
let contagem3 = 0;

// Sua lógica aqui...

palavras3.forEach( palavra => {
  if(palavra.length > 5) {
    contagem3 ++;
  }
})
console.log("Exercício 3:", contagem3);


// 🔁 Exercício 4 – Criar um novo array com o dobro de cada número
// Use forEach para preencher um novo array com o dobro dos valores.

const numeros12 = [1, 2, 3, 4, 5];
const dobro4 = [];

// Sua lógica aqui...

numeros12.forEach( n => {
  dobro4.push(n * 2)
})
console.log("Exercício 4:", dobro4);


// 🔁 Exercício 5 – Marcar usuários como verificados
// Adicione a propriedade "verificado: true" para cada objeto do array.

const usuarios5 = [
  { nome: "Pedro" },
  { nome: "Ana" },
  { nome: "João" },
];

usuarios5.forEach( user => {
  user.verificado = true
})

// Sua lógica aqui...

console.log("Exercício 5:", usuarios5);


// 🔁 Exercício 6 – Contar quantos números são pares
// Use forEach para contar quantos números são pares no array.

const numeros13 = [3, 6, 8, 1, 5, 10, 12];
let pares6 = 0;

// Sua lógica aqui...

numeros13.forEach( numbers => {
  if(numbers % 2 === 0) {
    pares6++;
  }
})

console.log("Exercício 6:", pares6);
