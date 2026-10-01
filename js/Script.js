// ==============================
// IMPORTAÇÃO DOS MÓDULOS
// ==============================

import { paginas } from "./paginas.js";
import { configurarCadastro } from "./cadastro.js";


// ==============================
// CONTÊINER PRINCIPAL
// ==============================

const app = document.querySelector("#app");


// ==============================
// FUNÇÃO DE RENDERIZAÇÃO
// ==============================

function renderizarPagina() {

    let rota = window.location.hash.substring(1);


    // Página inicial como padrão

    if (!paginas[rota]) {
        rota = "inicio";
    }


    // Limpa o conteúdo atual

    app.innerHTML = "";


    // Insere o template correspondente

    app.innerHTML = paginas[rota];


    // Configura o formulário quando necessário

    if (rota === "cadastro") {

        configurarCadastro();

    }

}


// ==============================
// DETECTA MUDANÇA DE ROTA
// ==============================

window.addEventListener(
    "hashchange",
    renderizarPagina
);


// ==============================
// CARREGA A PÁGINA INICIAL
// ==============================

renderizarPagina();
