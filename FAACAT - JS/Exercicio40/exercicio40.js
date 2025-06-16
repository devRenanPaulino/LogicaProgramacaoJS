function calcular() {
  const produto = document.getElementById("produto").value;
  const quantidade = parseInt(document.getElementById("quantidade").value);
  const preco = parseFloat(document.getElementById("preco").value);
  const resultado = document.getElementById("resultado");

  if (!produto || isNaN(quantidade) || isNaN(preco) || quantidade <= 0 || preco <= 0) {
    resultado.innerHTML = "<strong>preencha todos os campos corretamente.</strong>";
    return;
  }

  const total = quantidade * preco;

  let descontoPorcentagem = 0;

  if (quantidade <= 5) {
    descontoPorcentagem = 0.02;
  } else if (quantidade <= 10) {
    descontoPorcentagem = 0.03;
  } else {
    descontoPorcentagem = 0.05;
  }

  const desconto = total * descontoPorcentagem;
  const totalFinal = total - desconto;

  resultado.innerHTML = `
    <strong>Produto:</strong> ${produto}<br>
    <strong>Quantidade:</strong> ${quantidade}<br>
    <strong>Preço Unitário:</strong> R$ ${preco.toFixed(2)}<br>
    <strong>Total Bruto:</strong> R$ ${total.toFixed(2)}<br>
    <strong>Desconto (${(descontoPorcentagem * 100).toFixed(0)}%):</strong> R$ ${desconto.toFixed(2)}<br>
    <strong>Total a Pagar:</strong> R$ ${totalFinal.toFixed(2)}
  `;
}