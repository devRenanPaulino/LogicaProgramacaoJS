function calcular(){
    const comprimento = parseFloat(document.getElementById('comprimento').value.replace('.',','));
    const largura = parseFloat(document.getElementById('largura').value.replace('.',','));
    const altura = parseFloat(document.getElementById('altura').value.replace('.',','));

    if (largura > comprimento){
        document.getElementById('resultado').textContent="A largura não pode ser maior do que o comprimento";
        return;
    }

    const volume = comprimento * largura * altura;

    document.getElementById('resultado').textContent=`O volume do retângulo é de: ${volume.toFixed(2)}cm².`;
}