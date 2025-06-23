document.getElementById('mostrar').addEventListener('click', mostrar);

function mostrar() {
    const valor = parseInt(document.getElementById('valor').value.replace(",","."));

    if (isNaN(valor) || valor > 3) {
        document.getElementById('resultado').textContent="O valor está fora da faixa permitida!"
        resultado.style = 'color: red;';
    } else {
        document.getElementById('resultado').textContent="O valor está dentro da faixa permitida!"
        resultado.style = 'color: green;';
    };
}