export class sideBar {


    getAndClickClaim() {
        return cy.get('.oxd-main-menu-item--name').contains('Claim').click();
    };

};

export const onSideBar = new sideBar();