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
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // renderLicenseBadge();
  return `# ${data.title}
  ## License
  - ${renderLicenseBadge(data.license)}
  - ${renderLicenseLink(data.license)}
  ## [Installation](#installation)
  ## [Usage](#usage)
  ## [Credits](#credits)
`;
}

module.exports = generateMarkdown;
