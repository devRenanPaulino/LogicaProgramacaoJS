function ordenarValores() {
  const num1 = parseFloat(document.getElementById("numero1").value);
  const num2 = parseFloat(document.getElementById("numero2").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(num1) || isNaN(num2)) {
    resultado.innerText = "Por favor, insira dois números válidos.";
    resultado.style.color = "#ff6a00";
    return;
  }

  if (num1 === num2) {
    resultado.innerText = "Os números não podem ser iguais.";
    resultado.style.color = "#ff6a00";
    return;
  }

  const menor = num1 < num2 ? num1 : num2;
  const maior = num1 > num2 ? num1 : num2;

  resultado.innerText = `Ordem crescente: ${menor.toFixed(2)}, ${maior.toFixed(2)}`;
}