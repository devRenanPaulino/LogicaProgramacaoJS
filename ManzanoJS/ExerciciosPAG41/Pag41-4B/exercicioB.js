function mostrar(){
    const valor = parseFloat(document.getElementById('valor').value.replace('.',','));

    let apresentar = valor < 0 ? valor * -1 : valor;

    document.getElementById('resultado').textContent=apresentar;
}