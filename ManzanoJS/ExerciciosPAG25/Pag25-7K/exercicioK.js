function calcular() {
    const cotacaoInput = document.getElementById('cotacao').value.trim().replace(',', '.');
    const realInput = document.getElementById('real').value.trim().replace(',', '.');

    const cotacao = parseFloat(cotacaoInput);
    const real = parseFloat(realInput);

    if (isNaN(real) || isNaN(cotacao) || real <= 0) {
        document.getElementById('resultado').textContent = "Digite um valor maior do que zero ou em numeros reais troque a vírgula por ponto";
        return;
    }

    const conversao = real / cotacao;

    document.getElementById('resultado').textContent =
        `O valor de R$: ${real.toFixed(2)} em dolar é USD: ${conversao.toFixed(2)}`;
}