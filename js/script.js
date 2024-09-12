console.log('Start...');

// Formulario

let nombreinput = document.querySelector('#name');
let email = document.querySelector('#email');
let username = document.querySelector('#username');
let password = document.querySelector('#password');
let captchaspan = document.querySelector('#captchaspan');
let captchainput = document.querySelector('#captchainput');
let btn_enviar = document.querySelector('#btn-enviar');
let usuarios = [];

let numeros = "0123456789";
let letras = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let todo = numeros + letras;

// Captcha

const generarCaptcha = () => {
    let captcha = ""; // Inicializa la variable captcha como cadena vacía
    for (let i = 0; i < 6; i++) {
        let aleatorio = Math.floor(Math.random() * todo.length);
        captcha += todo.charAt(aleatorio); // Agrega cada carácter aleatorio a la variable captcha
    }
    return captcha;
};

// Genera y muestra el captcha inicial
let captcha = generarCaptcha();
captchaspan.textContent = captcha;

btn_enviar.addEventListener("click", function (event) {
    event.preventDefault();

    // Verifica si el captcha ingresado es correcto
    if (captchainput.value === captcha) {
        console.log("Captcha ingresado correctamente");

        // Verifica que los campos no estén vacíos
        if (nombreinput.value !== "" && email.value !== "" && username.value !== "" && password.value !== "") {
            let datos = {
                nombre: nombreinput.value,
                email: email.value,
                username: username.value,
                password: password.value,
            };

            usuarios.push(datos);
            console.log(usuarios);

            localStorage.setItem("Usuarios", JSON.stringify(usuarios));

            // Limpia los campos del formulario después del envío
            nombreinput.value = "";
            email.value = "";
            username.value = "";
            password.value = "";
            captchainput.value = "";

            // Genera un nuevo captcha para la próxima validación
            captcha = generarCaptcha();
            captchaspan.textContent = captcha;

        } else {
            console.log("Todos los campos son obligatorios.");
        }
    } else {
        console.log("Captcha incorrecto");
        // Limpia los campos del formulario después del envío
        nombreinput.value = "";
        email.value = "";
        username.value = "";
        password.value = "";
        captchainput.value = "";
    }
});
