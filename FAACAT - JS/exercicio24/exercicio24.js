function calcularSalario() {
  const salarioFixo = parseFloat(document.getElementById('salarioFixo').value);
  const totalVendas = parseFloat(document.getElementById('totalVendas').value);
  const resultado = document.getElementById('resultado');

  if (isNaN(salarioFixo) || isNaN(totalVendas)) {
    resultado.textContent = "Por favor, preencha todos os campos corretamente.";
    return;
  }

  let comissao;

  if (totalVendas <= 1500) {
    comissao = totalVendas * 0.03;
  } else {
    comissao = 1500 * 0.03 + (totalVendas - 1500) * 0.05;
  }

  const salarioTotal = salarioFixo + comissao;

  resultado.textContent = `Total a receber: R$ ${salarioTotal.toFixed(2)}`;
}