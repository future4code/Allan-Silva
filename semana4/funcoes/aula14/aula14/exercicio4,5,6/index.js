// ESCRRITA DE CODIGO

// Exercicio 4

// A

let user1Information = () => {
    return "Eu sou Allan, tenho 18 anos, moro no Rio de Janiro e sou estudante"
}
console.log(user1Information());

// B 

let answerUser = (name, age, state, isStudent) => {
    return "Eu sou " + name + " tenho " + age + " anos, moro no " + state + " e" + (isStudent?"":" não") + " sou estudante";
}

console.log(answerUser("Allan", 18, "Rio de janeiro", false))


// EXERCICIO 5

// A 

let numbers = (num1, num2) => {
    return num1 + num2
}

console.log("Resultado:", numbers(12, 4))

// B

let isHigherNumber = (num1, num2) => {
    return num1 >= num2 
}

console.log("Resultado:",isHigherNumber(6, 4))

// C

let tenTimes = (str) => {
    let result = "";
    for(let i = 0; i < 10; i++) {
        result += `${str}\n` ;
    }
    return result;
}

console.log(tenTimes("Allan"));

// EXERCICIO 6

// A

const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

let number = (array) => {
    return array.length;
}

console.log("Quantidade de numeros na array: ",number(array));

// B

let numberBool = (num) => {
    return num%2 === 0 ;
}

console.log("Numero pare: ",numberBool(13));

// C

let numberList = (list) => {
    let numberEven = []
    for(const number of list){
        if(number%2 === 0) {
            numberEven.push(number)
        }
    }
    return numberEven.length
}

console.log("Quantidade de numeros pares: ",numberList(array));

// D

let numberD = (list) => {
    let numberEven = []
    for (const number of list) {
        if (numberBool(number)) {
            numberEven.push(number)
        }
    }
    return numberEven.length
}

console.log("Quantidade de numeros pares: ",numberD(array));