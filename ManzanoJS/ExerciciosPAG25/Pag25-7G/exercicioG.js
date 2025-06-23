function calcular() {
    const valores = [
        parseFloat(document.getElementById('valorA').value),
        parseFloat(document.getElementById('valorB').value),
        parseFloat(document.getElementById('valorC').value),
        parseFloat(document.getElementById('valorD').value),
    ];

    const nomes = ["A", "B", "C", "D"];
    const resultado = document.getElementById('resultados');
    resultado.innerHTML = "";

    if (valores.some(isNaN)) {
        resultado.innerHTML = "Preencha todos os campos corretamente com números.";
        return;
    }

    let somas = "<div class='titulo'>SOMAS:</div>";
    let multiplicacao = "<div class='titulo'>MULTIPLICAÇÕES:</div>";

    for (let primeiroIndice = 0; primeiroIndice < valores.length; primeiroIndice++) {
        for (let segundoIndice = primeiroIndice + 1; segundoIndice < valores.length; segundoIndice++) {
            const nome1 = nomes[primeiroIndice];
            const nome2 = nomes[segundoIndice];

            const soma = valores[primeiroIndice] + valores[segundoIndice];
            const produto = valores[primeiroIndice] * valores[segundoIndice];

            somas += `${nome1} + ${nome2} = ${soma}<br>`;
            multiplicacao += `${nome1} x ${nome2} = ${produto}<br>`;
        }
    }

    resultado.innerHTML = somas + "<br>" + multiplicacao;
}