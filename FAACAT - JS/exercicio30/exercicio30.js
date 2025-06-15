function ordenarValores() {
    const v1 = parseInt(document.getElementById("valor1").value);
    const v2 = parseInt(document.getElementById("valor2").value);
    const v3 = parseInt(document.getElementById("valor3").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(v1) || isNaN(v2) || isNaN(v3)) {
        resultado.innerHTML = `<span class="erro">Por favor, preencha todos os valores corretamente.</span>`;
        return;
    }

    const valores = [v1, v2, v3];
    valores.sort((a, b) => a - b);

    resultado.innerHTML = `
        <span class="ordem">Valores em ordem crescente:</span><br>
        ${valores.join(" → ")}
    `;
}