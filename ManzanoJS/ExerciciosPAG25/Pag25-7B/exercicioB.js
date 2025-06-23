function converter(){
    const fahrenheit = parseFloat(document.getElementById('fahrenheit').value);

    if (isNaN(fahrenheit) || fahrenheit > 212 || fahrenheit < -459.67 )  {
        document.getElementById('resultado').textContent="Por favor insira um valor válido dentro da escala fahrenheit."
        return;
    }

    const celcius = (fahrenheit-32) * 0.5556;
    document.getElementById('resultado').textContent=`${fahrenheit.toFixed(1)}°F = ${celcius.toFixed(1)}°C`
}