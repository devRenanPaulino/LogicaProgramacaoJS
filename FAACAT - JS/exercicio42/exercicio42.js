function verificarAposentadoria() {
  const codigo = document.getElementById("codigo").value;
  const nascimento = parseInt(document.getElementById("nascimento").value);
  const ingresso = parseInt(document.getElementById("ingresso").value);
  const anoAtual = 2025;

  if (!codigo || isNaN(nascimento) || isNaN(ingresso)) {
    document.getElementById("resultado").innerHTML = "<p style='color:red;'>Preencha todos os campos corretamente.</p>";
    return;
  }

  const idade = anoAtual - nascimento;
  const tempoTrabalho = anoAtual - ingresso;

  const requer =
    idade >= 65 || tempoTrabalho >= 30 || (idade >= 60 && tempoTrabalho >= 25);

  document.getElementById("resultado").innerHTML = `
    <p><strong>Código do empregado:</strong> ${codigo}</p>
    <p><strong>Idade:</strong> ${idade} anos</p>
    <p><strong>Tempo de trabalho:</strong> ${tempoTrabalho} anos</p>
    <p><strong>Situação:</strong> ${
      requer ? "Requerer aposentadoria." : "Não requerer."
    }</p>
  `;
}