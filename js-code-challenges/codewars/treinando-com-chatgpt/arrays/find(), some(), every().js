// ########## EXERCÍCIOS SOBRE FIND / SOME / EVERY ##########

// 🔍 Exercício 1 – Encontrar o primeiro número maior que 50
// Use find() para retornar o primeiro número maior que 50 no array.

const numeros1 = [10, 25, 47, 51, 62, 15];

// Sua lógica aqui...

const maior50 = numeros1.find( num => num > 50)
console.log("Exercício 1:", maior50);


// 🔍 Exercício 2 – Encontrar o usuário com email "joao@email.com"
// Use find() para localizar o usuário com esse e-mail.

const usuarios2 = [
  { nome: "Pedro", email: "pedro@email.com" },
  { nome: "Ana", email: "ana@email.com" },
  { nome: "João", email: "joao@email.com" },
];

// Sua lógica aqui...

const localizarEmail = usuarios2.find( usuario => usuario.email === 'joao@email.com'); 
console.log("Exercício 2:", localizarEmail);

// ❓ Exercício 3 – Verificar se há algum número negativo
// Use some() para verificar se existe algum número menor que 0.

const numeros3 = [4, -1, 7, 0, 12, -5];

// Sua lógica aqui...

const numNegativo = numeros3.some( n => n < 0);
console.log("Exercício 3:", numNegativo);

// ❓ Exercício 4 – Verificar se algum produto está fora de estoque
// Use some() para verificar se algum produto tem estoque igual a 0.

const produtos4 = [
  { nome: "Teclado", estoque: 3 },
  { nome: "Mouse", estoque: 0 },
  { nome: "Monitor", estoque: 7 },
];

// Sua lógica aqui...

const semEstoque = produtos4.some( produto => produto.estoque === 0); 
console.log("Exercício 4:", semEstoque);


// ✅ Exercício 5 – Verificar se todos os alunos foram aprovados
// Use every() para verificar se todos os alunos têm nota maior ou igual a 7.

const alunos5 = [
  { nome: "Pedro", nota: 8 },
  { nome: "Ana", nota: 7 },
  { nome: "João", nota: 6 },
];

// Sua lógica aqui...

const aprovados = alunos5.every( aluno => {
    return aluno.nota >= 7;
})
console.log("Exercício 5:", aprovados);

// ✅ Exercício 6 – Verificar se todos os números são pares
// Use every() para verificar se todos os números são pares.

const numeros6 = [2, 4, 6, 8, 10, 12];

// Sua lógica aqui...

const numerosPares = numeros6.every( n => {
    return n % 2 == 0;
})
console.log("Exercício 6:", numerosPares);
