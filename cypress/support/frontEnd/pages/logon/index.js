
const elementos = require('./elements').elementos;


class telaLogon {
    
    acessarURL(){
        cy.visit('https://www.saucedemo.com/');
    }
 
    realizarLogin(informacoesLogin){
        if (informacoesLogin.usuario){
            cy.get(elementos.DATATEST_USERNAME_INPUT).type(informacoesLogin.usuario);
        }
        if (informacoesLogin.senha){
            cy.get(elementos.DATATEST_PASSWORD_INPUT).type(informacoesLogin.senha);
        }
        cy.get(elementos.DATATEST_LOGIN_BUTTON).click();
    }
}

export default new telaLogon();