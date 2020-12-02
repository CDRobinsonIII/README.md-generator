// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
  
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
  Need to add.

  ## Contributing
  ${answers.contributeGuidelines}

  ## Tests
  ${answers.testInstructions}

  `;
}

module.exports = generateMarkdown;
