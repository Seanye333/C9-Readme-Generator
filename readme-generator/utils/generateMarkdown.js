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
  
  // Function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (!license) {
      return '';
    }
  
    const licenseBadge = renderLicenseBadge(license);
    const licenseLink = renderLicenseLink(license);

}