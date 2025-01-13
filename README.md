# Cypress Automation Testing with Page Object Model
## Project Overview 
Automate key functionalities of an e-commerce website using the Page Object Model design pattern to organize the code for reusability, readability, and maintainability.
![Screenshot 2025-01-13 163525](https://github.com/user-attachments/assets/e14207b7-8431-4d7f-82bc-97dd264dc0e0)

## Directory Structure with POM
Organize the project directory for POM
![Screenshot 2025-01-13 165117](https://github.com/user-attachments/assets/87f9d028-83e5-4330-8a8d-c993fb8bd322)

## Set Up the Cypress Project 
```
npm init -y
npm install cypress --save-dev
npx cypress open
```
## Write and Organize Tests
Inside the cypress/e2e directory, create test files for each functionality:
* registerPage.cy.js
* loginPage.cy.js
* productPage.cy.js
* checkoutPage.cy.js
