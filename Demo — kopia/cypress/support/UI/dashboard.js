export class dashboard {

    getHeader() {
        return cy.get('.oxd-topbar-header-breadcrumb-module');
    };

    getWidget() {
        return cy.get('[class="oxd-sheet oxd-sheet--rounded oxd-sheet--white orangehrm-dashboard-widget"]');
    };

    getWidgetName(widget) {
        return widget ? cy.get(widget).find('[class="orangehrm-dashboard-widget-name"]') : cy.get('[class="orangehrm-dashboard-widget-name"]');
    }
};

export const onDashboard = new dashboard();