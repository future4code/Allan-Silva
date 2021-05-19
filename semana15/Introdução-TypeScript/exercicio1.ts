//Exercicio 1


//A -

// let minhaString: string = 2

//O codigo quebrou acusando estar usando um number ao inves de uma string

//B - 

// let meuNumero: number = "Hello! World"

//O codigo quebrou acusando estar usando uma string ao inves de uma number

//C -

type pessoa = {
    nome: string,
    idade: number,
    corFavorita: COLORS
}

//D - 
enum COLORS {
    VIOLETA = "violeta",
    ANIL = "anil",
    AZUL = "azul",
    VERDE = "verde",
    AMARELO = "amarelo",
    LARANJA = "laranja",
    VERMELHO = "vermelho"
}

//////////////////////////////

const joao: pessoa = {
    nome: "Joao Alves",
    idade: 28,
    corFavorita: COLORS.VIOLETA
}

const paulo: pessoa = {
    nome: "Paulo Otavio",
    idade: 22,
    corFavorita: COLORS.LARANJA
}

const allan: pessoa = {
    nome: "Allan Silva",
    idade: 18,
    corFavorita: COLORS.VERMELHO
}