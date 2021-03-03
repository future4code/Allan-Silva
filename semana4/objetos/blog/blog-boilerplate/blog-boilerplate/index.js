const title = document.getElementById("titulo-post");
const author = document.getElementById("autor-post");
const contents = document.getElementById("conteudo-post");

let arrayValue = [];

const getInformation = () => {
    const value = {
        titulo: title.value,
        autor: author.value,
        conteudo: contents.value,
    }
    console.log("Informações: ",value)
    if (value.titulo !== "" && value.autor !== "" && value.conteudo !== "") {
        arrayValue.push(value);

    } else {
        alert("Preencha corretamente todos os dados!");
    }
    console.log("Array: ",arrayValue);
    update()
    move(value)
}

const move = (value1) => {
    let post = document.getElementById("container-de-posts")
    post.innerHTML += `
    <div>
        <h1>${value1.titulo}</h1>
        <p>${value1.conteudo}</p>
        <p>${value1.autor}</p>
    </div>
    `;
}

const update = () => {
    document.getElementById("titulo-post").value = ""
    document.getElementById("autor-post").value = "";
    document.getElementById("conteudo-post").value = "";
}


// let getTask = () => {
//     let task = document.getElementById("tarefa").value;
//     let day = document.getElementById("dias-semana").value;
//     console.log("Valores: ", task, day)
//     document.getElementById(day).innerHTML += "<p>- " + task + "</p>";
//     document.getElementById("dias-semana").value = "domingo"
//     document.getElementById("tarefa").value = "";
// }

// const adicionaValor = () => {
//     let arrayDeDados = [];
//     dadosDoPost = {
//         titulo: tituloDoPost.value,
//         autor: autorDoPost.value,
//         conteudo: conteudoDoPost.value,
//     }
//     if (dadosDoPost.titulo !== "" && dadosDoPost.autor !== "" && dadosDoPost.conteudo !== "") {
//         arrayDeDados.push(dadosDoPost);

//     } else {
//         alert("Preencha todos os dados!");
//     }
//     console.log(arrayDeDados);
// }