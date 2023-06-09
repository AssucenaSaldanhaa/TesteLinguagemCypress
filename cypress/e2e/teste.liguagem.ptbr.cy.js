/// <reference types="Cypress" />

describe('teste da tela de login da pagina facebook pt-br', () => {
  beforeEach(() => {
    cy.visit('pt-br.facebook.com/')
    cy.fixture('linguagem.ptbr.json')
            .then(function (value) {
                this.linguagem = value
            })
  })
  
  it('verificar se os textos da pagina do facebook estao em pt-br', function(){
    cy.get('._8eso').should('have.text', this.linguagem.titles.slogan)
    cy.get('._6ltj').should('have.text', this.linguagem.titles.forgotPassword)
    cy.get('#reg_pages_msg').should('have.text', this.linguagem.titles.createPage)
  });


  it('verificar se os inputs da pagina do facebook estão em português', function(){
    cy.get('#email')
      .invoke('attr', 'placeholder')
      .should('contain', this.linguagem.inputs.email)
    cy.get('#pass') // pegar o input de password
      .invoke('attr', 'placeholder') // invocar o atributo placeholder e pegar o seu valor
      .should('contain', this.linguagem.inputs.password) // checar se o placeholder possui 
  });

  it('verificar se os botões da pagina do facebook estão em português', function(){
    cy.get('[name=login]')
      .should('have.text', this.linguagem.buttons.login)
    cy.get('a[role=button]')
      .should('have.text', this.linguagem.buttons.createNewAccount)
  })
})