const elementos = require('./elements').elementos;

class finalizarCompras {
    acessarCarrinho(){
        cy.get(elementos.CLASS_CART_BUTTON).click();
        cy.get(elementos.DATATEST_CHECKOUT_BUTTON).click();   
    }
    informacoesEntrega(informacoesEntrega){
        if (informacoesEntrega.nome){
            cy.get(elementos.DATATEST_FIRSTNAME).type(informacoesEntrega.nome);
        }
        if (informacoesEntrega.sobrenome){
            cy.get(elementos.DATATEST_LASTNAME).type(informacoesEntrega.sobrenome);
        }
        if (informacoesEntrega.codigoPostal){
            cy.get(elementos.DATATEST_POSTALCODE).type(informacoesEntrega.codigoPostal);
        }
        cy.get(elementos.DATATEST_CONTINUE_BUTTON).click();
    }
    finalizarCompra(){
        cy.get(elementos.DATATEST_FINISH_BUTTON).click();
        cy.contains('THANK YOU FOR YOUR ORDER');
        cy.get(elementos.DATATEST_BACKHOME_BUTTON).click();
    }
}

export default new finalizarCompras();