// ==============================
// TEMPLATES DAS PÁGINAS
// ==============================

import { projetos } from "./dados.js";


export const paginas = {

    // ==========================
    // PÁGINA INICIAL
    // ==========================

    inicio: `
        <main>

            <section>

                <h2>Bem-vindo ao Instituto Recomeço</h2>

                <img
                    src="../imagens/foto_instituto1.jpg"
                    alt="Voluntária entregando alimentos para uma família"
                >

                <p>
                    O Instituto Recomeço é uma organização sem fins lucrativos
                    que busca ajudar pessoas e famílias em situação de
                    vulnerabilidade social.
                </p>

                <p>
                    Por meio de campanhas de arrecadação, distribuição de
                    alimentos e trabalho voluntário, buscamos contribuir para
                    uma comunidade mais solidária.
                </p>

            </section>


            <section>

                <h2>Nossa missão</h2>

                <p>
                    Nossa missão é promover ações sociais que ofereçam apoio,
                    esperança e novas oportunidades para pessoas que precisam
                    de ajuda.
                </p>

            </section>


            <section>

                <h2>Como você pode ajudar?</h2>

                <p>
                    Você pode contribuir realizando doações, participando
                    das nossas campanhas ou tornando-se um voluntário.
                </p>

                <p>
                    Para participar, acesse nossa página de
                    <a href="#cadastro">cadastro</a>.
                </p>

            </section>

        </main>
    `,


    // ==========================
    // PÁGINA DE PROJETOS
    // ==========================

    projetos: `
        <main>

            ${projetos.map(projeto => `

                <section>

                    <h2>${projeto.titulo}</h2>

                    <p>
                        ${projeto.descricao}
                    </p>

                </section>

            `).join("")}

        </main>
    `,


    // ==========================
    // PÁGINA DE CADASTRO
    // ==========================

    cadastro: `
        <main>

            <h2>Formulário de Cadastro</h2>

            <div class="badge">
                Cadastro de voluntário
            </div>


            <div class="alerta">

                <strong>Importante:</strong>

                preencha todos os campos corretamente antes de enviar
                o cadastro.

            </div>


            <div class="toast">

                Cadastro pronto para ser enviado!

            </div>


            <form id="form-cadastro">

                <fieldset>

                    <legend>Dados pessoais</legend>


                    <label for="nome">
                        Nome completo:
                    </label>

                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        required
                    >


                    <br><br>


                    <label for="email">
                        E-mail:
                    </label>

                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                    >


                    <br><br>


                    <label for="nascimento">
                        Data de nascimento:
                    </label>

                    <input
                        type="date"
                        id="nascimento"
                        name="nascimento"
                        required
                    >


                    <br><br>


                    <label for="cpf">
                        CPF:
                    </label>

                    <input
                        type="text"
                        id="cpf"
                        name="cpf"
                        placeholder="000.000.000-00"
                        pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}"
                        required
                    >


                    <br><br>


                    <label for="telefone">
                        Telefone:
                    </label>

                    <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        placeholder="(00) 00000-0000"
                        pattern="\\([0-9]{2}\\) [0-9]{5}-[0-9]{4}"
                        required
                    >

                </fieldset>


                <br>


                <fieldset>

                    <legend>Endereço</legend>


                    <label for="endereco">
                        Endereço:
                    </label>

                    <input
                        type="text"
                        id="endereco"
                        name="endereco"
                        required
                    >


                    <br><br>


                    <label for="numero">
                        Número:
                    </label>

                    <input
                        type="number"
                        id="numero"
                        name="numero"
                        required
                    >


                    <br><br>


                    <label for="cidade">
                        Cidade:
                    </label>

                    <input
                        type="text"
                        id="cidade"
                        name="cidade"
                        required
                    >


                    <br><br>


                    <label for="estado">
                        Estado:
                    </label>

                    <select
                        id="estado"
                        name="estado"
                        required
                    >

                        <option value="">
                            Selecione
                        </option>

                        <option value="SP">
                            São Paulo
                        </option>

                        <option value="RJ">
                            Rio de Janeiro
                        </option>

                        <option value="MG">
                            Minas Gerais
                        </option>

                        <option value="BA">
                            Bahia
                        </option>

                        <option value="PR">
                            Paraná
                        </option>

                        <option value="RS">
                            Rio Grande do Sul
                        </option>

                    </select>


                    <br><br>


                    <label for="cep">
                        CEP:
                    </label>

                    <input
                        type="text"
                        id="cep"
                        name="cep"
                        placeholder="00000-000"
                        pattern="[0-9]{5}-[0-9]{3}"
                        required
                    >

                </fieldset>


                <br>


                <div class="form-botoes">

                    <button
                        type="submit"
                        class="btn-cadastrar"
                    >
                        Cadastrar
                    </button>


                    <button
                        type="reset"
                        class="btn-limpar"
                    >
                        Limpar
                    </button>

                </div>

            </form>

        </main>
    `
};
