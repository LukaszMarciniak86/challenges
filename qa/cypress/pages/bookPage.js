class BookPage {

    getBookTitle() {
        return cy.get('h1');
    }

    getBookAuthor() {
        return cy.get('h2');
    }
}

export default new BookPage();
