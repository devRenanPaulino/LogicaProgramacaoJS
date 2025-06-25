document.getElementById('calcular').addEventListener('click', () => {
    const base = 3;
    let texto = '';

    for (let exp = 0; exp <= 15; exp++) {
        const resultado = Math.pow(base, exp);
        texto += `${base} ^ ${exp} = ${resultado}\n`;
    }

    document.getElementById('resultado').textContent = texto;
});