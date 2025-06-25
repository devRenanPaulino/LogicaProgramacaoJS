document.getElementById('mostrar').addEventListener('click', mostrar);

function mostrar() {
  let valor = 1;
  let resultado = "";

  do {
    if (valor % 2 !== 0) {
      resultado += valor + "<br>";
    }
    valor++;
  } while (valor <= 20);

  document.getElementById('resultado').innerHTML = resultado;
}