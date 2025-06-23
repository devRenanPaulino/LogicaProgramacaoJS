function trocar(){
    const tipo = document.getElementById('tipo').value;
    let valorA = document.getElementById('valorA').value;
    let valorB = document.getElementById('valorB').value;
    const resultado = document.getElementById('resultado');

    if (valorA === "" || valorB === "") {
        resultado.textContent = "Preencha ambos os valores.";
        return;
    }

    if (tipo === "int") {
        valorA = parseInt(valorA);
        valorB = parseInt(valorB);
        if (isNaN(valorA) || isNaN(valorB)) {
          resultado.textContent = "Digite valores inteiros válidos.";
          return;
        }
    }

    if (tipo === "float") {
        valorA = parseFloat(valorA.replace(',', '.'));
        valorB = parseFloat(valorB.replace(',', '.'));
        if (isNaN(valorA) || isNaN(valorB)) {
          resultado.textContent = "Digite valores reais válidos.";
          return;
        }
    }   

    let temp = valorA;
      valorA = valorB;
      valorB = temp;

      resultado.innerHTML = `
        <p>Valores trocados:</p>
        <p><strong>Valor A:</strong> ${valorA}</p>
        <p><strong>Valor B:</strong> ${valorB}</p>
    `;

}