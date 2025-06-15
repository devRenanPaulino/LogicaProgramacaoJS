function somarMaiores() {
  const n1 = parseInt(document.getElementById("num1").value);
  const n2 = parseInt(document.getElementById("num2").value);
  const n3 = parseInt(document.getElementById("num3").value);
  const resultado = document.getElementById("resultado");

  const menor = (n1 <= n2 && n1 <= n3)
    ? n1
    : (n2 <= n1 && n2 <= n3)
    ? n2
    : n3;

  const somaMaiores = n1 + n2 + n3 - menor;

  resultado.innerText = `A soma dos dois maiores é: ${somaMaiores}`;
}