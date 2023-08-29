# Mostly AI Cypress Tests

## About test framework

- I have used `Cypress` as my preferred test framework as these scenarios are simple and they work well with Cypress.
- I have used `page object model` to organize the tests so the elements of a page and its interactions remain with in a single file. In my past I have developed test frameworks with different models like BDD with cucumber. These all depend on the needs of the company or the team and the ways of working.
- `BasePage` contains the most common interactions with the UI.
- The tests are available in the `tests`. I have encapsulated the implementation in the `pages`. So, the tests are quite readable and easy to understand for anyone.
- I have used `cypress-mochawesome-reporter` as a reporter. It generates report in html format.
- After the tests are run, the reports get generated in the `cypress/reports` folder. Click on `index.html` opens the reports. It will have screenshots for the failed tests and videos for all the tests that we run.

## Static checks

- It is very important for a code base to have static checks even if it is test automation framework.
- I have `prettier` for formatting the `js/json` files in a uniform way.
- I have used `eslint` to check for basic rules that the test framework need to comply with.
- Having these checks in place ensures that we are not pushing the code that is not clean.
- To format the files, we need to run `yarn format` command. It will format all the files.
- To check the lint rules, we can run `yarn lint` command. It will show errors if we are not respecting any rule.

## Pipelines

- I have integrated `CircleCI` as CI to run the tests on pushing the code to `main` branch.
- We can come up with different strategies to run the tests in the real scenario. Like, to run only `smoke tests` in the feature branches. Then to run the entire suite of tests on merging the branch to `main` etc.
- On CI, now the Cypress Tests are run and the test report is available in the artifacts tab.
- You can find the link to the pipeline [here](https://app.circleci.com/pipelines/github/roopeshh/mostlyai-tests)
- We can also add linting to be run on pipeline. For time being, I have not added it.

## General

There are several ways of implementing the same test cases using Cypress or Playwright or any other tool. My approach is to understand the problem that we have in the product, and come up with solution/s that will help the developers, product and company as whole to deliver the features faster with top quality.
