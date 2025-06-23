document.getElementById('btnCalcular').addEventListener('click', mostrar);
document.getElementById('avaliarExame').addEventListener('click', avaliar);

function mostrar() {
    const nota1 = parseFloat(document.getElementById('nota1').value.replace(',','.'))
    const nota2 = parseFloat(document.getElementById('nota2').value.replace(',','.'))
    const nota3 = parseFloat(document.getElementById('nota3').value.replace(',','.'))
    const nota4 = parseFloat(document.getElementById('nota4').value.replace(',','.'))

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)){
        document.getElementById('resultado').textContent="Coloque as notas corretamente";
        return;
    }

    const media = (nota1 + nota2 + nota3 + nota4) / 4;

    if (media >= 7) {
        document.getElementById('resultado').textContent=`O aluno foi aprovado com a média de ${media.toFixed(2)}`;
    } else {
         document.getElementById('resultado').textContent = `O aluno está em exame. Média: ${media.toFixed(2)}`;
         document.getElementById('exameContainer').style.display = 'block';

        window.mediaParcial = media;
    }
}

function avaliar(){
    const exame = parseFloat(document.getElementById('notaExame').value.replace(',','.'));

    if (isNaN(exame)) {
        document.getElementById('resultado').textContent = "Digite a nota do exame corretamente.";
        return;
    }

    const novaMedia = (window.mediaParcial + exame) / 2;

    if (novaMedia >= 5){
        document.getElementById('resultado').textContent=`O aluno foi aprovado com a média de ${novaMedia.toFixed(2)}`;
        document.getElementById('exameContainer').style.display='none';
        return;
    } else {
        document.getElementById('resultado').textContent=`O aluno foi reprovado com a média de ${novaMedia.toFixed(2)}`;
        document.getElementById('exameContainer').style.display='none';
        return;
    }
}