function verificarSaldo() {
  const conta = document.getElementById("conta").value;
  const saldo = parseFloat(document.getElementById("saldo").value);
  const debito = parseFloat(document.getElementById("debito").value);
  const credito = parseFloat(document.getElementById("credito").value);

  const saldoAtual = saldo - debito + credito;

  const resultado = document.getElementById("resultado");

  let mensagem = `Conta nº ${conta} <br> Saldo atual: R$ ${saldoAtual.toFixed(2)}<br>`;
  mensagem += saldoAtual < 0
    ? `<span class="negativo">O saldo é negativo.</span>`
    : `<span class="positivo">O saldo é positivo.</span>`;

  resultado.innerHTML = mensagem;
}