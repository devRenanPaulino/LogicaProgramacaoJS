function calcularDuracao() {
  const inicio = parseInt(document.getElementById("inicio").value);
  const fim = parseInt(document.getElementById("fim").value);
  const resultado = document.getElementById("resultado");

  if (
    isNaN(inicio) || isNaN(fim) ||
    inicio < 0 || inicio > 24 || fim < 0 || fim > 24
  ) {
    resultado.innerText = "Digite horas válidas entre 0 e 24.";
    return;
  }

  const duracao = inicio === fim
    ? 24
    : fim > inicio
      ? fim - inicio
      : 24 - inicio + fim;

  resultado.innerText = `A duração do jogo foi de ${duracao} hora(s).`;
}