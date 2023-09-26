function converterCelsiusParaFahrenheit() {
    const celsiusInput = document.getElementById("celsiusInput");
    const resultado = document.getElementById("resultadoCelsiusToFahrenheit");

    if (celsiusInput.value === "") {
        resultado.textContent = "Por favor, insira uma temperatura em Celsius.";
        return;
    }

    const celsius = parseFloat(celsiusInput.value);
    const fahrenheit = (celsius * 9/5) + 32;

    resultado.textContent = `${celsius} graus Celsius são equivalentes a ${fahrenheit.toFixed(2)} graus Fahrenheit.`;
}

function converterFahrenheitParaCelsius() {
    const fahrenheitInput = document.getElementById("fahrenheitInput");
    const resultado = document.getElementById("resultadoFahrenheitToCelsius");

    if (fahrenheitInput.value === "") {
        resultado.textContent = "Por favor, insira uma temperatura em Fahrenheit.";
        return;
    }

    const fahrenheit = parseFloat(fahrenheitInput.value);
    const celsius = (fahrenheit - 32) * 5/9;

    resultado.textContent = `${fahrenheit} graus Fahrenheit são equivalentes a ${celsius.toFixed(2)} graus Celsius.`;
}
