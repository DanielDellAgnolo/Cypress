/// <reference types="cypress" />

import cadastrarUsuarios from '../support/backEnd/pages/cadastroUsuario';

const payloadCadastrarUsuarioCenario01 = require('../support/backEnd/payloads/cadastrarUsuarioCenario01.json');
const payloadCadastrarUsuarioCenario03 = require('../support/backEnd/payloads/cadastrarUsuarioCenario03.json');
const payloadCadastrarUsuarioCenario05 = require('../support/backEnd/payloads/cadastrarUsuarioCenario05.json');

describe('backEnd', () => {
    it('Validar usuário cadastrado com sucesso', () => {
        cadastrarUsuarios.cadastrarUsuario(payloadCadastrarUsuarioCenario01).should((response) => {
            expect(response.status).to.eq(201)
            expect(response.body.message).to.eql("Cadastro realizado com sucesso")
            cadastrarUsuarios.excluirUsuario(response.body._id) 

        });
    });
    it('Validar verificações realizadas no cadastro de usuário', () => {
        cadastrarUsuarios.cadastrarUsuarioInformacoesFaltantes().should((response) => {
            expect(response.status).to.eq(400)
            expect(response.body.message).to.eql("Este email já está sendo usado")
        });              
    });
    it('Validar Edição de um usuário', () => {
        cadastrarUsuarios.cadastrarUsuario(payloadCadastrarUsuarioCenario03).should((response) => {
            expect(response.status).to.eq(201)
            expect(response.body.message).to.eql("Cadastro realizado com sucesso")
            cadastrarUsuarios.editarUsuario(response.body._id).should((responseEdicao) => {
                expect(responseEdicao.status).to.eq(200)
                expect(responseEdicao.body.message).to.eql("Registro alterado com sucesso")
            });
            cadastrarUsuarios.excluirUsuario(response.body._id) 
        });
    });
    it('Validar listagem de usuários', () => {
        cadastrarUsuarios.filtrarUsuarios('nome','Fulano%20da%20Silva').should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.quantidade).to.eq(3)
            expect(response.body.usuarios[0].nome).to.eql("Fulano da Silva")
        });
    });
    it('Validar Exclusão de um usuário', () => {
        cadastrarUsuarios.cadastrarUsuario(payloadCadastrarUsuarioCenario05).should((response) => {
            expect(response.status).to.eq(201)
            expect(response.body.message).to.eql("Cadastro realizado com sucesso")
            cadastrarUsuarios.excluirUsuario(response.body._id).should((exclusao) => {
                expect(exclusao.status).to.eq(200)
                expect(exclusao.body.message).to.eql("Registro excluído com sucesso")
            });
        });
    });
});
