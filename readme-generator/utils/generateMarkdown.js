// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch (license) {
      case 'MIT':
        return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
      case 'Apache-2.0':
        return '![License: Apache-2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
      // Add cases for other licenses as needed
      default:
        return '';
    }
  }
  
  // Function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    switch (license) {
      case 'MIT':
        return 'https://opensource.org/licenses/MIT';
      case 'Apache-2.0':
        return 'https://opensource.org/licenses/Apache-2.0';
      // Add cases for other licenses as needed
      default:
        return '';
    }
  }
  
  // ... (Your other functions)

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (!license) {
      return '';
    }
  
    const licenseBadge = renderLicenseBadge(license);
    const licenseLink = renderLicenseLink(license);
  
    return `
  ## License
  
  ${licenseBadge}
  
  This project is licensed under the [${license}](${licenseLink}) license.
  `;
  }
  
  // Function to generate markdown for README
  function generateMarkdown(data) {
    // Verify input data and return following string if missing required fields
    if (!data.title || !data.description || !data.installation || !data.usage || !data.contributing || !data.tests || !data.github || !data.email) {
      throw new Error('Missing required fields in data object! Please restart the process with "node index.js"!');
    }
  
    const licenseSection = renderLicenseSection(data.license);
  
    return `
  # ${data.title}
  
  ## Description
  ${data.description}
  
  ${licenseSection}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  For any questions, you can reach me through my [GitHub profile](https://github.com/${data.github}) or via email at ${data.email}.
  `;
  }
  
  module.exports = generateMarkdown;
  