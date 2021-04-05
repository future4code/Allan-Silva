let getTask = () => {
    let task = document.getElementById("tarefa").value ;
    let day = document.getElementById("dias-semana").value ;
    console.log("Valores: ", task, day)
    document.getElementById(day).innerHTML += "<p>- " + task + "</p>";
    document.getElementById("dias-semana").value = "domingo"
    document.getElementById("tarefa").value = "" ;
}

// let getTask = (write) => {
//     let task = document.getElementById("tarefa").value;
//     let day = document.getElementById("dias-semana").value;
//     day.innerHTML = "- " + task ;
//     return write
// }

// console.log(getTask())