function verificarNumero() {
      const numero = parseInt(document.getElementById("numeroInput").value);
      const mensagem = numero > 10
        ? "É maior que 10"
        : numero === 10
        ? "É igual a dez"
        : "É menor que 10";

      document.getElementById("resultado").innerText = mensagem;
    }
