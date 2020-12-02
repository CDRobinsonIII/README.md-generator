// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
![GitHub License](https://img.shields.io/badge/License-${answers.license}-blue) 

## Description 
${answers.description}

## Table of Contents (Optional)
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

`;
}

module.exports = generateMarkdown;
