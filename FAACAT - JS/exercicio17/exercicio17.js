function verificarAprovacao () {
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);

    if (isNaN(nota1) || isNaN(nota2) || nota1 < 0 || nota2 < 0) {
        resultado.innerText = "Digite notas válidas (0 ou mais).";
        return;
    }

    const media = (nota1 + nota2) / 2;
    const situacao = media >= 6 ? "Aluno aprovado" : "Aluno reprovado";

  resultado.innerText = `Média: ${media.toFixed(2)} — ${situacao}`;
  resultado.style.color = media >= 6 ? "white" : "red";
}