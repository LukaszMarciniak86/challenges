import { onSideBar } from "../support/UI/sideBar";
import { onClaim } from "../support/UI/claim";

describe('Search tests on Claim page', () => {

    beforeEach(() => {

        cy.loginAsAdmin();
        onSideBar.getAndClickClaim();
    });

    it('Search on the list', () => {

        onClaim.getFirstRowOfFields().then(($fistRowFields) =>{
            cy.wrap($fistRowFields).find('.oxd-select-text-input').eq(1).click();
        })

        
    });


});