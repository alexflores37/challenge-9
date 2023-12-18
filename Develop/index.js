const inquirer = require('inquirer');
const fs = require('fs');

// Questions for the user
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter the project title:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a project description:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter usage information:',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Enter contributing guidelines:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Enter test instructions:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license:',
    choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'BSD-2-Clause', 'None'],
  },
  {
    type: 'input',
    name: 'username',
    message: 'Enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },
];

// Function to generate README content
function generateREADME(answers) {
  return `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## License
This project is licensed under the ${answers.license} License.

## Questions
For questions or concerns, please contact me through my GitHub profile: [${answers.username}](https://github.com/${answers.username})  
You can also reach me via email: ${answers.email}
`;
}

inquirer.prompt(questions).then((answers) => {

  const readmeContent = generateREADME(answers);

  
  fs.writeFile('README.md', readmeContent, (err) => {
    if (err) {
      console.error('Error writing README.md:', err);
    } else {
      console.log('README.md generated successfully!');
    }
  });
});