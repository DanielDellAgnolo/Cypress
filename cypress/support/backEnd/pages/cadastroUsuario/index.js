const payloadCadastrarUsuarioInformacoesFaltantes = require('../../payloads/cadastrarUsuarioInformacoesFaltantes.json');
const payloadAlterarUsuario = require('../../payloads/alterarUsuario.json');
const urlUsuario = require('../../urls/urlsUsuarios').urls_Usuario;

class requestUsuarios{
    cadastrarUsuario(payload){
        return cy.request({
            method: "POST",
            url   : urlUsuario.URL_USUARIO,
            failOnStatusCode: false,
            body: payload
        });
    }
    cadastrarUsuarioInformacoesFaltantes(){
        return cy.request({
            method: "POST",
            url   : urlUsuario.URL_USUARIO,
            failOnStatusCode: false,
            body: payloadCadastrarUsuarioInformacoesFaltantes
        });
    }
    excluirUsuario(idUsuario){
        return cy.request({
            method: "DELETE",
            url   : urlUsuario.URL_USUARIO + '/' + idUsuario,
            failOnStatusCode: false,
            body: idUsuario
        });
    }
    editarUsuario(idUsuario){
        return cy.request({
            method: "PUT",
            url   : urlUsuario.URL_USUARIO + '/' + idUsuario,
            failOnStatusCode: false,
            body: payloadAlterarUsuario
        });
    }
    filtrarUsuarios(parametroDoFiltro, filtro){
        return cy.request({
            method: "GET",
            url   : urlUsuario.URL_USUARIO + '?' + parametroDoFiltro + '=' + filtro,
            failOnStatusCode: false,
        });
    }           
}

export default new requestUsuarios();