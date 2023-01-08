// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is the README file title?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'What is the brief project Description?',
    name: 'Description',
  },
  {
    type: 'list',
    name: 'license',
    message: 'What license would you like to use?',
    choices: ["MIT", "Apache", "None"],
    
  },
  {
    type: 'input',
    message: 'What real world problem does the project solve?',
    name: 'Installation',
  },
];

// TODO: Create a function to write README file
function writeToFile(answers) { 
  const createReadMe = generateMarkdown(answers) 
  console.log(createReadMe)
  fs.writeFile('./readme_output/README.md', createReadMe
  ,(error) => {
    if (error) throw new Error("Something went wrong", error)
  }
  )
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      writeToFile(answers);
      // Use user feedback for... whatever!!
      // console.log(answers)
      
    })
}

// Function call to initialize app
init();
