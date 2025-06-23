function calcular(){
    const valor = parseFloat(document.getElementById('valor').value.replace(',','.'));
    const taxa = parseFloat(document.getElementById('taxa').value.replace(',','.').replace('%',''));
    const tempoAtraso = parseFloat(document.getElementById('tempoAtraso').value);

    if (isNaN(valor) || isNaN(taxa) || isNaN(tempoAtraso) || valor <= 0 || tempoAtraso <= 0){
        document.getElementById("resultado").textContent=("Digite valores maiores que zero no valor da prestação e do tempo de atraso");
        return;
    }

    const valorPrestacao = valor + (valor * taxa/100) * tempoAtraso;
    
    document.getElementById("resultado").textContent= `O valor da prestação atrasada é R$: ${valorPrestacao.toFixed(2)}`
}