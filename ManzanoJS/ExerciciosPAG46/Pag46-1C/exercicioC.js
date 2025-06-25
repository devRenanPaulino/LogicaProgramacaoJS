document.getElementById('mostrar').addEventListener('click', mostrar);

function mostrar() {
  let contador = 0;
  let resultado = 0;

  do {
    resultado += contador;
    contador += 2;
  } while (contador <= 500);

  document.getElementById('resultado').textContent = `A soma dos pares até 500 é: ${resultado}`;
}