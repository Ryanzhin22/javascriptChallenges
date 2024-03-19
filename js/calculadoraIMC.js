const altura = document.getElementById('altura');
const peso = document.getElementById('peso');
const btnCalc = document.querySelector('.calc');
const btnLimp = document.querySelector('.limp');
const calculadoraDisplay = document.querySelector('.calculadoraDisplay');
const ratingsDisplay = document.querySelector('.ratingsDisplay');
const ratingBtnBack = document.getElementById('ratingBtnBack');
const calculadoraDisplayButtons = document.querySelector(
    '.calculadoraDisplayButtons'
);
const imcValue = document.getElementById('imcValue');
const imcText = document.getElementById('imcText');

const calcularIMC = (altura, peso) => {
    const imc = peso / (altura * altura);
    return imc;
};

const zerarCampos = () => {
    altura.value = '';
    peso.value = '';
};

btnCalc.addEventListener('click', () => {
    const varAltura = altura.value;
    const varPeso = peso.value;

    if (varAltura && varPeso) {
        calculadoraDisplay.classList.add('disappear');
        ratingsDisplay.classList.remove('disappear');

        const valorIMC = calcularIMC(varAltura, varPeso);
        imcValue.innerText = valorIMC.toFixed(1);
        parseFloat(valorIMC);

        if (valorIMC < 18.5) {
            imcText.innerText = 'Abaixo do peso';
        } else if (valorIMC >= 18.5 && valorIMC <= 24.9) {
            imcText.innerText = 'Peso Normal';
        } else if (valorIMC >= 25 && valorIMC <= 29.9) {
            imcText.innerText = 'Acima do Peso';
        } else if (valorIMC >= 30 && valorIMC <= 40) {
            imcText.innerText = 'Obesidade';
        } else if (valorIMC > 40) {
            imcText.innerText = 'Obesidade Grave';
        } else {
            alert('IMC Não encontrado');
        }
    } else {
        alert('Preencha os campos!');
    }
});

btnLimp.addEventListener('click', () => {
    zerarCampos();
});

ratingBtnBack.addEventListener('click', () => {
    calculadoraDisplay.classList.remove('disappear');
    ratingsDisplay.classList.add('disappear');

    zerarCampos();
});
