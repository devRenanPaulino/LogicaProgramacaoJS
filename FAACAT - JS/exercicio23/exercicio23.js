function calcularPesoIdeal() {
  const sexo = document.getElementById("sexo").value;
  const altura = parseFloat(document.getElementById("altura").value);
  const resultado = document.getElementById("resultado");

  if (!sexo || isNaN(altura) || altura <= 0) {
    resultado.innerText = "Preencha os dados corretamente.";
    return;
  }

  const pesoIdeal = sexo === "M"
    ? (72.7 * altura - 58).toFixed(2)
    : sexo === "F"
      ? (62.1 * altura - 44.7).toFixed(2)
      : null;

  resultado.innerText = pesoIdeal
    ? `Seu peso ideal é: ${pesoIdeal} kg.`
    : "Sexo inválido.";
}