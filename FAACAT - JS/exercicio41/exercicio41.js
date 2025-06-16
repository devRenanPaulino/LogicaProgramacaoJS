function calcularMedia() {
  const nota1 = parseFloat(document.getElementById("nota1").value);
  const nota2 = parseFloat(document.getElementById("nota2").value);
  const nota3 = parseFloat(document.getElementById("nota3").value);
  const ex = parseFloat(document.getElementById("ex").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(ex)) {
    resultado.innerHTML = "<p class='erro'>Preencha todas as notas corretamente (Apenas com números).</p>";
    return;
  }

  const media = (nota1 + (nota2 * 2) + (nota3 * 3) + ex) / 7;
  let conceito;

  if (media >= 9.0) {
    conceito = "A";
  } else if (media >= 7.5) {
    conceito = "B";
  } else if (media >= 6.0) {
    conceito = "C";
  } else {
    conceito = "D";
  }

  resultado.innerHTML = `
    <p><strong>Média de Aproveitamento:</strong> ${media.toFixed(2)}</p>
    <p><strong>Conceito:</strong> <span class="conceito">${conceito}</span></p>
  `;
}