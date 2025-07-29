// Exercício 1: Desestruturação Básica de Objeto

// Contexto: Você tem um objeto representando um usuário.
// Tarefa: Use a desestruturação para extrair as propriedades nome e idade para variáveis separadas.

// const usuario = {
//   nome: 'Ana',
//   idade: 30,
//   cidade: 'São Paulo'
// };

// // // Sua solução aqui

// const { nome, idade } = usuario;

// console.log(nome)
// console.log(idade)

// // Exemplo esperado:
// // const nome = 'Ana';
// // const idade = 30;

// console.log(nome); // Deve imprimir 'Ana'
// console.log(idade); // Deve imprimir 30
// ____________________________________________________________________________________________________________

// Exercício 2: Desestruturação Básica de Array

// Contexto: Você tem um array com uma lista de frutas.
// Tarefa: Use a desestruturação para extrair a primeira e a segunda fruta para variáveis separadas.

// const frutas = ['Maçã', 'Banana', 'Laranja', 'Uva'];

// // // Sua solução aqui

// const [primeiraFruta, segundaFruta] = frutas;

// console.log(primeiraFruta)
// console.log(segundaFruta)

// // Exemplo esperado:
// // const primeiraFruta = 'Maçã';
// // const segundaFruta = 'Banana';

// console.log(primeiraFruta); // Deve imprimir 'Maçã'
// console.log(segundaFruta); // Deve imprimir 'Banana'
// ____________________________________________________________________________________________________________

// Exercício 3: Desestruturação com Renomeação de Variáveis (Objetos)

// Contexto: Você tem um objeto com informações de um produto.
// Tarefa: Desestruture as propriedades nome e preco, mas renomeie nome para nomeProduto e preco para valor.

// const produto = {
//   nome: 'Teclado Mecânico',
//   preco: 250.00,
//   categoria: 'Periféricos'
// };

// const { nome: nomeProduto, preco: valor } = produto;

// console.log(nomeProduto);
// console.log(valor);

// // Sua solução aqui
// // Exemplo esperado:
// // const nomeProduto = 'Teclado Mecânico';
// // const valor = 250.00;

// console.log(nomeProduto); // Deve imprimir 'Teclado Mecânico'
// console.log(valor);       // Deve imprimir 250
// ____________________________________________________________________________________________________________

// Exercício 4: Desestruturação com Valores Padrão (Objetos)

// Contexto: Você tem um objeto de configurações que pode não ter todas as propriedades.
// Tarefa: Desestruture tema e idioma, fornecendo valores padrão caso essas propriedades não existam no objeto. tema deve ser 'claro' e idioma deve ser 'pt-BR'.

// const configuracoesUsuario = {
//   tema: 'escuro'
//   // idioma não está presente
// };

// // // Sua solução aqui

const {tema = 'claro', idioma ='pt-BR'} = configuracoesUsuario;

// console.log(idioma)

// // Exemplo esperado:
// // const tema = 'escuro';
// // const idioma = 'pt-BR'; (valor padrão)

// console.log(tema);    // Deve imprimir 'escuro'
// console.log(idioma);  // Deve imprimir 'pt-BR' (do valor padrão)

// // Teste com outro objeto sem tema:
// const configuracoesPadrao = {};

// const {tema = 'claro', idioma = 'pt-BR'} = configuracoesPadrao;

// console.log(tema)
// console.log(idioma)
// // Sua solução aqui (reaproveite a desestruturação para este objeto)
// // Exemplo esperado:
// // const tema2 = 'claro'; (valor padrão)
// // const idioma2 = 'pt-BR'; (valor padrão)

// console.log(tema2);    // Deve imprimir 'claro'
// console.log(idioma2);  // Deve imprimir 'pt-BR'

// ____________________________________________________________________________________________________________
// Exercício 5: Pular Elementos em Desestruturação de Array

// Contexto: Você tem um array de cores.
// Tarefa: Extraia a primeira cor e a terceira cor, ignorando a segunda.

// const cores = ['Vermelho', 'Verde', 'Azul', 'Amarelo'];

// // // Sua solução aqui

// const [primeiraCor, , terceiraCor] = cores;
// console.log(primeiraCor);
// console.log(terceiraCor);

// // Exemplo esperado:
// // const primeiraCor = 'Vermelho';
// // const terceiraCor = 'Azul';

// console.log(primeiraCor); // Deve imprimir 'Vermelho'
// console.log(terceiraCor); // Deve imprimir 'Azul'
// ____________________________________________________________________________________________________________

// Exercício 6: Desestruturação em Parâmetros de Função (Objetos)

// Contexto: Você quer que uma função receba um objeto e extraia algumas de suas propriedades diretamente nos parâmetros.
// Tarefa: Crie uma função imprimirDetalhesLivro que receba um objeto livro e use a desestruturação nos parâmetros para acessar titulo e autor e imprimi-los no console.

// // Sua solução aqui
// // A função deve ser definida algo como:
// // function imprimirDetalhesLivro({ titulo, autor }) { ... }

const livro1 = {
  titulo: 'O Pequeno Príncipe',
  autor: 'Antoine de Saint-Exupéry',
  ano: 1943
};

const livro2 = {
  titulo: '1984',
  autor: 'George Orwell',
  ano: 1949
};

function imprimirDetalhesLivro({titulo, autor}) {
  return `Título: ${titulo}, Autor: ${autor}`
}

console.log(imprimirDetalhesLivro(livro2));

// imprimirDetalhesLivro(livro1);
// // Deve imprimir: "Título: O Pequeno Príncipe, Autor: Antoine de Saint-Exupéry"

// imprimirDetalhesLivro(livro2);
// // Deve imprimir: "Título: 1984, Autor: George Orwell"