document.getElementById('Mostrar').addEventListener('click', mostrar);

function mostrar(){
    const valores = [
        parseFloat(document.getElementById('valorA').value.replace(',','.')),
        parseFloat(document.getElementById('valorB').value.replace(',','.')),
        parseFloat(document.getElementById('valorC').value.replace(',','.')),
        parseFloat(document.getElementById('valorD').value.replace(',','.')),
        parseFloat(document.getElementById('valorE').value.replace(',','.')),
    ];

    if (valores.some(isNaN)){
        document.getElementById('resultado').textContent='Preencha corretamente todos os campos!';
        return;
    }

    valores.sort((a, b) => a - b);

    document.getElementById('resultado').textContent=`O menor número é ${valores[0]} e o maior é ${valores[4]}`
}