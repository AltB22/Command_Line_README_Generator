// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)
  return `![License](https://img.shields.io/badge/License-${license}-lightblue.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // renderLicenseBadge();
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
`;
}

module.exports = generateMarkdown;
