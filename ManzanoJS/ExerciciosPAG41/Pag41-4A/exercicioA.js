function calcular() {
    const valorA = parseFloat(document.getElementById('valorA').value.replace(',','.'));
    const valorB = parseFloat(document.getElementById('valorB').value.replace(',','.'));

    if (isNaN(valorA) || isNaN(valorB)){
        document.getElementById("resultado").textContent="Digite valores válidos";
        return;
    }

    let diferenca = valorA >= valorB ? valorA - valorB : valorB - valorA;

    document.getElementById('resultado').textContent=`A diferenca de ${valorA.toFixed(2)} para ${valorB.toFixed(2)} é de: ${diferenca.toFixed(2)}`
}