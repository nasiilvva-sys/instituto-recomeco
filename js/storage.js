// ==============================
// ARMAZENAMENTO DO CADASTRO
// ==============================

export function salvarCadastro(dadosCadastro) {

    localStorage.setItem(
        "cadastro",
        JSON.stringify(dadosCadastro)
    );

}


// ==============================
// RECUPERAR CADASTRO
// ==============================

export function recuperarCadastro() {

    const dadosSalvos = localStorage.getItem("cadastro");

    if (!dadosSalvos) {
        return null;
    }

    return JSON.parse(dadosSalvos);
}
