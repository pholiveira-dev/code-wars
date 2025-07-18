// 🧠 Exercício 1 – Nome Formatado
// Descrição:
// Dado um nome completo digitado pelo usuário (possivelmente com espaços extras e letras minúsculas), retorne o nome com:

// Primeira letra de cada palavra em maiúscula

// Restante em minúsculas

// Sem espaços extras nas pontas

// Exemplo:
// formatarNome("   peDro    henrique  DE oliveira ") 
// → "Pedro Henrique De Oliveira"

// #########################################################################

// function nomeFormatado(str) {
//     if(str.trim() === '') return false;

//     const palavras = str.trim().split(/\s+/);

//     const formatarPalavras = palavras.map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase())
//     .join(' ')
    
//     return formatarPalavras;

// }

// console.log(nomeFormatado('   pedro henrique de oliveira   '))

// #########################################################################

// _________________________________________________________________________________________________________________________________
// 🧠 Exercício 2 – Código do Produto
// Descrição:
// Dado um nome de produto digitado pelo usuário, gere um “código” para URL.
// Regras:

// Tudo em minúsculo

// Sem espaços nas pontas

// Espaços no meio viram hífens (-)

// Exemplo:
// gerarCodigoProduto("   Camisa Branca Gola Polo   ") 
// → "camisa-branca-gola-polo"

// #########################################################################

// function createUrl(str) {

//     if(!str || str.trim() === '') return false;

//     const lowCase = str.trim().toLowerCase();

//     const url = lowCase.split(/\s+/).join('-')

//     return url;
// }

// console.log(createUrl('Camisa     Branca Gola Polo'));

// #########################################################################

// _________________________________________________________________________________________________________________________________
// 🧠 Exercício 3 – Contador de Palavras
// Descrição:
// Receba uma string e retorne quantas palavras reais ela tem (ignorando espaços extras entre palavras).

// Exemplo:

// contarPalavras("  Olá,    Pedro! Como você  está?  ") 
// → 5

// function contadorPalavras(str) {

//     if(!str || str.trim() === '') return 0;

//     const semPontuacao = str.replace(/[^\w\s]/g)

//     const palavras = semPontuacao.trim().split(/\s+/);

//     return palavras.length;
// }

// console.log(contadorPalavras('  '));

// _________________________________________________________________________________________________________________________________
// 🧠 Exercício 4 – Primeiras Letras
// Descrição:
// Receba uma frase e retorne as primeiras letras de cada palavra, todas em maiúscula, juntas em uma só string (como uma sigla).

// Exemplo:

// sigla("  Pedro Henrique de Oliveira  ") 
// → "PHO"

function primeirasLetras(str) {
    if(!str || str.trim() === '') return false;

    const semPontuacao = str.replace(/[^\s\w]/g, '')

    const palavras = semPontuacao.trim().split(/\s+/);


    const primeiraLetra = palavras.map(palavra => palavra.charAt(0).toUpperCase())
    .join('');

    return primeiraLetra;
}

console.log(primeirasLetras('Pedro     Henrique de Oliveira Alves'));

// _________________________________________________________________________________________________________________________________
// 🧠 Exercício 5 – Texto com Pontuação Final
// Descrição:
// Dado um texto digitado pelo usuário, verifique:

// Se a primeira letra está em maiúscula

// Se o texto termina com ponto final .

// Se não, corrija

// Exemplo:
// corrigirTexto("isso é um exemplo") 
// // → "Isso é um exemplo."

// _________________________________________________________________________________________________________________________________
// 🧠 Exercício 6 – Hashtag de Emoções
// Descrição:
// Receba uma frase com emoções separadas por vírgulas, e gere um array de hashtags formatadas corretamente.

// Exemplo:
// gerarHashtags(" feliz, animado, com sono ") 
// → ["#Feliz", "#Animado", "#ComSono"]
