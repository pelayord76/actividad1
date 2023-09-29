var num = prompt("Introduce un número entero:");

esEntero();
esPositivo();
alert(sumatorio());

function esEntero() {
    let resultado = false;

    if (parseInt(num) == num) resultado = true;
    else console.error("El número introducido no es entero.");

    return resultado;
}

function esPositivo() {
    let resultado = false;

    if(num > 0) resultado = true;
    else console.error("El número introducido no es positivo.");

    return resultado;
}

function sumatorio(){
    let resultado = 0;
    for(let i = 0; i < num; i ++){
        resultado += i;
    }
    return resultado;
}