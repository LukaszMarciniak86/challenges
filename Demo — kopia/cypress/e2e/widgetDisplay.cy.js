import { onDashboard } from "../support/UI/dashboard";

describe('widget display test', () => {


    it('Check if widgets are displayed on the dashboard', () => {

        cy.loginAsAdmin();
        onDashboard.getWidget().each(($widget) => {
            cy.wrap($widget).should('be.visible');
        });
    });

    it('Check if widgets are displayed on the dashboard', () => {

        cy.loginAsAdmin();
        onDashboard.getWidget().eq(3).then(($widget) => {
            onDashboard.getWidgetName($widget)          
            .should('have.text','Buzz Latest Posts');
        });
    });


});