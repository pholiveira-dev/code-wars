// ===================================================
// 📦 Exercício 1 – Verificação de Estoque e Pedido
// ===================================================

// 1. Crie a função verificarEstoque(produto) que retorna uma Promise.
//    - Simule um tempo com setTimeout.
//    - Se o produto for "notebook", resolva com a quantidade 4.
//    - Caso contrário, rejeite com "Produto fora de estoque".

// 2. Crie a função processarPedido(produto) que também retorna uma Promise.
//    - Simule o tempo com setTimeout.
//    - Resolva com "Pedido do produto X processado com sucesso".

// 3. Encadeie as duas usando .then() e trate erros com .catch().
// console.clear();
// function verificarEstoque(produto) {

//     return new Promise((resolve, reject) => {

//     console.log("...verificando o estoque ⏳")

//     setTimeout(() => {
//         if(produto === 'notebook') {
//             resolve(4);
//         } else {
//             reject("❌ Produto fora do estoque");
//         }
//     }, 4500)
// })
// }

// function processarPedido(produto) {

//     return new Promise((resolve) => {

//     console.log("⚙️ Processando o pedido")

//     setTimeout(() => {
//         const msg = `Pedido do produto ${produto} processado com sucesso! ✅`;
//         resolve(msg)
//     }, 4500)
//     })
// }

// verificarEstoque('notebook')
// .then((resposta) => {
//     console.log("Em estoque: ", resposta)
//     return processarPedido(resposta)
// })
// .then((pedido) => {
//     console.log(pedido);
// })
// .catch((e) => {
//     console.error("Erro: ", e)
// })

// ===================================================
// 🔐 Exercício 2 – Autenticação e Carregamento de Perfil
// ===================================================

// 1. Crie a função autenticar(login, senha) que retorna uma Promise.
//    - Se login for "admin" e senha for "1234", resolva com um ID fictício.
//    - Caso contrário, rejeite com "Credenciais inválidas".

// 2. Crie a função carregarPerfil(id) que retorna uma Promise.
//    - Simule com setTimeout.
//    - Resolva com um perfil de exemplo: { nome: "Pedro", cargo: "TI" }

// 3. Encadeie usando .then() e mostre passo a passo no console.

// function autenticar(login, senha) {
//     return new Promise((resolve, reject) => {

//          console.log("...autenticando o usuário ⏳")

//          setTimeout(() => {
//         if(login === 'admin' && senha === '1234') {
//             resolve(101);
//         } else {
//             reject("Credenciais inválidas ❌")
//         }
//          })

//     })
// }

// function carregarPerfil(id) {
//     return new Promise((resolve) => {

//         console.log("📥 Carregando perfil do usuário...")
        
//         setTimeout(() => {

//             const perfil = {
//                 nome: "Pedro",
//                 cargo: "TI",
//                 status: "ativo",
//                 id: id,
//             }

//             resolve(perfil)

//         }, 4500)
//     })
// }

// autenticar('admin', '1234')
// .then((id) => {
//     console.log("Autenticação bem sucedida. ID: ", id);
//     return carregarPerfil(id);
// })
// .then((dados) => {
//     console.log("✅ Perfil carregado:");
//     console.log(dados)
// })

// .catch((e) => {
//     console.error("Erro: ", e)
// })

// ===================================================
// 📁 Exercício 3 – Verificação e Envio de Arquivo
// ===================================================

// 1. Crie a função verificarArquivo(nomeArquivo) que retorna uma Promise.
//    - Se o nome terminar com ".pdf", resolva com "Arquivo válido".
//    - Caso contrário, rejeite com "Formato inválido".

// 2. Crie enviarArquivo(nomeArquivo) que retorna uma Promise com setTimeout.
//    - Resolva com "Arquivo enviado com sucesso: nomeArquivo".

// 3. Encadeie as duas e trate erros no final.

function verificarArquivo(nomeArquivo) {
    return new Promise((resolve, reject) => {

        console.log("⏳ Verificando o arquivo...")

        setTimeout(() => {

        if(nomeArquivo.toLowerCase().endsWith('.pdf')) {

            resolve("✅ Arquivo válido!");
            
        } else {
            reject("❌ Formato inválido.")
        }

        }, 4500);
    });
}

function enviarArquivo(nomeArquivo) {

    return new Promise((resolve) => {

        console.log("📬 Enviando o arquivo...")

        setTimeout(() => {
            resolve(`Arquivo enviado com sucesso: ${nomeArquivo}`)
            
        }, 4500)
    })
}

const meu_arquivo = 'Projeto.pdf';

verificarArquivo(meu_arquivo)
.then((arquivo) => {
    console.log(arquivo);
    return enviarArquivo(meu_arquivo)
})
.then((resposta) => {
    console.log(resposta)
})
.catch((e) => {
    console.error("Erro: ", e)
})


// ===================================================
// 🚚 Exercício 4 – Atraso de Entrega e Notificação
// ===================================================

// 1. Crie verificarEntrega(pedidoId) que retorna uma Promise.
//    - Se pedidoId for menor que 1000, resolva com "Entrega prevista para hoje".
//    - Caso contrário, rejeite com "Pedido atrasado".

// 2. Crie notificarCliente(mensagem) que retorna uma Promise.
//    - Simule envio de e-mail ou SMS com setTimeout.
//    - Resolva com "Notificação enviada: mensagem".

// 3. Use .then() para encadear tudo e .catch() para tratar erros.
