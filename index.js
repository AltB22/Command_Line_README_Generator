// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is the name of the project?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Please enter a brief description of the project.',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Would you like to include a table of contents?',
    name: 'table of contents',
  },
  {
    type: 'input',
    message: 'What should the user know about installation of the app?',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'What real world problem does the project solve?',
    name: 'usage',
  },
  {
    type: 'input',
    name: 'license',
    message: 'Would you like to use a license?',
    choices: ["Yes", "No"],
  },
  // {
  //   type: 'list',
  //   name: 'license type',
  //   message: 'Which of the following licenses would you like to use?',
  //   choices: ["MIT", "Apache", "None"],
    
  // },
  {
    type: 'input',
    message: 'How can a developer contribute to the project?',
    name: 'contributing',
  },
  {
    type: 'input',
    message: 'How can a developer run tests?',
    name: 'tests',
  },
  {
    type: 'input',
    message: 'Who to contact for questions about the project',
    name: 'questions',
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
