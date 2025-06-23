function verificar() {
    const n1 = parseFloat(document.getElementById('nota1').value.replace(',', '.'));
    const n2 = parseFloat(document.getElementById('nota2').value.replace(',', '.'));
    const n3 = parseFloat(document.getElementById('nota3').value.replace(',', '.'));
    const n4 = parseFloat(document.getElementById('nota4').value.replace(',', '.'));

    const resultado = document.getElementById('resultado');

    if ([n1, n2, n3, n4].some(isNaN)) {
        resultado.textContent = "Preencha todas as notas corretamente.";
        return;
    }

    const media = (n1 + n2 + n3 + n4) / 4;

    const mensagem = media >= 5 
        ? `Aluno aprovado com média ${media.toFixed(2)}`
        : `Aluno reprovado com média ${media.toFixed(2)}`;

    resultado.textContent = mensagem;
}