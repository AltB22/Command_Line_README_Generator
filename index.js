// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
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
  // {
  //   type: 'input',
  //   name: 'table of contents',
  //   message: 'Would you like to include a table of contents?',
  // },
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
    choices: ["MIT", "Apache 2.0", "GNU General Public License 3.0", "The Unlicense"],
    // validate: input => {
    //   if (input) {
    //     return true;
    //   } else {
    //     console.log('Please choose a license.')
    //     return false;
    //   }
    // }
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
  {
    type: 'input',
    name: 'git hub',
    message: 'Please enter your GitHub user name',
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
