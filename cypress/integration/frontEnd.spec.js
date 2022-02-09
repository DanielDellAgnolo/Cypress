/// <reference types="cypress" />

import telaLogon from '../support/frontEnd/pages/Logon';
import telaPrincipal from '../support/frontEnd/pages/telaPrincipal';
import finalizarCompras from '../support/frontEnd/pages/finalizarCompra';
   
describe('FrontEnd', () => {
    it('Login com usuário bloqueado, e validar a mensagem de bloqueio exibida', () => {
        telaLogon.acessarURL();
        telaLogon.realizarLogin(objeto.loginUsuarioBloqueado);
        cy.contains(objeto.loginUsuarioBloqueado.mensagem);
    });
    it('Realizar uma compra completa com mais de um produto no carrinho', () => {
        telaLogon.acessarURL();
        telaLogon.realizarLogin(objeto.loginUsuarioStandard);
        telaPrincipal.adicionarProdutosCarrinho(objeto.adicionarDoisProdutosCarrinho);
        finalizarCompras.acessarCarrinho();
        finalizarCompras.informacoesEntrega(objeto.informacoesEntregaDoisProdutos);
        cy.contains(objeto.finalizacaoCompraDoisProdutos.valorTotal);
        finalizarCompras.finalizarCompra();
    });
    it('Adicionar todos os produtos ao carrinho e validar o valor total da compra a ser pago', () => {
        telaLogon.acessarURL();
        telaLogon.realizarLogin(objeto.loginUsuarioStandard);
        telaPrincipal.adicionarProdutosCarrinho(objeto.adicionarTodosProdutosCarrinho);
        finalizarCompras.acessarCarrinho();
        finalizarCompras.informacoesEntrega(objeto.informacoesEntregaTodosProdutos);
        cy.contains(objeto.finalizacaoCompraTodosProdutos.valorTotal);
        finalizarCompras.finalizarCompra();
    });
});

const objeto = {
    loginUsuarioBloqueado : {
        usuario : 'locked_out_user',
        senha   : 'secret_sauce',
        mensagem: 'Epic sadface: Sorry, this user has been locked out.'
    },
    loginUsuarioStandard : {
        usuario: 'standard_user',
        senha  : 'secret_sauce',
    },
    adicionarDoisProdutosCarrinho : {
        mochila     : true,
        luzBicicleta: true
    },
    informacoesEntregaDoisProdutos : {
        nome        : 'Fulano',
        sobrenome   : 'De tal',
        codigoPostal: '123',
    },
    finalizacaoCompraDoisProdutos : {
        valorTotal: 'Total: $43.18'
    },
    adicionarTodosProdutosCarrinho : {
        mochila      : true,
        luzBicicleta : true,
        blusaBolt    : true,
        jaqueta      : true,
        macacao      : true,
        blusaVermelha: true     
    },
    informacoesEntregaTodosProdutos : {
        nome        : 'Fulano',
        sobrenome   : 'De tal',
        codigoPostal: '123',
    },
    finalizacaoCompraTodosProdutos : {
        valorTotal: 'Total: $140.34'
    }
}