function converterTemperatura() {
  const fahrenheit = parseFloat(document.getElementById("fahrenheit").value);

  if (isNaN(fahrenheit)) {
    alert("Por favor, insira uma temperatura válida.");
    return;
  }

  const celsius = (fahrenheit - 32) * 5 / 9;

  document.getElementById("resultado").innerText =
    `A temperatura de ${fahrenheit.toFixed(2)}°F é igual a ${celsius.toFixed(2)}°C.`;
}