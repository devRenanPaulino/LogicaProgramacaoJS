function calcularSalarioFinal() {
  const salarioFixo = parseFloat(document.getElementById("salarioFixo").value);
  const totalVendido = parseInt(document.getElementById("totalVendido").value);
  const totalVendas = parseFloat(document.getElementById("totalVendas").value);
  const comissaoFixa = parseFloat(document.getElementById("comissaoFixa").value);

  if (
    isNaN(salarioFixo) || isNaN(totalVendido) ||
    isNaN(totalVendas) || isNaN(comissaoFixa) ||
    salarioFixo < 0 || totalVendido < 0 ||
    totalVendas < 0 || comissaoFixa < 0
  ) {
    alert("Preencha todos os campos corretamente com valores válidos.");
    return;
  }

  const comissaoPorVenda = 0.05 * totalVendas;
  const salarioFinal = salarioFixo + (totalVendido * comissaoFixa) + comissaoPorVenda;

  document.getElementById("resultado").innerText =
    `O salário final do empregado é R$ ${salarioFinal.toFixed(2)}.`;
}
