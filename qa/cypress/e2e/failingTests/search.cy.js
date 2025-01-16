import bookPage from '../../pages/bookPage.js';
import dashboard from '../../pages/dashboard.js';

describe('Search and select a book', () => {

    let bookData;

    beforeEach(() => {
        cy.visit('/')
        cy.fixture('books.json').then((books) => {
            bookData = books[13]
        });
    });

    it('Search for a title', () => {
        const bookTitle = bookData.title;
        const bookTitleForSearch = bookTitle.replace(/\s+/g, '+');

        cy.intercept('GET', 'api/books?offset=12&limit=12&sort=id&search=' + bookTitleForSearch).as('waitForFullTitle');


        dashboard.searchBookBy(bookTitle);
        cy.wait('@waitForFullTitle');

        dashboard.selectAndClickFirstBook();
        bookPage.getBookTitle().should('contain.text', bookTitle);
    });

    it('Search for an author', () => {
        const bookAuthor = bookData.author;
        const bookAuthorForSearch = bookAuthor.replace(/\s+/g, '+');

        cy.intercept('GET', 'api/books?offset=12&limit=12&sort=id&search=' + bookAuthorForSearch).as('waitForFullTitle');

        dashboard.searchBookBy(bookAuthor);
        cy.wait('@waitForFullTitle');

        dashboard.selectAndClickFirstBook();
        bookPage.getBookTitle().should('contain.text', bookAuthor);
    });
});