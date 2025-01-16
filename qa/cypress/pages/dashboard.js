class Dashboard {

  searchBookBy(searchValue) {
    return cy.get('.form-control').type(searchValue);
  }

  getFirstBook() {
    return cy.get('.book').first();
  }

  selectAndClickFirstBook() {
    return cy.get('.book').first().click();
  }

  getAndClickPaginationLeft() {
    return cy.get('.bi-chevron-left').click();
  }

  getAndClickPaginationRight() {
    return cy.get('.bi-chevron-right').click();
  }

  getPageNumber() {
    return cy.get('.pager span');
  }
}

export default new Dashboard();
