const elementos = require('./elements').elementos;

class telaPrincipal {

    adicionarProdutosCarrinho(produtos){
        if (produtos.mochila){
            cy.get(elementos.DATATEST_BACKPACK_BUTTON).click();
        }
        if (produtos.luzBicicleta){
            cy.get(elementos.DATATEST_BIKE_LIGTH_BUTTON).click();
        }
        if (produtos.blusaBolt){
            cy.get(elementos.DATATEST_BOLT_TSHIRT_BUTTON).click();
        }
        if (produtos.jaqueta){
            cy.get(elementos.DATATEST_JACKET_BUTTON).click();
        }
        if (produtos.macacao){
            cy.get(elementos.DATATEST_ONESIE_BUTTON).click();            
        }
        if (produtos.blusaVermelha){
            cy.get(elementos.DATATEST_RED_TSHIRT_BUTTON).click();
        }
    }
}

export default new telaPrincipal();