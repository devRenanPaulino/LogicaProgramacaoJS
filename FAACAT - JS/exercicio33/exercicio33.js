function comparar() {
  const a = parseFloat(document.getElementById('num1').value);
  const b = parseFloat(document.getElementById('num2').value);
  const resultado = document.getElementById('resultado');

  if (isNaN(a) || isNaN(b)) {
    resultado.innerHTML = `<p class="erro">Preencha ambos os campos com números válidos.</p>`;
    return;
  }

  const mensagem = (a === b)
    ? "Números iguais"
    : (a > b)
      ? "Primeiro é maior"
      : "Segundo é maior";

  resultado.innerHTML = `<p class="mensagem">${mensagem}</p>`;
}