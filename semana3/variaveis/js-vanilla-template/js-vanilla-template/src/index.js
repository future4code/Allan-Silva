// // 1 Imprimir no console o valor de b , logo em seguida reatribui um novo valor a variavel b e imprime o valor de a e b
// 2  Imprimir no console o valor de a, b, c sendo que ambos os valores se atribuem ao valor de a

let name
let age 
console.log(typeof name, age) 
// Pelo fato de nao ter sido atribuido nenhum valor a variavel não teria como identificar o seu tipo

let nameUser = prompt("Qual seu nome?")
let ageUser = prompt("Qual sua idade?")
console.log(nameUser, ageUser)

name = nameUser
age = ageUser

alert("Olá "+ name +",  você tem "+ age +" anos")
console.log("Olá " + name + ",  você tem " + age + " anos")

let food = prompt("Qual sua comida preferida?")
console.log('Resposta: ', food)
let color = prompt("Qual sua cor preferida")
console.log('Resposta: ', color)
let state = prompt("Qual estado do Brasil você mora?")
console.log('Resposta: ', state)
let language = prompt("Quais linguas você sabe falar?")
console.log('Resposta: ', language)
let dream = prompt("Qual seu maior sonho?")
console.log('Resposta: ', dream)

let favoriteFoods = ["Lasanha", "Escondidinho", "Bolo de Chocolate", "Panqueca", "Strogonoff"]

console.log("Essas são as minhas comidas preferidas: ", favoriteFoods)

let shower = prompt("Já tomou banho hoje?")
let sky = prompt("O céu esta azul?")
let water = prompt("Já bebeu água hoje?")

let questions = [shower, sky, water]
let answer = [true, false, true]

console.log("Já tomou banho hoje?", answer[0])
console.log("O céu esta azul?", answer[1])
console.log("Já bebeu água hoje?", answer[2])
