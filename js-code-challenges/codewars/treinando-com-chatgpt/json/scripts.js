const objs = [
    {
    nome: "Pedro Henrique",
    idade: 28,
    esta_trabalhando: true,
    detalhes_profissao: {
        profissao: "Enfermeiro",
        empresa: "Centro Universitário do Distrito Federal"
    },
    hobbies: ["Video-game", "Programar", "Ler"]
    },
    {
    nome: "João",
    idade: 25,
    esta_trabalhando: false,
    detalhes_profissao: {
        profissao: null,
        empresa: null
    },
    hobbies: ["Video-game", "Academia"] 
    }
]

const objJson = JSON.stringify(objs);


const jsonObj = JSON.parse(objJson);
console.log(jsonObj);