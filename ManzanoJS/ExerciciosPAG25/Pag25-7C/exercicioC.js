function calcular(){
    const raio = parseFloat(document.getElementById("raio").value.replace(',','.'));
    const altura = parseFloat(document.getElementById("altura").value.replace(',', '.'));

    if (isNaN(raio) || isNaN(altura) || raio <= 0 || altura <= 0) {
        document.getElementById("resultado").textContent="Valor Inválido para raio ou altura";
        return;
    }

    const volume = Math.PI * Math.pow(raio, 2) * altura;
    document.getElementById("resultado").textContent = `O volume do cilindro é ${volume.toFixed(2)}cm³.`;
}