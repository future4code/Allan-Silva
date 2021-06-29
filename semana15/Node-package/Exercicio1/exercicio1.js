// Exercício 1

//A - atraves do terminal ou no package utilizando o codigo "node ./***.js"

//B -

const name = process.argv[2]
const age = Number(process.argv[3])

console.log(`Olá, ${name}! Você tem ${age} anos.`)

//C -

const newAge = age + 7

console.log(`Olá, ${name}! Você tem ${age} anos. Em sete anos você terá ${newAge}`)

