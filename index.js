import inquirer from 'inquirer';
import fs from 'fs';

const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a short description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the installation instructions?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How does the user use this project?',
    },
    {
      type: 'input',
      name: 'license',
      message: 'Enter the project license (e.g., MIT):',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'List contributing developers:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What are the test instructions?',
    },
    {
      type: 'input',
      name: 'githubUsername',
      message: 'Enter your GitHub username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address for questions:',
    }
  ];
  
  const generateReadMe = (answers) => `
  # ${answers.title}
  
  ## Description
  ${answers.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${answers.installation}
  
  ## Usage
  ${answers.usage}
  
  ## License
  This project is licensed under the ${answers.license} license.
  
  ## Contributing
  Developers who contributed to this project: ${answers.contributing.split(',').map(dev => dev.trim()).join(', ')}
  
  ## Tests
  ${answers.tests}
  
  ## Questions
  If you have any questions, please contact me via [GitHub](https://github.com/${answers.githubUsername}) or email me at ${answers.email}.
  `;

  inquirer.prompt(questions).then((answers) => {
    const readmeContent = generateReadMe(answers);
  
    fs.writeFile('SAMPLEREADME.md', readmeContent, (err) => {
      if (err) {
        console.error('Error writing file:', err);
      } else {
        console.log('README.md created successfully!');
      }
    });
  });