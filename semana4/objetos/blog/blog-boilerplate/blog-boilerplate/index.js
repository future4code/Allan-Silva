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
