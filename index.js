// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "what is your project's title?"
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a description for this project."
    },
    {
        type: "input",
        name: "installation",
        message: "Please enter installation instructions."
    },
    {
        type: "input",
        name: "usage",
        message: "Please enter usage information for this project."
    },
    {
        type: "input",
        name: "contributing",
        message: "Please enter contribution guidlines for this project."
    },
    {
        type: "input",
        name: "test",
        message: "Please enter test instructions for this project."
    },
    {
        type: "input",
        name: "licence",
        message: "PLACEHOLDER FOR LICENCE INFO."
    },
    {
        type: "input",
        name: "username",
        message: "Please enter your github username."
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email adress."
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    
    inquirer
        .prompt(questions)
        .then(answers => console.log(answers));
}

// Function call to initialize app
init();
