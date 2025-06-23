function calcular(){
    const valorA = parseFloat(document.getElementById('valorA').value.replace(',','.'));
    const valorB = parseFloat(document.getElementById('valorB').value.replace(',','.'));
    const resultado = document.getElementById('resultado');

    let diferenca = valorA - valorB;
    let quadrado = Math.pow(diferenca,2);

    resultado.textContent = `A diferença de A e B é: ${diferenca} e o quadrado de ${diferenca} é: ${quadrado}`

}