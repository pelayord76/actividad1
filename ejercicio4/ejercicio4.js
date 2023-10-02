var operandoA = parseInt(prompt("Introduce un operando:"));
var operandoB = parseInt(prompt("Introduce el segundo operando:"));
var operador = prompt("Introduce el signo del operador ('+', '-', '*', '/', 'FIN'):");
var resultado = 0;

while (operador != "FIN") {
    validaOperador();
    switch (operador) {
        case "+":
            resultado = operandoA + operandoB;
            operandoA = resultado;
            console.log(resultado);
            operandoB = parseInt(prompt("Resultado = " + resultado + ". Introduce un nuevo operando:"));
            operador = prompt("Introduce un nuevo operador ('+', '-', '*', '/', 'FIN'):");
            break;

        case "-":
            resultado = operandoA - operandoB;
            operandoA = resultado;
            console.log(resultado);
            operandoB = parseInt(prompt("Resultado = " + resultado + ". Introduce un nuevo operando:"));
            operador = prompt("Introduce un nuevo operador ('+', '-', '*', '/', 'FIN'):");
            break;

        case "*":
            resultado = operandoA * operandoB;
            operandoA = resultado;
            console.log(resultado);
            operandoB = parseInt(prompt("Resultado = " + resultado + ". Introduce un nuevo operando:"));
            operador = prompt("Introduce un nuevo operador ('+', '-', '*', '/', 'FIN'):");
            break;

        case "/":
            if (divisionValida()) {
                resultado = operandoA / operandoB;
                operandoA = resultado;
                console.log(resultado);
                operandoB = parseInt(prompt("Resultado = " + resultado + ". Introduce un nuevo operando:"));
                operador = prompt("Introduce un nuevo operador ('+', '-', '*', '/', 'FIN'):");
            }
    }
}

function validaOperador() {
    if (operador == "+" || operador == "-" || operador == "*" || operador == "/" || operador == "FIN") {
        if (operador == "/") {
            while (!divisionValida(operandoB)) operandoB = prompt("Division invalida: introduzca un operando que no sea nulo:");
        }
        return true;
    }
    else while (operador != "+" || operador != "-" || operador != "*" || operador != "/" || operador != "FIN") operador = prompt("Error: Introduce un operador válido ('+', '-', '*', '/', 'FIN'):")
}

function divisionValida() {
    if (operandoB === null) return false;
    else return true;
}