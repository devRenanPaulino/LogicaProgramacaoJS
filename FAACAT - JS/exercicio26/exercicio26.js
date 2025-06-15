function verificarCompra() {
  const atual = parseInt(document.getElementById('produtoEstoque').value);
  const max = parseInt(document.getElementById('estoqueMaximo').value);
  const min = parseInt(document.getElementById('estoqueMinimo').value);
  const resultado = document.getElementById('resultado');

  if (isNaN(atual) || isNaN(max) || isNaN(min)) {
    resultado.textContent = "Preencha todos os campos corretamente!";
    return;
  }

  const media = (max + min) / 2;
  const mensagem = atual >= media ? "Não efetuar a compra!" : "Efetuar a compra!";
  resultado.textContent = mensagem;
}