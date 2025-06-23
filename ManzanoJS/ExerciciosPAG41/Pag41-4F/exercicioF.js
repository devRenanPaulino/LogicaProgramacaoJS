document.getElementById('ordenarBtn').addEventListener('click', ordenar);

function ordenar() {
    const valorA = parseFloat(document.getElementById('valorA').value);
    const valorB = parseFloat(document.getElementById('valorB').value);
    const valorC = parseFloat(document.getElementById('valorC').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(valorA) || isNaN(valorB) || isNaN(valorC)) {
        resultado.textContent = "Preencha os 3 valores corretamente.";
        return;
    }

    const valores = [valorA, valorB, valorC];

    valores.sort((a, b) => a - b);

    resultado.textContent = `Ordem crescente: ${valores.join(', ')}`;
}