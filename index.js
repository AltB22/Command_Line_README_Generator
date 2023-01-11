// TODO: Include packages needed for this application
const inquirer = require('inquirer');//const to require installation of inquirer
const fs = require('fs');//indicating interaction with the file system
const generateMarkdown = require('./utils/generateMarkdown');//reference to generateMarkdown function in util folder

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'github',
    message: 'Please enter your GitHub user name',
  },
  {
    type: 'input',
    name: 'title',
    message: 'What is the name of the project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please enter a brief description of the project.',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What should the user know about installation of the app?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What real world problem does the project solve?',
    
  },
  {
    type: 'list',
    name: 'license',
    message: 'Which type of license would you like to use?',
    choices: ["MIT", "Apache_2.0", "GNU_3.0"],
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What real world problem does the project solve?',
    
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'How can a developer contribute to the project?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'How can a developer run tests?',
  },
  {
    type: 'input',
    name: 'questions',
    message: 'Who to contact for questions about the project',
  },
];

// TODO: Create a function to write README file
//declares function writeToFile and passes through answers parameter from questions const above
function writeToFile(answers) { 
  const createReadMe = generateMarkdown(answers)//calls function passing answers object as argument
  console.log(createReadMe) //logs output to console
  fs.writeFile('./readme_output/README.md', createReadMe //writes output to README file in readme_output directory
  ,(error) => { //handles errors
    if (error) throw new Error("Something went wrong", error)
  }
  )
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)//calls prompt method passing questions array
    .then((answers) => {//callback function taking in answers from quesstions
      writeToFile(answers);//calls function writeToFile
      // Use user feedback for... whatever!!
      // console.log(answers)
      
    })
}

// Calls function to initialize app
init();
