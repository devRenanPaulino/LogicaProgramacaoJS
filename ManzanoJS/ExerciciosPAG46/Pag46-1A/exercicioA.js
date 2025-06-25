document.getElementById('mostrar').addEventListener('click', mostrar);

function mostrar(){
    const valor = parseInt(document.getElementById('valor').value);
    const resultadoDiv = document.getElementById('resultado');

    if (isNaN(valor)) {
        resultadoDiv.textContent = "Digite um número válido!";
        return;
    }

    let contadora = 1;
    let texto = '';

    do {
        const resultado = valor * contadora;
        texto += `${valor} x ${contadora} = ${resultado}\n`;
        contadora++;
    } while (contadora <= 10);

    resultadoDiv.textContent = texto;
}