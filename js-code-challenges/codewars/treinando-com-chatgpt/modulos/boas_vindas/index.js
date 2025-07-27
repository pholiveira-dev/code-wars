// 🔁 Exercício 3 – Módulo de boas-vindas personalizado
// Crie um módulo que exporta uma função que recebe o nome de uma pessoa e retorna:
// "Bem-vindo(a), [nome], ao sistema!"
// Importe e teste no arquivo principal.

const usuarioLogado = "Gabriela";

// Sua lógica aqui...

const funcaoBoasVindas = require('./boas_vindas');

const resultado = funcaoBoasVindas(usuarioLogado);

console.log(resultado);