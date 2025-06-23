function converter(){
    const celcius = parseFloat(document.getElementById('celcius').value);

    if (isNaN(celcius) || celcius > 100 || celcius < -273.15 )  {
        document.getElementById('resultado').textContent="Por favor insira um valor válido dentro da escala celcius."
        return;
    }

    const fahrenheit = (9*celcius)/5 + 32;
    document.getElementById('resultado').textContent=`${celcius.toFixed(1)}°C = ${fahrenheit.toFixed(1)}°F`
}