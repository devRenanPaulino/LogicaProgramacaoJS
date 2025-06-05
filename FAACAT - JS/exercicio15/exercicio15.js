function verificar() {
  const input = document.getElementById("numeroInput").value;
  const numero = parseFloat(input);
  const resultado = document.getElementById("resultado");

  if (isNaN(numero)) {
    resultado.innerText = "Por favor, insira um número válido.";
    resultado.style.color = "red";
    return;
  }

  if (numero > 0) {
    resultado.innerText = `O número ${numero} é positivo.`;
    resultado.style.color = "limegreen";
  } else if (numero < 0) {
    resultado.innerText = `O número ${numero} é negativo.`;
    resultado.style.color = "red";
  } else {
    resultado.innerText = "O número é zero.";
  }
}