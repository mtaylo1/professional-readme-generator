// TODO: Include packages needed for this application
const fs = require("fs")
const inquirer = require('inquirer');
const runFile = require('./src/runFile');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: 'What is the title of your repository?',
        name: "title",
    },{
        type: "input",
        message: 'What is your GitHub user Name?',
        name: "github",
    },{    
        type: "input",
        message: 'What is your email?',
        name: "email",

    },{
        type: "list",
        message: 'Select which license you would like to use',
        name: "license",
        choices : [
            "APACHE 2.0",
            "BSD 3",
            "GVL-GPL 3.0",
            "MIT",
            "NONE",
        ],
    },{
        type: "input",
        message: 'Please describe the repository.',
        name: "description",
    },{
        type: "input",
        message: 'Please state if others can contribute.',
        name: "contribute",
    },{
        type: "input",
        message: 'What is the use of this project',
        name: "usage",
    },{
        type: "input",
        message: 'How do you test this project?',
        name: "test",
    },{
        type: "input",
        message: 'How would this be installed?',
        name: "installation",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        
        }
    console.log("Success! Your README file is completed");
});
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(userInput) {
        console.log(userInput)
        // const runFile = runFile(userInput);
        writeToFile("readme.md", runFile(userInput));
    });
};

// Function call to initialize app
init();
