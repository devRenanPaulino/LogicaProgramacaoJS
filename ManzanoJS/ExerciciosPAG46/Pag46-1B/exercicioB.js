function mostrar(){
    let contadora = 1;
    let resultado = 0;

    do {
        resultado = resultado + contadora;
        contadora++;
    } while (contadora <= 100);

    document.getElementById('resultado').textContent= `A soma dos 100 primeiros números é: ${resultado}`;
}