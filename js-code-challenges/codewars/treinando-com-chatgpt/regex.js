/*
  🚀 REGEX – Exercícios Básicos
  Obs: todos os exercícios devem ser resolvidos utilizando Expressões Regulares.
  Não contém respostas para facilitar versionamento no GitHub.
  Você pode usar ferramentas como regex101.com para testar.
*/

/* 
  Exercício 01 – Nome com apenas letras
  Descrição: A string deve conter somente letras (maiúsculas ou minúsculas).
  Mínimo de 3 caracteres. Nada de números, espaços ou símbolos.
  Exemplos válidos: "Pedro", "Maria"
  Exemplos inválidos: "Jo", "João123", "Ana!"
*/
const nomeApenasLetras = "Pedro";
const padrao = /^[A-Za-z]{3,}$/

const testaPadrao = padrao.test(nomeApenasLetras);
console.log(testaPadrao);

/* 
  Exercício 02 – Número com até duas casas decimais
  Descrição: Validar número inteiro ou decimal com até 2 casas, com ponto como separador.
  Exemplos válidos: "10", "10.5", "10.50"
  Exemplos inválidos: "10,50", "10.123", "dez"
*/
const numeroDecimal = "10.25";
const resultadoNumeroDecimal = null;

/*
  Exercício 03 – E-mail simples
  Descrição: Validar um e-mail básico no formato nome@dominio.com
  Exemplos válidos: "joao@email.com", "maria123@abc.org"
  Exemplos inválidos: "joao@email", "@email.com", "joao email.com"
*/
const emailSimples = "joao@email.com";
const resultadoEmailSimples = null;

/*
  Exercício 04 – CPF formatado
  Descrição: Validar CPF no formato "000.000.000-00"
  Exemplos válidos: "123.456.789-00"
  Exemplos inválidos: "12345678900", "12.345.6789-00", "abc.def.ghi-jk"
*/
const cpfFormatado = "123.456.789-00";
const resultadoCPFFormatado = null;

/*
  Exercício 05 – Senha forte (nível 1)
  Descrição: A senha deve ter no mínimo 6 caracteres, e conter pelo menos uma letra e um número.
  Exemplos válidos: "abc123", "senha123"
  Exemplos inválidos: "abcdef", "123456", "abc"
*/
const senhaForte1 = "abc123";
const resultadoSenhaForte1 = null;

/*
  Exercício 06 – Usuário válido
  Descrição: Um nome de usuário válido deve ter entre 3 e 16 caracteres, usando apenas letras e números.
  Exemplos válidos: "user123", "Joao88"
  Exemplos inválidos: "jo", "user_name", "user@site"
*/
const nomeUsuario = "user123";
const resultadoNomeUsuario = null;

/*
  Exercício 07 – Palavra que termina com "son"
  Descrição: A string deve conter apenas letras e terminar com "son".
  Exemplos válidos: "Jackson", "Emerson"
  Exemplos inválidos: "son", "jack123son", "Emerson!"
*/
const terminaComSon = "Jackson";
const resultadoTerminaComSon = null;

/*
  Exercício 08 – Verificar se string tem espaços
  Descrição: Detectar se uma string contém pelo menos um espaço.
  Exemplos válidos: "com espaço"
  Exemplos inválidos: "semEspaco"
*/
const contemEspaco = "João Henrique";
const resultadoContemEspaco = null;
