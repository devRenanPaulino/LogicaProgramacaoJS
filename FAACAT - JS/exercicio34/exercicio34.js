function calcularZ() {
  const x = parseInt(document.getElementById("x").value);
  const y = parseInt(document.getElementById("y").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(x) || isNaN(y)) {
    resultado.innerHTML = `<p class="erro">Digite valores válidos para X e Y.</p>`;
    return;
  }

  const z = (x * y) + 5;

  const resposta = (z <= 0) ? "A" : (z <= 100) ? "B" : "C";

  resultado.innerHTML = `
    <p class="info">Z = ${z}</p>
    <p class="resposta">Resposta: <strong>${resposta}</strong></p>
  `;
}