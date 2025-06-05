function verificarVoto () {
  const anoNascimento = parseInt(document.getElementById("anoNascimento").value);
  const anoAtual = parseInt(document.getElementById("anoAtual").value);
  const resultado = document.getElementById("resultado");

  const idade = anoAtual - anoNascimento;

  const mensagem = isNaN(idade) || idade < 0
    ? "Preencha os dois campos com anos válidos."
    : idade < 16
      ? "Você não pode votar."
      : idade < 18
        ? "Você pode votar, mas o voto é opcional."
        : "Você deve votar.";

  resposta.innerText = mensagem;
}