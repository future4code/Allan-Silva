//Exercício 1

function inverteArray(array) {
   let reverseArray = [];
  for(let i = array.length - 1; i >= 0; i--){
     reverseArray.push(array[i])
  }
  return reverseArray
}

//Exercício 2

function retornaNumerosParesElevadosADois (array) {
   let arrayParesElevadosADois = [];
   for (let i = 0; i < array.length ; i++){
      if(array[i]%2 === 0) {
         arrayParesElevadosADois.push(array[i] * array[i])
      }
   }
   return arrayParesElevadosADois
}

//Exercício 3

function retornaNumerosPares (array) {
   let newArray = [];
   for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
         newArray.push(array[i])
      }
   }
   return newArray
}

//Exercício 4

function retornaMaiorNumero(array) {
   let largerNum = array[0];
   for (let i = 0; i < array.length; i++) {
      if (largerNum < array[i]) {
         largerNum = array[i]
      }
   }
   return largerNum
}

//Exercício 5

function retornaQuantidadeElementos (array) {
   return array.length
}

//Exercício 6

function retornaExpressoesBooleanas() {
   return [false, false, true, true, true]
}

//Exercício 7

function retornaNNumerosPares(n) {
   const arrayNumber = [];
   for (let num = 0; arrayNumber.length < n; num++) {
      if (num % 2 === 0) {
         arrayNumber.push(num)
      }
   }
   return arrayNumber
}

// Exercício 8

function checaTriangulo(a, b, c) {
   if (a === b && b === c) {
      return 'Equilátero'
   } else if (a !== b && b !== c) {
      return 'Escaleno'
   } else {
      return 'Isósceles'
   }
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
   let largeNumber;
   let smallNumber;
   let greaterDivisibleSmaller;

   if (num1 > num2) {
      largeNumber = num1;
      smallNumber = num2;
   } else {
      largeNumber = num2;
      smallNumber = num1;
   }

   greaterDivisibleSmaller = largeNumber % smallNumber === 0;

   const diferenca = largeNumber - smallNumber;

   return {
      maiorNumero: largeNumber,
      maiorDivisivelporMenor: greaterDivisibleSmaller,
      diferenca: diferenca
   }
}

// Exercício 10

function segundoMaiorEMenor(array) {
   let menor = Infinity
   let maior = 0
   let segundoMenor = Infinity
   let segundoMaior = 0
   let indiceMenor = 0
   let indiceMaior = 0
   let novoArray = []

   for (let i of array) {
      if (i < menor) {
         menor = i
         indiceMenor = array.indexOf(menor)
      }
      if (i > maior) {
         maior = i
         indiceMaior = array.indexOf(maior)
      }
   }
   array.splice(indiceMaior, 1)
   array.splice(indiceMenor, 1)

   for (let i of array) {
      if (i < segundoMenor) {
         segundoMenor = i
      }
      if (i > segundoMaior) {
         segundoMaior = i
      }
   }
   novoArray.push(segundoMaior)
   novoArray.push(segundoMenor)

   return novoArray
}

//Exercício 11

function ordenaArray(array) {
      const len = array.length;
      for (let i = 0; i < len; i++) {
         for (let j = 0; j < len; j++) {
            if (array[j] > array[j + 1]) {
               let tmp = array[j];
               array[j] = array[j + 1];
               array[j + 1] = tmp;
            }
         }
      }
      return array
}

// Exercício 12

function filmeFavorito() {
   const filme = {
      nome: 'O Diabo Veste Prada',
      ano: 2006,
      diretor: 'David Frankel',
      atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
   }

   return filme
}

// Exercício 13

function imprimeChamada() {
   const filme = {
      nome: 'O Diabo Veste Prada',
      ano: 2006,
      diretor: 'David Frankel',
      atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
   }

   let atoresConcat = ""
   for (let i = 0; i < filme.atores.length; i++) {
      if (i === filme.atores.length - 1) {
         atoresConcat += filme.atores[i]
      } else {
         atoresConcat += filme.atores[i] + ", "
      }
   }

   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${atoresConcat}.`
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
   const retangulo = {
      largura: lado1,
      altura: lado2,
      perimetro: 2 * (lado1 + lado2),
      area: lado1 * lado2
   }

   return retangulo
}

// Exercício 15

function anonimizaPessoa(pessoa) {
   return {
      ...pessoa,
      nome: 'ANÔNIMO'
   }
}

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 } 
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   const newArray = arrayDePessoas.filter((pessoa) => {
      return pessoa.idade >= 18
   })
   return newArray

}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   const newArray = arrayDePessoas.filter((pessoa) => {
      return pessoa.idade < 18
   })
   return newArray
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   const newArray = array.map((num) => {
      return num * 2
   })
   return newArray
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
   const newArray = array.map((num) => {
      return (num * 2).toString()
   })
   return newArray
}

// Exercício 17, letra C

function verificaParidade(array) {
   const newArray = array.map((num) => {
      if (num % 2 === 0) {
         return `${num} é par`
      } else {
         return `${num} é ímpar`
      }
   })

   return newArray
}

// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8},
  { nome: "João", idade: 20, altura: 1.3},
  { nome: "Pedro", idade: 15, altura: 1.9},
  { nome: "Luciano", idade: 22, altura: 1.8},
  { nome: "Artur", idade: 10, altura: 1.2},
  { nome: "Soter", idade: 70, altura: 1.9}
]

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
   let autorizadas = [];
   for (const pessoa of pessoas) {
      if (pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60) {
         autorizadas.push(pessoa)
      }
   }
   return autorizadas;
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   let naoAutorizadas = [];
   for (const pessoa of pessoas) {
      if (pessoa.altura < 1.5 || pessoa.idade < 14 || pessoa.idade > 60) {
         naoAutorizadas.push(pessoa)
      }
   }
   return naoAutorizadas;
}

//Exercício 19

const consultas = [
   { nome: "João", genero: "masculino", cancelada: false, dataDaConsulta: "01/10/2019" },
   { nome: "Pedro", genero: "masculino", cancelada: true, dataDaConsulta: "02/10/2019" },
   { nome: "Paula", genero: "feminino", cancelada: false, dataDaConsulta: "03/11/2019" },
   { nome: "Márcia", genero: "feminino", cancelada: true, dataDaConsulta: "04/11/2019" }
]

function retornaEmailConsulta() {
   return consultas.map((consulta) => {
      let emailFinal = "Olá, "

      if (!consulta.cancelada) {
         if (consulta.genero === "feminino") {
            emailFinal += "Sra. "
         } else {
            emailFinal += "Sr. "
         }

         emailFinal += consulta.nome + ". "
         emailFinal += "Estamos enviando esta mensagem para "

         if (consulta.genero === "feminino") {
            emailFinal += "lembrá-la "
         } else {
            emailFinal += "lembrá-lo "
         }

         emailFinal += "da sua consulta no dia " + consulta.dataDaConsulta + ". "
         emailFinal += "Por favor, acuse o recebimento deste-email."
      } else {
         if (consulta.genero === "feminino") {
            emailFinal += "Sra. "
         } else {
            emailFinal += "Sr. "
         }

         emailFinal += consulta.nome + ". "
         emailFinal += "Infelizmente sua consulta marcada para o dia "
         emailFinal += consulta.dataDaConsulta + " foi cancelada. "
         emailFinal += "Se quiser, pode entrar em contato conosco para remarcá-la."
      }
      return emailFinal
   });
}

//Exercício 20

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
   contas.forEach((conta) => {
       let result = 0
       conta.compras.forEach((valor) => {
          result += valor
       })
      conta.saldoTotal -= result
     })
     return contas
}