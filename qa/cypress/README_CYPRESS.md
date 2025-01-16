# Cypress Tests

To run tests:

1. Install Node.js (if you haven't done that already)
2. Navigate to the `qa/` directory cd qa/
3. Install the required dependencies: `npm install`
4. Start the application : `npm start`
5. In another terminal use one of test scripts in directory qa:
    - `npm run test:chrome`: Runs all tests in the failingTests directory using the Chrome browser in headless mode.
    - `npm run test:firefox`: Runs all tests in the failingTests directory using the Firefox browser in headless mode.
    - `npm run test:edge`: Runs all tests in the failingTests directory using the Edge browser in headless mode.
    - `npm run test:mobile`: Runs all tests in the mobileTests directory in headless mode.
    - `npm run test:open`: Opens the Cypress Test Runner GUI for all tests.

# NOTE

Before the first run, you need to create an env.json file with your application's URL in the cypress/config directory to run the tests. The envExample.json file shows where to enter the URL.