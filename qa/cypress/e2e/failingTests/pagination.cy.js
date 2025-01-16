import dashboard from '../../pages/dashboard.js';

describe('Search and select a book', () => {

    beforeEach(() => {
        cy.visit('/')
    });

    it('Check if Pagination is blocked on Page 0', () => {

        dashboard.getPageNumber().should('have.text', ' Page 1');

        dashboard.getAndClickPaginationLeft();
        dashboard.getPageNumber().should('have.text', ' Page 0');

        dashboard.getAndClickPaginationLeft();
        dashboard.getPageNumber().should('have.text', ' Page 0');

    });
});