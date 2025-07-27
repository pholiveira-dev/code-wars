// 🔁 Exercício 5 – Módulo de validação de senha
// Crie um módulo que exporta uma função que recebe uma senha e retorna true se ela tiver pelo menos 8 caracteres e conter "@"
// Importe no arquivo principal e teste com uma string.

const senhaTeste = "abc1234";

// Sua lógica aqui...

const funcaoValidador = require('./validador');

const resultado = funcaoValidador(senhaTeste);

console.log(resultado);