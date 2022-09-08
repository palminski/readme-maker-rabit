// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const { rejects, ok } = require("assert");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        validate: input => {
            if (input) {
                return true;
            }
            else {
                console.log ("you must provide a title for your project");
                return false;
            };
        },
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
        type: "list",
        name: "license",
        choices: ["none","MIT","GNPU"],
        message: "Please select desired license"
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
    const promptUser = () => {
        return inquirer
        .prompt(questions)
        .then(answers => {
           return answers;
        });
    };
    promptUser()
    .then(answers => {
        return generateMarkdown(answers);
    })
    .then(response => {
        fs.writeFile("./output/README.md",response, (err) => {
            if (err) {
                console.log(`
<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

        An error was encountered. It is likely that there was an issue with the file path: ./output/README.md.
        Please check your computer and try again!

<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>  
                `)
                throw err;
            }
            console.log(`
<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

        File Created Succesfully! Check the Output folder to view results!

<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
            `);
        });
    });
        
}

// Function call to initialize app
console.log(`
<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

        Welcome to Readme Maker!
        Please answer some questions about your project below to generate a README.md file for your project.
        You are not required to answer all the questions, but remember! A good README is descriptive!

<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>  
`)
init();
