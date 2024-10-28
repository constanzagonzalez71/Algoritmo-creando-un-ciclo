function calcularIncrementos() {
    let numero = parseInt(prompt("Ingresa un número inicial:"));
    const incremento = 10;  // Valor fijo que se suma en cada repetición
    const repeticiones = 5;  // Cantidad de veces que se realizará la operación

    // Limpia el área de resultados
    document.getElementById("resultados").innerHTML = "";

    if (!isNaN(numero)) {
        let resultados = "";

        // Ciclo para realizar la suma en cada repetición
        for (let i = 1; i <= repeticiones; i++) {
            numero += incremento;
            resultados += `Resultado de la repetición ${i}: ${numero} <br>`;
        }

        document.getElementById("resultados").innerHTML = resultados;
    } else {
        document.getElementById("resultados").innerHTML = "Por favor ingresa un número válido.";
    }
}
