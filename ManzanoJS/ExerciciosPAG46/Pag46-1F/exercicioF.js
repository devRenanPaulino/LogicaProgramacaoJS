document.getElementById('calcular').addEventListener('click', mostrarPotencias);

function mostrarPotencias() {
  const base = parseInt(document.getElementById('base').value);
  const limite = parseInt(document.getElementById('limite').value);
  const resultadoDiv = document.getElementById('resultado');
  
  if (isNaN(base) || isNaN(limite) || limite < 0) {
    resultadoDiv.textContent = "Digite valores válidos!";
    return;
  }

  let expoente = 0;
  let saida = `<strong>Potências de ${base} até o expoente ${limite}:</strong><br>`;

  do {
    let resultado = 1;

    for (let i = 1; i <= expoente; i++) {
      resultado *= base;
    }

    saida += `${base} ^ ${expoente} = ${resultado}<br>`;
    expoente++;
  } while (expoente <= limite);

  resultadoDiv.innerHTML = saida;
}