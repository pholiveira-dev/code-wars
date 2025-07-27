// 🔁 Exercício 1 – Somar dois números
// Crie um módulo que exporta uma função que recebe dois números e retorna a soma.
// No arquivo principal, importe essa função e exiba o resultado no console.

const valor1 = 10;
const valor2 = 5;

// Sua lógica aqui...

const somaImportada = require('./somar');

console.log(somaImportada(valor1, valor2));