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
  if(license){
  return `https://choosealicense.com/licenses/mit/)`
} else {
  ("")
}
}
function renderDescription(description) {
  if(description){
  return `${description}`
} else {
  ("")
}
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // renderLicenseBadge();
  return `# ${data.title}
  ## Description
  - ${renderDescription(data.description)}
  ## [Table of Contents] (#table of contents)
  ## [Installation](#installation)
  ## [Usage](#usage)
  ## [License](#license)
  - ${renderLicenseBadge(data.license)}
  - ${renderLicenseLink(data.license)}
  ## [Contributing](#contributing)
  ## [Tests](#tests)
  ## [Questions](#questions)
`;
}

module.exports = generateMarkdown;
