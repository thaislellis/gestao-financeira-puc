
const botaoSaldo = document.getElementById("botaoSaldo");
const botaoSemSaldo = document.getElementById("botaoSemSaldo");

let saldoVisivel = localStorage.getItem("saldoVisivel") === "true";

renderizarSaldoVisivel(saldoVisivel);

function renderizarSaldoVisivel(visivel) {
    const saldo = document.getElementById("saldo");
    
    localStorage.setItem("saldoVisivel", visivel);
    
    if (visivel) {
        saldo.textContent = "R$ 1.200,00";
        botaoSaldo.style.display = "inline";
        botaoSemSaldo.style.display = "none";
    } 
    else {
        saldo.textContent = "R$*****";
        botaoSaldo.style.display = "none";
        botaoSemSaldo.style.display = "inline";
    }
}

botaoSaldo.addEventListener("click", () => renderizarSaldoVisivel(false));
botaoSemSaldo.addEventListener("click", () => renderizarSaldoVisivel(true));

const menuLateral = document.querySelector('.menu-lateral');
const botaoToggle = document.getElementById('toggleMenu');

let menuFechado = false;

botaoToggle.addEventListener('click', () => {
    menuFechado = !menuFechado;
    menuLateral.classList.toggle('menu-fechado', menuFechado);
});