import { onDashboard } from "../support/UI/dashboard";

describe('Tests for log in to the orangehrmlive website', () => {

    let adminData;

    before(() => {
        cy.fixture('users.json').then((usersData)=>{
            adminData = usersData[0]
        })
    })

    it('Log in as Admin', () => {

        cy.login(adminData.login, adminData.password);
        cy.pause()
        onDashboard.getHeader()
            .should('have.text', 'Dashboard');
    });
});