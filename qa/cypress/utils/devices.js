export function setDevice(device) {

    cy.fixture('devices').then((data) => {
        const devices = data.devices;

        if (devices[device]) {
            const resolution = devices[device];
            cy.viewport(resolution[0], resolution[1]);
        } else {
            throw new Error(`Device ${device} not supported.`);
        }
    });
}  