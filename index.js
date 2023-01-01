// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is the brief project Description?',
    name: 'description',
  },
  {
    type: 'list',
    message: 'Which coding languages does the project utilize?',
    choices: ["HTML", "JavaScript", "CSS", "All of the above"],
    name: 'languages',
  },
  {
    type: 'input',
    message: 'What real world problem does the project solve?',
    name: 'application',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      // Use user feedback for... whatever!!
      console.log(answers)
    })
}

// Function call to initialize app
init();
