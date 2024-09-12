console.log('Start...')
let username = document.querySelector('#username');
let password = document.querySelector('#password')
let btn_login = document.querySelector('#btn-login');
let msjerror = document.querySelector('#msj-error')

// obtener base de datos
function obtener_localstorage() {
    const basededatos = localStorage.getItem("Usuarios")
    const data = JSON.parse(basededatos)
    return data;
}

const data = obtener_localstorage()
console.log(data)
// Login

btn_login.addEventListener("click", function (e) {
    e.preventDefault()

    const nombre_de_usuario = username.value;
    const contraseña = password.value;

    console.log(nombre_de_usuario)
    console.log(contraseña)

    if (nombre_de_usuario === data[0].username && contraseña === data[0].password) {
        console.log("Login correcto, se encontró coincidencia en la base de datos con el username y password que ingresaste.")
        msjerror.innerHTML = "Se ha encontrado coincidencia. Inicio de sesión exitoso.";
        msjerror.style.color = "green"
    }
    else {
        console.log("login incorrecto, username o contraseña no coinciden")
        msjerror.innerHTML = "No se ha encontrado coincidencia. Vuelve a intentar."
        msjerror.style.color = "red";
    }

    username.value = "";
    password.value = "";
})

