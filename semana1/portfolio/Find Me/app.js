let counter = 0;

const getName = (open, close) => {
    let name = document.getElementById('userName').value;
    let answer = document.getElementById('player');
    answer.innerHTML = 'Ola ' + name + ', escolha que modo deseja jogar!';
    console.log(name);
    move(open, close);
}


const move = (open, close) => {
    document.getElementById(open).style.display = 'block';
    document.getElementById(close).style.display = 'none';
}

const monumentAnswerOne = () => {
    let questionOne = document.monumentQuestionOne.monumentOne.value;
    console.log(questionOne);
// Se a resposta do meu usuario for igual a palavra "acropole", o usuario marca um ponto, se nao, nao marca nada
    if(questionOne === 'acropole') {
        console.log("Acertou");
        counter++;
        console.log(counter);
    } else {
        console.log("Errou");
    }
    console.log(counter);
}

const monumentAnswerTwo = () => {
    let questionTwo = document.monumentQuestionTwo.monumentTwo.value;
    console.log(questionTwo);
// Se a resposta do meu usuario for igual a palavra "coliseu", o usuario marca um ponto, se nao, nao marca nada
    if (questionTwo === 'coliseu') {
        console.log("Acertou");
        counter++;
        console.log(counter);
    } else {
        console.log("Errou");
    }
    console.log(counter);
}

const monumentAnswerThree = () => {
    let questionThree = document.monumentQuestionThree.monumentThree.value;
    console.log(questionThree);
    // Se a resposta do meu usuario for igual a palavra "Burj Khalifa", o usuario marca um ponto, se nao, nao marca nada
    if (questionThree === 'burj-khalifa') {
        console.log("Acertou");
        counter++;
        console.log(counter);
    } else {
        console.log("Errou");
    }
    console.log(counter);
}