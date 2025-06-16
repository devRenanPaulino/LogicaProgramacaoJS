function calcularPreco() {
  const litros = parseFloat(document.getElementById("litros").value);
  const tipo = document.getElementById("combustivel").value;
  const resultado = document.getElementById("resultado");

  if (isNaN(litros) || litros <= 0 || (tipo !== "A" && tipo !== "G")) {
    resultado.innerHTML = `<p class="erro">Preencha corretamente os campos.</p>`;
    return;
  }

  const precoAlcool = 2.90;
  const precoGasolina = 3.30;

  let precoLitro = 0;
  let desconto = 0;

  if (tipo === "A") {
    precoLitro = precoAlcool;
    desconto = litros <= 20 ? 0.03 : 0.05;
  } else if (tipo === "G") {
    precoLitro = precoGasolina;
    desconto = litros <= 20 ? 0.04 : 0.06;
  }

  const precoSemDesconto = litros * precoLitro;
  const valorDesconto = precoSemDesconto * desconto;
  const precoFinal = precoSemDesconto - valorDesconto;

  resultado.innerHTML = `
    <p><strong>Preço sem desconto:</strong> R$ ${precoSemDesconto.toFixed(2)}</p>
    <p><strong>Desconto aplicado:</strong> R$ ${valorDesconto.toFixed(2)}</p>
    <p class="final"><strong>Valor total a pagar:</strong> R$ ${precoFinal.toFixed(2)}</p>
  `;
}