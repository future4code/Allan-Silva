// ESCRRITA DE CODIGO

// Exercicio 4

// A

// let user1Information = () => {
//     console.log("Eu sou Allan, tenho 18 anos, moro no Rio de Janiro e sou estudante")
// }
// userInformation()

// B

let name = prompt("Qual seu nome?")
let age = Number(prompt("Quantos anos você tem?"))
let state = prompt("Qual estado você mora?")
let student = prompt("Você é estudante?")

let questionUser = (name, age, state, student) => {
    if(student === true) {
        console.log(`Eu sou ${name}, tenho ${age} anos, moro no ${state} e sou estudante`)
    } else{
        console.log(`Eu sou ${name}, tenho ${age} anos, moro no ${state} e não sou estudante`)
    }
}
