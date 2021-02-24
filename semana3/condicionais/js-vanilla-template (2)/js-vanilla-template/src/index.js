//  a. false - Se forem diferentes retorna false
//  b. false - O bool3 é um falso bool2 sendo um true resultando em false novamente
//  c. true - !resultado = true sendo um falso resultado e dentro de parenteses se ambos forem true retorna um true
//  e. boolean - typeof retorna o tipo da variavel

//  a. undefined - Não possui nenhum valor
//  b. null - O valor é nulo
//  c. 11 - ira retornar a quantidade de elementos
//  d. 3 - ira retornar o primeiro numero da lista
//  e. - ira retornar a lista subistituindo o segundo numero da lista pelo numero 19
//  f. 9 - ira retornar o valor da setima posição da lista 

// const user =
//     Number(prompt("Qual a sua idade"))
// console.log(user, typeof user)
// const friend =
//     Number(prompt("Qual a idade da sua melhor amiga?"))
// console.log(friend, typeof friend)

// let age = user > friend

// console.log("Sua idade é maior do que a do seu melhor amigo?", age)
// console.log(user - friend)

// const questionNumber =
//     Number(prompt("Insira um número par"))
// console.log(questionNumber % 2)
// //  INDEPENDENTE DO NUMERO PAR QUE SE DIVIDA POR 2 O RESTO SEMPRE SERA 0
// //  SE O USUARIO ADICIONAR UM NÚMERO ÍMPAR ELE NÃO SEGUIRA O PADRÃO E RESTARA UM NUMERO DIFERENTE DE 0

// let listaDeTarefas = []
// let question0 = alert("Índique 3 tarefas que você deve fazer no seu dia. Responda separadamente!")
// let question1 = prompt("Primeira Tarefa?")
// let question2 = prompt("Segunda Tarefa?")
// let question3 = prompt("Terceira Tarefa?")
// console.log(question1, "," + question2, "," + question3)

// listaDeTarefas = [question1, question2, question3]
// let removeQuestion = prompt("Digite o índice de uma tarefa que já realizou: 0, 1 ou 2?")
// listaDeTarefas.splice(removeQuestion, 1)
// console.log(listaDeTarefas)

// let emailDoUsuario = prompt("Qual o seu nome?")
// console.log(emailDoUsuario)
// let nomeDoUsuario = prompt("Qual o seu email?")
// console.log(nomeDoUsuario)
// console.log("O e-mail emailDoUsuario foi cadastrado com sucesso. Seja bem-vinda(o), nomeDoUsuario!")


// EXERCICIO DE CONDICIONAIS

// Intepretação do codigo
// Exercicio 1

// Ele esta dizendo que se o numero que o usuario inseriu se dividido por 2 
// o resto for igual a 0 a resposta sera "Passou no teste" consequentemente o numero deve ser par , 
// caso o numero inserido pelo usuario dividido por 2 e o resto for diferente de 
// 0 a resposta sera "Não passou no teste" consequentemente sendo um numero impar

// Exercicio 2

// a. Este codigo ele identifica a fruta inserida pelo prompt igualando a seu determinado bloco e reatribuindo um novo valor a varialvel preço
// b. O preço da fruta ,Maçã, é R$ 2.25
// c. o preço seria reatribuido duas vezes, seguindo pela ordem seria impresso a frase "O preço da fruta, Pêra, é, R$ 5"

// Exercicio 3

// a. A primeira linha pede para o usuario que insira o primeiro numero atraves de um prompt e converte de string para Number
// b. Se fosse digitado o numero 10 seria considerado true por ser maior que 0 consequentemente imprimindo a frase "Esse número passou no teste"
// Caso fosse digitado o valor de -10 seria considerado como um numero manor que 0 sendo assim false consequentemente imprimindo a frase "Essa mensagem é secreta"
// c. Havera um erro pelo fato de o console.log(mensagem) se localizar fora do bloco de if(numero > 0) , consequentemente nao podendo acessar a variavel mensagem que se localiza dentro do bloco.

// Exercicio 4

let drive = Number( prompt("Qual sua idade?") )
console.log("Idade", drive)
if (drive >= 18)  {
    console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir.")
}

// Exercicio 5

alert("Que turno do dia você estuda?")
let turn0 = prompt("M (matutino) ou V (Vespertino) ou N (Noturno)")
if(turn0 === "M") {
    console.log("Bom Dia!")
} else if (turn0 === "V") {
    console.log("Boa tarde!")
} else {
    console.log("Boa Noite!")
}

// Exercicio 6

 alert("Que turno do dia você estuda?")
let turn1 = prompt("M (matutino) ou V (Vespertino) ou N (Noturno)")
let messege
switch (turn1) {
    case "M":
        messege = "Bom Dia!"
        break;
    case "V":
        messege = "Boa Tarde!"
        break;
    case "N":
        messege = "Boa Noite!"
        break;
}
console.log(messege)

// Exercicio 7

let genre = prompt("Qual tipo de gêneto de filme você vai assistir?")
let ticket = Number( prompt("Qual o valor do ingresso?") )

if (genre === "fantasia", ticket <= 15) {
    console.log("Bom Filme!")
} else {
    console.log("Escolha outro filme :(")
}