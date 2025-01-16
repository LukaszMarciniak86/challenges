export class claim {

    getFirstRowOfFields() {
        return cy.get('.oxd-form-row').first()
    };
};

export const onClaim = new claim();