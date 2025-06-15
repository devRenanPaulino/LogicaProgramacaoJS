function verificarTriangulo() {
  const a = parseFloat(document.getElementById("ladoA").value);
  const b = parseFloat(document.getElementById("ladoB").value);
  const c = parseFloat(document.getElementById("ladoC").value);
  const resultado = document.getElementById("resultado");

  const formaTriangulo = (a < b + c) && (b < a + c) && (c < a + b);

  resultado.innerText = formaTriangulo
    ? "Os lados formam um triângulo!"
    : "Os lados NÃO formam um triângulo.";
}