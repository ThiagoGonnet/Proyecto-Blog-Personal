console.log('Start...')

// Formulario

let nombreinput = document.querySelector('#name');
let email = document.querySelector('#email')
let username = document.querySelector('#username')
let password = document.querySelector('#password')
let btn_enviar = document.querySelector('#btn-enviar')
let usuarios = [];

btn_enviar.addEventListener("click", function (event) {
    event.preventDefault();

    // Crea un objeto con los inputs del usuario y crea un arreglo de datos (mini base de datos)

    let datos = {
        nombre: nombreinput.value,
        email: email.value,
        username: username.value,
        password: password.value,
    }

    usuarios.push(datos);
    console.log(usuarios);

    // Restablece los campos

    nombreinput.value = "";
    email.value = "";
    username.value = "";
    password.value = "";
})

