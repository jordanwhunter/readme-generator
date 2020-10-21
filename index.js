// Global
const fs = require('fs');
const inquirer = require('inquirer');

// Internal NPMs
const api = require('./utils/api.js');
const generateMarkdown = require('./utils/generateMarkdown.js');

// array of questions for user
const questions = [
    // GitHub Username
    {
       type: 'input',
       name: 'username',
       message: 'Enter your GitHub username.',
        // We need to validate that user entered a word
        // https://stackoverflow.com/questions/57321266/how-to-test-inquirer-validation
        validate: function (answer) {
           if (answer.length < 1) {
               return console.log("You must enter a GitHub username.");
           }
           return true;
        }
    },
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
