function calcularPercentuais() {
      const total = parseInt(document.getElementById("totalEleitores").value);
      const brancos = parseInt(document.getElementById("votosBrancos").value);
      const nulos = parseInt(document.getElementById("votosNulos").value);
      const validos = parseInt(document.getElementById("votosValidos").value);

      if (brancos + nulos + validos > total) {
        alert("A soma dos votos não pode ultrapassar o total de eleitores!");
        return;
      }

      const perBrancos = (brancos / total) * 100;
      const perNulos = (nulos / total) * 100;
      const perValidos = (validos / total) * 100;

      document.getElementById("resultadoBrancos").innerText =
        `Percentual de votos brancos: ${perBrancos.toFixed(2)}%`;
      document.getElementById("resultadoNulos").innerText =
        `Percentual de votos nulos: ${perNulos.toFixed(2)}%`;
      document.getElementById("resultadoValidos").innerText =
        `Percentual de votos válidos: ${perValidos.toFixed(2)}%`;
}