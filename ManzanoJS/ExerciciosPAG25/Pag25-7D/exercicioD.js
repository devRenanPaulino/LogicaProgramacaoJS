function calcular() {
    const tempo = parseFloat(document.getElementById("tempo").value.replace(',','.'));
    const velocidade = parseFloat(document.getElementById("velocidade").value.replace(',','.'));
    const resultado = document.getElementById('resultado');

    if (isNaN(tempo) || isNaN(velocidade) || tempo <= 0 || velocidade <= 0) {
        resultado.textContent = "Digite valores válidos e maiores que 0.";
        return;
    };

    const distancia = velocidade * tempo;
    const litrosUsados = distancia / 12;

    resultado.innerHTML = `
        <strong>Resultado:</strong><br>
        Tempo de viagem: <strong>${tempo.toFixed(2)} h</strong><br>
        Velocidade média: <strong>${velocidade.toFixed(2)} km/h</strong><br>
        Distância percorrida: <strong>${distancia.toFixed(2)} km</strong><br>
        Combustível utilizado: <strong>${litrosUsados.toFixed(2)} litros</strong>
    `;

}