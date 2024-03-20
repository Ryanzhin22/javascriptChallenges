class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        
        <header class="header">
        <nav class="headerNav">
            <ul class="headerNavContent">
                <a href="#calc"><li>Calculadora</li></a>
                <a href="#timer"><li>Cronômetro</li></a>
                <a href="#todo"><li>To Do List</li></a>
                <img src="imgs/logo.png" alt="logo">
                <a href="#imc"><li>Calculadora IMC</li></a>
                <a href="#memory"><li>Jogo da Memória</li></a>
                <a href="#digit"><li>Teste de Digitação</li></a>
            </ul>
            <div class="menu" id="menu">
                <i class="fa-solid fa-bars fa-2x"></i>
            </div>
        </nav>
        </header>

        `;
    }
}

customElements.define('header-component', Header);

// Menu Responsivo

const menu = document.getElementById('menu');
const header = document.getElementsByClassName('header')[0];

console.log(menu);

menu.addEventListener('click', () => {
    header.classList.toggle('active');
});

console.log(window.innerWidth);

window.addEventListener('resize', () => {
    if (window.innerWidth >= 950) {
        header.classList.remove('active');
    }
});
