document.getElementById('saudar').addEventListener('click', function() {
    const nome = document.getElementById('nome').value.trim();
    const sexo = document.getElementById('sexo').value.trim().toUpperCase();
    const resultado = document.getElementById('resultado');

    if (!nome || (sexo !== 'M' && sexo !== 'F')) {
        resultado.textContent = "Preencha corretamente o nome e o sexo (M ou F).";
        return;
    }

    const saudacao = sexo === 'M' ? 'Ilmo Sr.' : 'Ilma Sra.';
    resultado.textContent = `${saudacao} ${nome}`;
});