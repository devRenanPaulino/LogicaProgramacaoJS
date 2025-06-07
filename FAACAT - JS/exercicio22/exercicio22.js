function calcularSalario() {
  const salarioBase = parseFloat(document.getElementById("salarioBase").value);
  const horasTrabalhadas = parseFloat(document.getElementById("horasTrabalhadas").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(salarioBase) || isNaN(horasTrabalhadas) || salarioBase < 0 || horasTrabalhadas < 0) {
    resultado.innerText = "Preencha os campos com valores válidos.";
    resultado.style.color = "red";
    return;
  }

  const horasMensais = 160;
  const valorHora = salarioBase / horasMensais;
  const horasExtras = horasTrabalhadas > horasMensais ? horasTrabalhadas - horasMensais : 0;
  const salarioFinal = salarioBase + (horasExtras * valorHora * 1.5);

  resultado.innerText = `O salário total com horas extras é R$ ${salarioFinal.toFixed(2)}`;
  resultado.style.color = "black";
}