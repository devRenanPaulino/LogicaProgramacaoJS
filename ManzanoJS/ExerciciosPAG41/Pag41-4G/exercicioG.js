document.getElementById('verificar').addEventListener('click', () => {
  const valores = [
    parseInt(document.getElementById('valor1').value),
    parseInt(document.getElementById('valor2').value),
    parseInt(document.getElementById('valor3').value),
    parseInt(document.getElementById('valor4').value),
  ];

  const resultado = document.getElementById('resultado');

  if (valores.some(isNaN)) {
    resultado.textContent = 'Preencha todos os campos corretamente.';
    return;
  }

  const divisiveis = valores.filter(valor => valor % 2 === 0 && valor % 3 === 0);

  if (divisiveis.length === 0) {
    resultado.textContent = 'Nenhum número é divisível por 2 e 3.';
  } else {
    resultado.textContent = `Divisíveis por 2 e 3: ${divisiveis.join(', ')}`;
  }
});