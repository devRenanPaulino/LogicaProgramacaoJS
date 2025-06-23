function calcular(){
    const valorA = parseFloat(document.getElementById('valorA').value.replace(',','.'));
    const valorB = parseFloat(document.getElementById('valorB').value.replace(',','.'));
    const valorC = parseFloat(document.getElementById('valorC').value.replace(',','.'));

    let soma = valorA + valorB + valorC;
    let quadrado = Math.pow(soma,2);

    document.getElementById('resultado').textContent=`A soma dos valores é: ${soma.toFixed(2)} e seu quadrado é: ${quadrado.toFixed(2)}`;
}