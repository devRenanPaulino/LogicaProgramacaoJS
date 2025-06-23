document.getElementById('calcular').addEventListener('click', calcular);

function calcular(){
    const valorA = parseFloat(document.getElementById('valorA').value.replace(',','.'));
    const valorB = parseFloat(document.getElementById('valorB').value.replace(',','.'));
    const valorC = parseFloat(document.getElementById('valorC').value.replace(',','.'));
    const resultado = document.getElementById('resultado');

    if (isNaN(valorA) || isNaN(valorB) || isNaN(valorC)){
        resultado.textContent = "Preencha os campos corretamente!";
        return;
    }

    if (valorA === 0) {
        resultado.textContent= "O coeficiente A deve ser diferente de zero!";
        return;
    }

    const delta = Math.pow(valorB, 2) - 4 * valorA * valorC;

    if ( delta > 0){
        const x1 = ((-valorB + Math.sqrt(delta)) / (2 * valorA));
        const x2 = ((-valorB - Math.sqrt(delta)) / (2 * valorA));

        resultado.innerHTML = `As duas raizes reais:<br> x1 = ${x1.toFixed(2)}<br> x2 = ${x2.toFixed(2)}`;
    } else if (delta === 0) {
        const x = -valorB / (2*valorA);

        resultado.innerHTML= `Raiz dupla:<br>x = ${x.toFixed(2)}`
    } else {
        const parteReal = (-valorB / (2 * valorA)).toFixed(2);
        const parteImaginaria = (Math.sqrt(Math.abs(delta)) / (2 * valorA)).toFixed(2);
        resultado.innerHTML = `
        Raízes complexas:<br>
        x1 = ${parteReal} + ${parteImaginaria}i<br>
        x2 = ${parteReal} - ${parteImaginaria}i `;
    };
}