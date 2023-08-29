# Mostly AI Cypress Tests

## Prerequisites

- Node 16 or above
- Yarn 1.22 and above
- VS Code or any other text editors

## Running the tests

- From the root of this repository, run the command `yarn` to install all the required dependencies.
- To run the tests from the command line.

  - For headless mode, run the command:

    `yarn test`

  - For UI mode on chrome(for example), run the command:

    `yarn test --browser chrome`

## Running the tests in debug mode

- To the run the tests in the UI debug mode, you can run command `yarn debug`. Select `E2E Testing` from the UI. Select the browser you want to run the tests on and click on `Start E2E testing on browser`. Click on a particular test to run the tests.

## Check test reports

- The test reports are auto generated after the tests are run in folder `cypress/reports`
- Click on `index.html` to view the test report in html
- The report contains all the video recordings for the tests and screenshots for the failed tests

For more details on the test framework and pipeline please check the [notes](./NOTES.md)
