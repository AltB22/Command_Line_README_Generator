// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

//function converts the data license data provided by the user into the format needed to render its respective badge properly and also embed a link in each badge.  I had to make a choice to either hard code a portion of it or continue code to make additional conversions.  Opted to hard code apache-2.0 and gpl-3.0 into the links and use template literal to pass in the user input that works for the badge.  MIT converts license to mit which works for the link and the badge.  I'm aware this is not an ideal solution for scaling but it satisfies the criteria for this project.  Did this to create better user experience when selecting badge type in the CL. ex: mit vs MIT in the command line.
function renderLicenseBadge(license) {
  if(license !== "No License" && license === "MIT") {
    return `[![License site](https://img.shields.io/badge/License-${license}-blue.svg)](https://choosealicense.com/licenses/mit)`
  }
  if (license === "MIT"){ //if there's a license render a badge...
    
  } else if (license === "Apache_2.0") {
    return `[![License site](https://img.shields.io/badge/License-${license}-blue.svg)](https://choosealicense.com/licenses/apache-2.0)`
  } else if (license === "GNU_3.0") {
    return `[![License site](https://img.shields.io/badge/License-${license}-blue.svg)](https://choosealicense.com/licenses/gpl-3.0)`
  }
  return '';
}
//I scrapped the below else ("") because license is required by default to move through the prompts.
// } else {
//   ("")
// }

//Did not use renderLicenseLink or renderLicenseSection functions provided by starter code due to different approach.

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== "No License") {
  return `[License](#license)`
} else {
  return '';
}
}

//Considered the below function to append items to table of contents but scrapped the idea to simplify.

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
  if(license !== "No License") {
    return `## License
    This application is covered under the ${license} license`
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
//uses data entered by the user to generate content for the README file.  Calls renderLicenseBadge twice to render badge near top and in license section at bottom.  Table of contents static in format with links to each section below it.  Considered using booleans in questions to ask if user wanted to include each section and if so then apppend to table of contents but decided to simplify for now.
function generateMarkdown(data) {
 
  return `# ${data.title}    
  ${renderLicenseBadge(data.license)}\n
  ## Description
  - ${data.description}
  ## Table of Contents
  [Installation](#installation)\n
  [Usage](#usage)\n
  ${renderLicenseLink(data.license)}\n
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
  ${renderLicenseSection(data.license)}\n
  ${renderLicenseBadge(data.license)}\n
  `
;
}

//exports generateMarkdown for use in index.js
module.exports = generateMarkdown;
