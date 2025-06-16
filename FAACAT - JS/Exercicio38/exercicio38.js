function verificarAcesso() {
  const codigo = parseInt(document.getElementById("codigoInput").value);
  const senha = parseInt(document.getElementById("senhaInput").value);
  const mensagem = document.getElementById("mensagem");

  const codigoCorreto = 1234;
  const senhaCorreta = 9999;

  if (isNaN(codigo) || isNaN(senha)) {
    mensagem.innerText = "Digite ambos os campos corretamente!";
    return;
  }

  if (codigo !== codigoCorreto) {
    mensagem.innerText = "Código de usuário inválido!";
  } else if (senha !== senhaCorreta) {
    mensagem.innerText = "Senha incorreta!";
  } else {
    mensagem.innerText = "Acesso permitido";
  }
}
