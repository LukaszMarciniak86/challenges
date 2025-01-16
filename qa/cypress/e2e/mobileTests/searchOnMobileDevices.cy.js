import { setDevice } from '../../utils/devices.js';
import { baseUrl } from '../../config/env.json';
import dashboard from '../../pages/dashboard.js';

const devices = [
    'iPhone SE',
    'iPhone XR',
    'iPhone 12 Pro',
    'iPhone 14 Pro Max',
    'Pixel 7',
    'Samsung Galaxy S8+',
    'Samsung Galaxy S20 Ultra',
    'iPad Mini',
    'iPad Air',
    'iPad Pro',
    'Surface Pro 7',
    'Surface Duo',
    'Galaxy Z Fold 5',
    'Asus Zenbook Fold',
    'Samsung Galaxy A51/71',
    'Nest Hub',
    'Nest Hub Max',
];

describe('template spec', () => {

    let bookData;

    devices.forEach((device) => {
        context(`Testing on ${device}`, () => {
            beforeEach(() => {
                setDevice(device);
                cy.fixture('books.json').then((books) => {
                    bookData = books[13]
                });
                cy.visit('/');
            });

            it(`Check if search functionality works on' + ${device}`, () => {

                const bookTitle = bookData.title;
                const bookTitleForSearch = bookTitle.replace(/\s+/g, '+');

                cy.intercept('GET', 'api/books?offset=12&limit=12&sort=id&search=' + bookTitleForSearch).as('waitForFullTitle');

                dashboard.searchBookBy(bookTitle);
                cy.wait('@waitForFullTitle');

                dashboard.getAndClickPaginationLeft();
                dashboard.selectAndClickFirstBook();
                cy.url().should('eq', baseUrl + '/books/' + bookData.id);

            });
        });
    });
});