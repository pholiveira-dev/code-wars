// 🔁 Exercício 2 – Verificar se um número é par
// Crie um módulo que exporta uma função que retorna true se o número for par, e false se for ímpar.
// No arquivo principal, importe essa função e teste com um número qualquer.

const numeroParaTeste = 14;

// Sua lógica aqui...

const funcaoImparPar = require('./impar_par');

const resultado = funcaoImparPar(numeroParaTeste);
console.log(resultado);
