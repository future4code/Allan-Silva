const regEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const getEmail = () => {
    let email = document.getElementById('e-mail').value;
    let message = document.getElementById('message');
    console.log(email);
    const result = regEx.test(email);
    console.log(result)
    if (result === true) {
        message.innerHTML = `
        <p class="message-text">Bem-Vindo ${email}.</p>
        `;
        console.log('email-valido')
    } else {
        alert('E-mail Invalido')
        console.log('email-invalido')
    }
}