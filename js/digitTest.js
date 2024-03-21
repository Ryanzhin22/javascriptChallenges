const textDigit = document.querySelector('.digitTestText');
const fraseDigitada = document.querySelector('#fraseDigitada');
const textHistory = document.querySelector(".textHistory")
const reset = document.querySelector(".reset")
const showHistory = document.querySelector(".showHistory ")

const frasesArray = [
    'Digite essa frase aqui',
    'Digite isso aqui no campo de texto ali em baixo!',
    'Tente digitar isso o mais rápido que você conseguir',
    'ABC Testando, digite TUDO isso',
    'Se você digitar tudo isso em menos de 10 segundos eu fico te devendo uma coxinha e uma guaraná!',
    'Se você digitar tudo isso em menos de 10 segundos eu fico te devendo uma coxinha e uma guaraná!',
];

const novoTexto = () => { 
    const fraseSortida = Math.floor(Math.random() * frasesArray.length);
    textDigit.innerText = frasesArray[fraseSortida];
}

const iniciar = () => {
    const status = localStorage.getItem("testeEmAndamento")

    if(!status){
        localStorage.setItem("testeEmAndamento", true)
        localStorage.setItem("tempoInicial", new Date().getTime())
    }     
} 

const resetText = () => {
    fraseDigitada.value = ""
    novoTexto()
    localStorage.setItem("testeEmAndamento", false)
    localStorage.clear("tempoInicial")
}

const criarHistorico = (texto, tempo) => {
    const historyElement = document.createElement("div")
    historyElement.innerHTML = `<strong>Texto:</strong> "${texto} - <strong>Tempo:</strong> ${tempo}"`
    textHistory.appendChild(historyElement)
}

const atualizarTeste = () => {
    iniciar()

    if(fraseDigitada.value == textDigit.innerText){

        const dataFinal = new Date().getTime()
        const dataInicial = localStorage.getItem("tempoInicial")
        const tempoConcluido = (dataFinal - dataInicial) / 1000

        criarHistorico(textDigit.innerText, tempoConcluido)

        fraseDigitada.value = ""
        novoTexto()
        localStorage.setItem("testeEmAndamento", false)
        localStorage.clear("tempoInicial")
        textDigit.focus()
    }
}

fraseDigitada.addEventListener('keyup', (e) => {
    if(e.key == "Shift"){
        return
    }else{
        atualizarTeste()
    }
});

showHistory.addEventListener("click",()=>{
    textHistory.classList.toggle("hide")
})

reset.addEventListener("click", ()=>{resetText()})

novoTexto()