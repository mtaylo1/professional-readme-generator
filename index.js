// TODO: Include packages needed for this application
const fs = require("fs")
const inquirer = require('inquirer');
const fileGenerator = require('./src/readmeTemplate');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: 'What is the title of your repository?',
        name: "title",
    },{
        type: "input",
        message: 'What is your GitHub user Name?',
        name: "userName",
    },{
        type: "input",
        message: 'What is your GitHub profile link?',
        name: "GitHub",
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
        message: 'What is your GitHub user Name?',
        name: "userName",
    },{
        type: "input",
        message: 'What is your GitHub user Name?',
        name: "userName",
    },{
        type: "input",
        message: 'What is your GitHub user Name?',
        name: "userName",
    },{
         type: "input",
        message: 'What is your GitHub user Name?',
        name: "userName",
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
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", readmeTemplate(userInput));
    });
};

// Function call to initialize app
init();
