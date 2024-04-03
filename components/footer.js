const head = document.head;

// ICON ADD
const linkIcon = document.createElement('link');
linkIcon.rel = 'shortcut icon';
linkIcon.type = 'image/x-icon';
linkIcon.href = '../imgs/favicon-32x32.png';

head.appendChild(linkIcon);

// LINK CSS
const linkCSS = document.createElement('link');
linkCSS.rel = 'stylesheet';
linkCSS.type = 'text/css';
linkCSS.href = '../components/footer.css';

head.appendChild(linkCSS);
console.log(head, linkIcon, linkCSS)

class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        
            <footer>
                <div class="containerFooter">
                    <div class="calcInfo">
                        <h2>footer.JS</h2>
                        <p>Esse é um projeto que eu tive a ideia de fazer para reunir todos esse projetos mais simples em um só de uma forma eficaz. Aqui poderão ser adicionados futuramente mais projetos, mas a princípio a ideia foi de fazer apenas 6 projetos de javascript "simples" e mostrar eles em ação, funcionando simultaneamente no mesmo site e mostrar também o código por trás de todos eles.</p>
                        <p class="calcInfoCopy">Criado e desenvolvido por &copy;Ryan 2024</p>
                    </div>
                    <div class="moreContent">
                        <div class="moreProjects">
                            <h3>Mais Projetos</h3>
                            <ul>
                                <a href="#calc"><li>Calculadora</li></a>
                                <a href="#timer"><li>Cronometro</li></a>
                                <a href="#todo"><li>To do list</li></a>
                                <a href="#imc"><li>Calculadora IMC</li></a>
                                <a href="#memory"><li>Jogo da Memória</li></a>
                                <a href="#digit"><li>Teste de digitação</li></a>
                            </ul>
                        </div>
                        <div class="socialMedias">
                            <h3>Me siga</h3>
                            <ul>
                                <a href="https://www.instagram.com/ryanbarbosa_o/" target="_blank"><li><i class="fa-brands fa-instagram fa-2x"></i></li></a>
                                <a href="https://www.linkedin.com/in/ryan-barbosa-de-oliveira-225221246/" target="_blank"><li><i class="fa-brands fa-linkedin fa-2x"></i></li></a>
                                <a href="https://github.com/Ryanzhin22" target="_blank"><li><i class="fa-brands fa-github fa-2x"></i></li></a>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('footer-component', Footer);
