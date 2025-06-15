function verificarNumero() {
  const numero = parseFloat(document.getElementById("numero").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(numero)) {
    resultado.innerText = "Por favor, digite um número válido.";
    resultado.className = "";
    return;
  }

  const mensagem = numero >= 0
    ? `O número ${numero.toFixed(2)} é positivo!`
    : `O número ${numero.toFixed(2)} é negativo!`;

  resultado.innerText = mensagem;
  resultado.className = numero >= 0 ? "positivo" : "negativo";
}