function validador(senha) {
    const temArroba = senha.includes("@");
    const tamanhoMinimo = senha.length >= 8;

    if(temArroba && tamanhoMinimo) return "Senha segura";

    if(temArroba === false) {
        return "Você precisa acrescentar o '@' à sua senha"
    }

   if(tamanhoMinimo === false) {
        return "A senha precisa ter, no mínimo, 8 digítos"
    }


    else return "Senha inválida";
}

module.exports = validador;