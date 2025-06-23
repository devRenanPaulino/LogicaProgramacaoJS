function calcular() {
    const cotacaoInput = document.getElementById('cotacao').value.trim().replace(',', '.');
    const dolarInput = document.getElementById('dolar').value.trim().replace(',', '.');

    const cotacao = parseFloat(cotacaoInput);
    const dolar = parseFloat(dolarInput);

    if (isNaN(dolar) || isNaN(cotacao) || dolar <= 0) {
        document.getElementById('resultado').textContent = "Digite um valor maior do que zero ou em numeros reais troque a vírgula por ponto";
        return;
    }

    const conversao = dolar * cotacao;

    document.getElementById('resultado').textContent =
        `O valor de USD ${dolar.toFixed(2)} em reais é R$ ${conversao.toFixed(2)}`;
}