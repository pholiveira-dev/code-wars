// 🟩 Exercício 1 - Função nomeada: Boas-vindas
function exibirBoasVindasUsuario(nome) {
  // Retorne uma saudação personalizada
  return `Seja muito bem vindo(a), ${nome}`
}
console.log(exibirBoasVindasUsuario('Pedro'))

// 🟩 Exercício 2 - Função nomeada: Verifica se é par
function verificarNumeroPar(numero) {
  // Retorne true se for par, false se for ímpar
  return numero % 2 === 0;
}
console.log(verificarNumeroPar(6));

// 🟩 Exercício 3 - Função nomeada: Cálculo de IMC
function classificarIMC(peso, altura) {
  // Calcule o IMC e retorne a classificação:
  // Abaixo do peso / Peso normal / Sobrepeso / Obesidade

  const imc = Math.floor(peso / (altura * altura));

  const classificacoes = [
    {limite: 18.5, descricao: "Abaixo do peso"},
    {limite: 24.9, descricao: "Peso normal"},
    {limite: 29.9, descricao: "Sobrepeso"},
    {limite: 39.9, descricao: "Obesidade"},
    {limite: 40, descricao: "Obesidade Grave"}
  
];

  return classificacoes.find(faixa => imc <= faixa.limite).descricao;
  
};

console.log(classificarIMC(74, 1.71))

// 🟨 Exercício 4 - Função anônima: Calculadora de idade
const calcularIdadeUsuario = function(anoNascimento) {
  // Retorne a idade com base no ano atual
  const data = new Date();
  return `Idade do usuário ${data.getFullYear() - anoNascimento} anos`;
};
console.log(calcularIdadeUsuario(1997));

// 🟨 Exercício 5 - Função anônima: Verifica se é maior de idade
const verificarMaioridade = function(idade) {
  // Retorne "Maior de idade" ou "Menor de idade"

  return idade > 18 ? "Maior de idade" : "Menor de idade";
}
console.log(verificarMaioridade(18));

// 🟨 Exercício 6 - Função anônima: Retorna o maior número entre 3 valores
const encontrarMaiorNumero = function(a, b, c) {
  // Retorne o maior dos três números
  const listaNumeros = [a, b, c];
  const maiorValor = listaNumeros.reduce((acc, num) => {
    if(num > acc) {
        return num;
    };
    return acc;
  }
)
    return maiorValor;
};
console.log(encontrarMaiorNumero(5, 11, 8));

// 🟦 Exercício 7 - Arrow function: Saudação simples
const gerarSaudacaoCurta = nome => {
  // Retorne uma saudação rápida
  const saudacao = `Seja bem-vindo(a), ${nome}`;
  return saudacao
};
console.log(gerarSaudacaoCurta('Artur'));
// 🟦 Exercício 8 - Arrow function: Soma de dois números
const somarValores = (a, b) => {
  // Retorne a soma de a + b
  const soma = a + b
  return soma
};
console.log(somarValores(10, -1))

// 🟦 Exercício 9 - Arrow function: Verifica se a senha é segura
function senhaSegura(senha) {
  // A senha deve ter pelo menos 8 caracteres e conter "@"

  const temArroba = senha.includes("@");
  const tamanhoMinimo = senha.length >= 8;

  if(temArroba && tamanhoMinimo) return "Senha segura";
  else return "Senha inválida!"
}

console.log(senhaSegura('@12345678'))


// 🟦 Exercício 10 - Arrow function + array: Filtra números pares
const listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8];
const numerosParesFiltrados = listaNumeros.filter(num => {
  // Retorne apenas os números pares do array
  return num % 2 === 0
});

console.log(numerosParesFiltrados);
