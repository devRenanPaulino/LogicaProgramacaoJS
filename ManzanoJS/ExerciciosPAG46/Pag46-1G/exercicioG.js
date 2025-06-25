document.getElementById('btnMostrar').addEventListener('click', gerarFibonacci);

function gerarFibonacci() {
  const lista = document.getElementById('lista');
  lista.innerHTML = '';

  let anterior = 0;               
  let atual     = 1;               

  adicionarItem(anterior);      
  adicionarItem(atual);        

  let contador = 1;               
  do {
    const termo = anterior + atual;
    adicionarItem(termo);
    anterior = atual;
    atual = termo;
    contador++;
  } while (contador < 14);    

  function adicionarItem(valor) {
    const li = document.createElement('li');
    li.textContent = valor;
    lista.appendChild(li);
  }
}