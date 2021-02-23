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

 const user = 
     Number( prompt("Qual a sua idade") ) 
 console.log(user , typeof user)
 const friend =
     Number( prompt("Qual a idade da sua melhor amiga?") )
 console.log(friend, typeof friend)

 let age = user>friend

 console.log("Sua idade é maior do que a do seu melhor amigo?", age)
 console.log(user - friend)

 const questionNumber = 
     Number( prompt("Insira um número par") )
 console.log(questionNumber%2)
//  INDEPENDENTE DO NUMERO PAR QUE SE DIVIDA POR 2 O RESTO SEMPRE SERA 0
//  SE O USUARIO ADICIONAR UM NÚMERO ÍMPAR ELE NÃO SEGUIRA O PADRÃO E RESTARA UM NUMERO DIFERENTE DE 0

 let listaDeTarefas = []
 let question0 = alert("Índique 3 tarefas que você deve fazer no seu dia. Responda separadamente!")
 let question1 = prompt("Primeira Tarefa?")
 let question2 = prompt("Segunda Tarefa?")
 let question3 = prompt("Terceira Tarefa?")
 console.log(question1,"," + question2,"," + question3)

 listaDeTarefas = [question1, question2, question3]
 let removeQuestion = prompt("Digite o índice de uma tarefa que já realizou: 0, 1 ou 2?")
 listaDeTarefas.splice(removeQuestion, 1)
 console.log(listaDeTarefas)

let emailDoUsuario = prompt("Qual o seu nome?")
console.log(emailDoUsuario)
let nomeDoUsuario = prompt("Qual o seu email?")
console.log(nomeDoUsuario)
console.log("O e-mail emailDoUsuario foi cadastrado com sucesso. Seja bem-vinda(o), nomeDoUsuario!")
