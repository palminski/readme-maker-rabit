// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "projectTitle",
        message: "what is your project's title?"
    },
    {
        type: "input",
        name: "author",
        message: "Please enter who this project is being attributed to."
    },
    {
        type: "input",
        name: "testInputField",
        message: "this is a test. please enter anything!"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    console.log(questions);
    inquirer
        .prompt(questions)
        .then(answers => console.log(answers));
}

// Function call to initialize app
init();
