const LOGINS = ["pepe", "paco", "juan", "benito", "manuel"];
const PASSWORDS = ["12345", "23456", "09876", "67890", "666666"];

var contador = 0;
var login;
var password;

run(login, password);

function run(login, password) {

    login = prompt("Nombre de usuario:");

    while (!existeLogin(login) && contador < 5) {
        contador++;
        alert("El nombre de ususario no existe");
        login = prompt("Nombre de usuario:");
    }

    password = prompt("Contraseña:");
    while (!passwordCorrecto(password, login) && contador < 5) {
        contador++;
        alert("El nombre de usuario no coincide con la contraseña.");
        password = prompt("Contraseña:");
    }

    if(contador >= 5) alert("Limite de intentos alcanzado.");
    else alert("Usuario y contraseña correctos.");
}

function existeLogin(login) {
    let resultado = false;
    for (let i = 0; i < 5; i++) {
        if (LOGINS[i] === login) resultado = true;
    }
    return resultado;
}

function passwordCorrecto(password, login) {
    let resultado = false;
    for (let i = 0; i < 5; i++) {
        if (PASSWORDS[i] === password && LOGINS[i] === login) {
            resultado = true;
        }
    }
    return resultado;
}