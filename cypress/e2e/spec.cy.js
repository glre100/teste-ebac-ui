/// <reference types="cypress" />

context(`funcionalidadelogin`,()=>{
  it(`Deve fazer login com sucesso` , ()=> {
  cy.visit (`http://lojaebac.ebaconline.art.br/minha-conta/`)
  cy.get('#username').type ('aluno_ebac@teste.com')
  cy.get('#password').type ('teste@teste.com')
  cy.get('.woocommerce-form > .button').click()

  cy.get('.page-title').should('contain' , 'Minha conta')
  })


  it(`Deve exibir uma mensagem de erro ao inserir usuario invalido` , ()=> {
    cy.visit (`http://lojaebac.ebaconline.art.br/minha-conta/`)
    cy.get('#username').type ('test@teste.com')
    cy.get('#password').type ('teste@teste')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error > li').should('contain' , 'Endereço de e-mail desconhecido')
  })

  it(`Deve exibir uma mensagem de erro ao inserir senha invalida` , ()=> {
    cy.visit (`http://lojaebac.ebaconline.art.br/minha-conta/`)
    cy.get('#username').type ('aluno_ebac@teste.com')
    cy.get('#password').type ('teste@teste')
    cy.get('.woocommerce-form > .button').click()

  
  })
})
