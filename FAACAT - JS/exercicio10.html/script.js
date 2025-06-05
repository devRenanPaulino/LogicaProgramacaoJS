function calcularCustoFinal() {
  const custoFabrica = parseFloat(document.getElementById("custoFabrica").value);

  if (isNaN(custoFabrica) || custoFabrica < 0) {
    alert("Por favor, digite um valor válido para o custo de fábrica.");
    return;
  }

  const percentualDistribuidor = 28;
  const imposto = 45;

  const custoFinal =
    custoFabrica +
    (percentualDistribuidor / 100) * custoFabrica +
    (imposto / 100) * custoFabrica;

  document.getElementById("resultado").innerText =
    `O valor final do carro para a venda é de R$ ${custoFinal.toFixed(2)}.`;
}