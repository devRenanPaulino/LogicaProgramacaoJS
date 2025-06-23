function calcular(){
    const valorA = parseFloat(document.getElementById('valorA').value.replace(',','.'));
    const valorB = parseFloat(document.getElementById('valorB').value.replace(',','.'));
    const valorC = parseFloat(document.getElementById('valorC').value.replace(',','.'));

    let soma = (valorA * valorA) + (valorB * valorB) + (valorC * valorC);

    document.getElementById('resultado').textContent=`A soma dos quadrados é: ${soma.toFixed(2)}`;
}