function verificarVencedor() {
    const time1 = document.getElementById("time1").value.trim();
    const time2 = document.getElementById("time2").value.trim();
    const gols1 = parseInt(document.getElementById("gols1").value);
    const gols2 = parseInt(document.getElementById("gols2").value);
    const resultado = document.getElementById("resultado");

    if (!time1 || !time2 || isNaN(gols1) || isNaN(gols2)) {
        resultado.innerHTML = `<p class="erro">Preencha todos os campos corretamente.</p>`;
        return;
    }

    let mensagem = "";

    if (gols1 > gols2) {
        mensagem = `<span class="vencedor">${time1}</span> venceu por ${gols1} x ${gols2}`;
    } else if (gols2 > gols1) {
        mensagem = `<span class="vencedor">${time2}</span> venceu por ${gols2} x ${gols1}`;
    } else {
        mensagem = `<span class="empate">EMPATE ${gols1} x ${gols2}</span>`;
    }

  resultado.innerHTML = `<div class="resultado-box">${mensagem}</div>`;
}