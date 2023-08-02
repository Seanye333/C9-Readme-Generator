// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// Path is from another JS file to generate README 
const generateREADME = require('./utils/generateMarkdown.js');

// Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'Enter the project title:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter the project description:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter the installation instructions:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter the usage information:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your application:',
      choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'BSD-3-Clause', 'Unlicense', 'None'],
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Enter the contribution guidelines:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Enter the test instructions:',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:',
    },
  ];
  // Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.error('Error writing to file:', err);
        process.exit(1); // Stop execution and exit the program
      } else {
        console.log(`${fileName} has been successfully generated!`);
      }
    });
  }
  
  // Create a function to initialize app
  function init() {
    // Prompt the user for information
    inquirer
      .prompt(questions)
      .then((answers) => {
        // Generate the README content based on user input
        const READMEContent = generateREADME(answers);
  
        // Write the content to README.md
        writeToFile('README.md', READMEContent);
      })
      .catch((error) => {
        console.error('Error occurred:', error);
        process.exit(1); // Stop execution and exit the program
      });
  }
  
  // Function call to initialize app
  init();
  