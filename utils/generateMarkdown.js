// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license){
  return `![License](https://img.shields.io/badge/License-${license}-lightblue.svg)`
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
  ## License
  - ${renderLicenseBadge(data.license)}
  - ${renderLicenseLink(data.license)}
  - ${renderLicenseSection(data.license)}
  ## Contributing
  - ${data.contributing}
  ## Tests
  - ${data.tests}
  ## Questions
  - ${data.questions}
`;
}

module.exports = generateMarkdown;
