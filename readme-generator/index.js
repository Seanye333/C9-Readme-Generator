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
  