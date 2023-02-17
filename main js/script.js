const form = document.querySelector('#form'); // Selecionando Id no Html

form.addEventListener('submit', function (e) { //Escutando a ação(adicionando evento)

    e.preventDefault(); //Não permite que o formulário seja enviado

    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso Inválido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura Inválido', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu imc é ${imc} (${nivelImc}).`;

    setResultado(msg, true);
});


function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'] //Array guardando os valores para serem referenciados depois.

    if (imc >= 39.9) return nivel[5]; // Forma simplificada de fazer if, sem o else if e utilizando apenas uma linha sem chaves
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.99) return nivel[3];
    if (imc >= 24.99) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc <= 18.5) return nivel[0];

}

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP() { //Função de criar P
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    }
    else {
        p.classList.add('bad');
    }
    p.innerHTML = msg;
    resultado.appendChild(p);
}
