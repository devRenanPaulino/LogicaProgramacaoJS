function calcularCompra() {
  const morango = parseFloat(document.getElementById("kgMorango").value);
  const maca = parseFloat(document.getElementById("kgMaca").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(morango) || isNaN(maca)) {
    resultado.innerText = "Preencha ambos os campos corretamente com apenas valores.";
    return;
  }

  const precoMorango = morango <= 5 ? 2.50 : 2.20;
  const precoMaca = maca <= 5 ? 1.80 : 1.50;

  const totalMorango = morango * precoMorango;
  const totalMaca = maca * precoMaca;
  let total = totalMorango + totalMaca;

  if ((morango + maca) > 8 || total > 25) {
    total *= 0.90;
  }

  resultado.innerText = `Total: R$ ${total.toFixed(2)}`;
}