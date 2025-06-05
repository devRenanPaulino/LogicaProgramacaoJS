function calcularReajuste() {
  const salario = parseFloat(document.getElementById("salario").value);
  const percentual = parseFloat(document.getElementById("percentual").value);

  if (isNaN(salario) || isNaN(percentual) || salario < 0 || percentual < 0) {
    alert("Por favor, preencha os valores corretamente.");
    return;
  }

  const valorReajuste = (percentual / 100) * salario;
  const novoSalario = valorReajuste + salario;

  document.getElementById("resultado").innerText =
    `O valor do reajuste é R$ ${valorReajuste.toFixed(2)} e o salário total ficou em R$ ${novoSalario.toFixed(2)}.`;
}