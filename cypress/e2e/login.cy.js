/// <reference types="cypress" />

describe ('Login', () => {

 //cenario 1
it('Login com sucesso', () =>{

cy.visit('https://automationpratice.com.br/login')


//preecher login//preencher senha//clique em login
cy.get('#user').type('leancb@hotmail.com' )
cy.get('#password').type('drdrdr')
cy.get('#btnLogin').click();
cy.get('#swal2-title').should('have.text', 'Login realizado')
cy.get('#swal2-title').click();

    });

//CENÁRIO 2
it('login inválido', () => {

cy.visit('https://automationpratice.com.br/login')


cy.get('#user').type('xxxxxx') 
cy.get('#password').type('drdrdr')
cy.get('#btnLogin').click();
cy.get('.invalid_input').should('have.text', 'E-mail inválido.')

});

})

