// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license){
  return `[![License site](https://img.shields.io/badge/License-${license}-lightblue.svg)](https://choosealicense.com/licenses/mit/)`
} else {
  ("")
}
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license) {
  return `https://choosealicense.com/licenses/${license}/`
} else {
  ("")
}
}
// function generateTabOfCon(description) {
//   let tableOfContents = `## Table of Contents`
//   if(data.installation) {tableOfContents +=`[Installation](installation)`
//   return description
// } else {
//   ("")
// }
// }
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license) {
    return `https://choosealicense.com/licenses/${license}/`
  } else {
    ("")
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}    
  ${renderLicenseBadge(data.license)}\n
  ## Description
  - ${data.description}
  ## Table of Contents
  [Installation](#installation)\n
  [Usage](#usage)\n
  [License](#license)\n
  [Contributing](#contributing)\n
  [Tests](#tests)\n
  [Questions](#questions)\n
  ## Installation
  - ${data.installation}
  ## Usage
  - ${data.usage}
  ## Contributing
  - ${data.contributing}
  ## Tests
  - ${data.tests}
  ## Questions
  - Please visit my GitHub profile for further information about his project (https://github.com/${data.github})
  - Please email ${data.questions} with additional quesitons.
  ## License
  - This application is covered under the ${renderLicenseBadge(data.license)}`//[![License site](https://img.shields.io/badge/License-${data.license}-lightblue.svg)](https://choosealicense.com/licenses/mit/)`
;
}

module.exports = generateMarkdown;
