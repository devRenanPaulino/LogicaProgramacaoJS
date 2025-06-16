function calcular() {
  const h1 = parseInt(document.getElementById("homem1").value);
  const h2 = parseInt(document.getElementById("homem2").value);
  const m1 = parseInt(document.getElementById("mulher1").value);
  const m2 = parseInt(document.getElementById("mulher2").value);
  const res = document.getElementById("resultado");

  if (
    isNaN(h1) || isNaN(h2) || isNaN(m1) || isNaN(m2) ||
    h1 === h2 || m1 === m2
  ) {
    res.innerHTML = `<p class="erro">Preencha todos os campos corretamente e com idades diferentes.</p>`;
    return;
  }

  const homemMaisVelho = Math.max(h1, h2);
  const homemMaisNovo = Math.min(h1, h2);
  const mulherMaisVelha = Math.max(m1, m2);
  const mulherMaisNova = Math.min(m1, m2);

  const soma = homemMaisVelho + mulherMaisNova;
  const produto = homemMaisNovo * mulherMaisVelha;

  res.innerHTML = `
    <p><strong>Soma</strong> do homem mais velho com a mulher mais nova: <span class="destaque">${soma}</span></p>
    <p><strong>Produto</strong> do homem mais novo com a mulher mais velha: <span class="destaque">${produto}</span></p>
  `;
}