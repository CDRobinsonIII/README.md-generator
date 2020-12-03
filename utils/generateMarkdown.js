// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
![GitHub License](https://img.shields.io/badge/License-${answers.license}-blue) 

## Description 
${answers.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)

## Installation
${answers.installInstructions}

## Usage 
${answers.useInstructions}

## License
This project is licensed under the ${answers.license} license.

## Contributing
${answers.contributeGuidelines}

## Tests
${answers.testInstructions}

## Questions
If you have any questions about this README generator application or to report any issues with the application please email me at ${answers.email}.
Please visit my github page to review my other repositories: [${answers.username}](https://github.com/${answers.username})

`;
}

module.exports = generateMarkdown;
