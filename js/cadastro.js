// ==============================
// FORMULÁRIO DE CADASTRO
// ==============================

import {
    salvarCadastro,
    recuperarCadastro
} from "./storage.js";


// ==============================
// RECUPERAR DADOS DO FORMULÁRIO
// ==============================

export function configurarCadastro() {

    const formulario = document.querySelector("#form-cadastro");

    if (!formulario) {
        return;
    }


    // Recupera cadastro salvo anteriormente

    const cadastro = recuperarCadastro();


    if (cadastro) {

        document.querySelector("#nome").value = cadastro.nome;
        document.querySelector("#email").value = cadastro.email;
        document.querySelector("#nascimento").value = cadastro.nascimento;
        document.querySelector("#cpf").value = cadastro.cpf;
        document.querySelector("#telefone").value = cadastro.telefone;
        document.querySelector("#endereco").value = cadastro.endereco;
        document.querySelector("#numero").value = cadastro.numero;
        document.querySelector("#cidade").value = cadastro.cidade;
        document.querySelector("#estado").value = cadastro.estado;
        document.querySelector("#cep").value = cadastro.cep;

    }


    // ==============================
    // EVENTO DE ENVIO
    // ==============================

    formulario.addEventListener("submit", function(event) {

        event.preventDefault();


        const dadosCadastro = {

            nome: document.querySelector("#nome").value,

            email: document.querySelector("#email").value,

            nascimento: document.querySelector("#nascimento").value,

            cpf: document.querySelector("#cpf").value,

            telefone: document.querySelector("#telefone").value,

            endereco: document.querySelector("#endereco").value,

            numero: document.querySelector("#numero").value,

            cidade: document.querySelector("#cidade").value,

            estado: document.querySelector("#estado").value,

            cep: document.querySelector("#cep").value

        };


        // Salva os dados através do módulo storage

        salvarCadastro(dadosCadastro);


        // Mensagem utilizando SweetAlert2

        Swal.fire({

            title: "Cadastro realizado!",

            text: "Seus dados foram salvos com sucesso.",

            icon: "success",

            confirmButtonText: "OK"

        });

    });

}
