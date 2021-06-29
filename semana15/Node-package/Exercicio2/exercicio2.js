// Exercício 2

const operaçao = process.argv[2]
const arg1 = Number(process.argv[3])
const arg2 = Number(process.argv[4])

switch(operaçao) {
    case "add":
        const add = arg1 + arg2
        console.log(`Resposta: ${add} `)
    break;
    case "sub":
        const sub = arg1 - arg2
        console.log(`Resposta: ${sub} `)
    break;
    case "mult":
        const mult = arg1 * arg2
        console.log(`Resposta: ${mult} `)
    break;
    case "div":
        const div = arg1 / arg2
        console.log(`Resposta: ${div} `)
    break;
}
