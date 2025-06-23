document.getElementById('mostrar').addEventListener('click', mostrar);

function mostrar(){
    const valor = parseFloat(document.getElementById('valor').value);

    const revelar = (valor % 2 == 0) ? 'par' : 'ímpar';

    document.getElementById('resultado').textContent=`O número ${valor} é ${revelar}`;
}