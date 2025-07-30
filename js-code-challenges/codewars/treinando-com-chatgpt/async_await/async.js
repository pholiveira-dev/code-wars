// 📦 Simula uma tarefa assíncrona que demora 2 segundos para "entregar um pacote"
function entregarPacote() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Pacote entregue 📦');
    }, 2000);
  });
}



// 🧠 Sua tarefa:
// 1. Criar uma função async chamada "iniciarEntrega"
// 2. Usar await para esperar o resultado de entregarPacote()
// 3. Exibir o resultado no console

// ✍️ Escreva seu código abaixo:

async function iniciarEntrega() {
  const resultado = await entregarPacote();
  console.log(resultado);
}

// 📌 Exercício – Consultar um usuário fictício

// Crie uma função assíncrona que simule a consulta de um usuário em um banco de dados. Essa função deve esperar 2 segundos e, em seguida, retornar um objeto com nome e idade.

// Depois, crie outra função assíncrona chamada exibirUsuario() que use await para esperar a resposta da função anterior e exiba os dados do usuário no console.

async function consultaUsuario(usuario) {
  return new Promise((resolve) => {

    console.log("⏳ Buscando o usuário no banco de dados...");

    setTimeout(() => {
      const dados = {
        nome: usuario,
        idade: 28,
      }

      resolve(dados);

    }, 2000)
  })
}

async function exibirUsuario(usuario) {
  const resultado = await consultaUsuario(usuario);
  console.log("✅ Usuário encontrado: ")
  console.log(`Nome: ${resultado.nome}, idade: ${resultado.idade} anos`);
}

// 📌 Exercício – Consultar dois usuários e tratar erro

// Crie uma função assíncrona chamada consultaUsuario(usuario) que, após 2 segundos, retorne os dados do usuário, ou dispare um erro caso o nome do usuário seja "desconhecido".

// Depois, crie outra função assíncrona processarUsuarios() que chame consultaUsuario() duas vezes com nomes diferentes, usando await, e trate possíveis erros com try/catch.

// Regras:

// Se o nome for "desconhecido", a função consultaUsuario deve lançar um erro (throw new Error("Usuário não encontrado"))

// A função processarUsuarios deve exibir os dados dos dois usuários ou a mensagem de erro no console.