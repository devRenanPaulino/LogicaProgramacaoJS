document.getElementById('mostrar').addEventListener('click', mostrar);

function mostrar() {
    const valor = parseFloat(document.getElementById('valor').value.replace(',','.'));

    if (valor > 9 || valor < 1) {
        document.getElementById('resultado').textContent='O valor está fora da faixa permitida!';
        return;
    } else {
         document.getElementById('resultado').textContent='O valor está dentro da faixa permitida!';
        return;
    };
}