function verificarMaior() {
  const n1 = parseInt(document.getElementById('numero1').value);
  const n2 = parseInt(document.getElementById('numero2').value);
  const n3 = parseInt(document.getElementById('numero3').value);
  const resultado = document.getElementById('resultado');

  const maior = (n1 > n2 && n1 > n3) ? n1 : (n2 > n3 ? n2 : n3);

  resultado.textContent = `O maior valor é: ${maior}`;
}
