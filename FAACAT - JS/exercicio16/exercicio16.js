function calcularTotal() {
  const quantidade = parseInt(document.getElementById("quantidade").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(quantidade) || quantidade < 0) {
    resultado.innerText = "Digite uma quantidade válida!";
    return;
  }

  const precoUnitario = quantidade < 12 ? 1.30 : 1.00;
  const total = quantidade * precoUnitario;

  resultado.innerText = `Você comprou ${quantidade} maçã(s) por R$ ${precoUnitario.toFixed(2)} cada. Total: R$ ${total.toFixed(2)}`;
}