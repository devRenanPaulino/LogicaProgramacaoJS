function verificarMaior() {
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);

    const maior = numero1 > numero2 ? numero1 : numero2;
    const mensagem = `O maior número é: ${maior}`;
    document.getElementById("resultado").innerText = mensagem;
}