function calcularMedia() {
  const nota1 = parseFloat(document.getElementById("nota1").value);
  const nota2 = parseFloat(document.getElementById("nota2").value);
  const nota3 = parseFloat(document.getElementById("nota3").value);

  if (
    isNaN(nota1) || isNaN(nota2) || isNaN(nota3) ||
    nota1 < 0 || nota2 < 0 || nota3 < 0
  ) {
    alert("Digite todas as notas corretamente.");
    return;
  }

  const mediaFinal = (nota1 * 2 + nota2 * 3 + nota3 * 5) / 10;

  document.getElementById("resultado").innerText =
    `A média das notas ${nota1.toFixed(2)}, ${nota2.toFixed(2)} e ${nota3.toFixed(2)} é igual a: ${mediaFinal.toFixed(2)}`;
}