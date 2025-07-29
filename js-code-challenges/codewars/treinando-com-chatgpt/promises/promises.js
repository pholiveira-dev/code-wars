// function numeroPar(num) {
//     return new Promise((resolve, reject) => {

//         console.log("⏳ Requisição sendo processada...")

//         setTimeout(() => {
//             if(num % 2 === 0) {
//             resolve(`✅ O número ${num} é par`);
//         } else {
//             reject(`❌ O número ${num} não é par`);
//         }
//         }, 3000)

//     })
// }

// numeroPar(5)
// .then((resultado) => {
//     console.log("Resultado: ", resultado)
// })
// .catch((e) => {
//     console.error("Erro: ", e)
// })

// function verificarTamanhoPalava(str) {
//     return new Promise((resolve, reject) => {

//         console.log("⏳ Requisição sendo processada...");

//         setTimeout(() => {

//         if(str.length >= 5) {
//             resolve(`✅ A palavra ${str} tem mais de 5 letras`);
//         } else {
//             reject(`❌ A palavra ${str} tem menos de 5 letras `);
//         }
//         }, 4500)
//     })
// };

// verificarTamanhoPalava('Paz')
// .then((resultado) => {
//     console.log("Resultado: ", resultado);
// })
// .catch((e) => {
//     console.error("Erro: ", e)
// });

// 📦 Simule um sistema que primeiro valida o nome de um usuário 
// e depois carrega os dados desse usuário, se a validação for bem-sucedida.

// Etapas:
// 1. Crie uma função `validarUsuario(nome)` que retorna uma Promise.
//    - Se o nome for diferente de vazio, resolva com o nome.
//    - Se for vazio, rejeite com uma mensagem de erro.

// 2. Crie outra função `carregarDadosDoUsuario(nome)` que também retorna uma Promise.
//    - Simule um tempo de espera com setTimeout.
//    - Resolva com um objeto fictício de dados (ex: idade, cidade).

// 3. Encadeie as duas usando `.then()` e `.catch()`
//    - Mostre no console o processo acontecendo (validando... carregando... sucesso ou erro).

function validarUsuario(nome) {
    return new Promise((resolve, reject) => {

        console.log("🔍 Validando usuário...");

        setTimeout(() => {

            if(nome && nome.trim !== "") {
                resolve(nome);
            } else {
                reject("❌ Digite algo válido");
            }

        }, 4500)
    }
)}

function carregarDadosDoUsuario(nome) {
    return new Promise((resolve) => {
        
        console.log("📦 Carregando dados do usuário...");

        setTimeout(() => {
            const dadosUsuario = {
                nome: nome,
                idade: 28,
                cidade: "Brasília-DF",
                status: "Ativo",
            }

            resolve(dadosUsuario)
        }, 4500)
    }
)}

validarUsuario('Pedro')
.then((nomeValido) => {
    return carregarDadosDoUsuario(nomeValido);
})
.then((dadosUsuario) => {
    console.log("✅ Dados carregados com sucesso: ");
    console.log(dadosUsuario);
})
.catch((erro) => {
    console.error("🚨 Erro no processo: ", erro);
})
