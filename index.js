// Load the inquirer module. 
const inquirer = require('inquirer');

// Load the fs module.
const fs = require('fs');

// Load the generate markdown module from the utils folder. 
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for user. Used to generate the README.md.
const questions = [

    {
        type: 'input',
        message: 'What is your GitHub user name?',
        name: 'username',
    },

    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },

    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },

    {
        type: 'input',
        message: 'Please provide a description for your application',
        name: 'description',
    },

    {
        type: 'input',
        message: 'Please provide the installation instructions for your application',
        name: 'installInstructions',
    },

    {
        type: 'input',
        message: 'Please provide instructions and examples on how to use your application.',
        name: 'useInstructions',
    },

    {
        type: 'input',
        message: 'Please provide guidelines for other developers to contribute to your application.',
        name: 'contributeGuidelines',
    },

    {
        type: 'input',
        message: 'Please provide instructions on how to test your application.',
        name: 'testInstructions',
    },

    {
        type: 'list',
        message: 'Which license will your project be using',
        name: 'license',
        choices: [
            'MIT',
            'Apache_2.0',
            'GNU_GPLv3',
            'none'
        ]
    },

    {
        type: 'checkbox',
        message: 'Pelase select the technologies used to create your application: ',
        name: 'technologies',
        choices: [
            {
                name: 'HTML',
            },
            {
                name: 'CSS',
            },
            {
                name: 'JavaScript',
            },
            {
                name: 'jQuery',
            },
            {
                name: 'Node JS',
            },

            {
                name: 'DOM Manipulation',
            },
            {
                name: 'Bootstrap',
            },

        ]
    },
]

// function to write README file
function writeToFile(answers) {
    const readmeMarkup = generateMarkdown(answers);
    fs.appendFile('README.md', `${readmeMarkup}`, (err) => 
        err ? console.error(err) : console.log('README.md successfully created!'));

}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((response) => {
        console.log(response);
        writeToFile(response)

    });
}

// function call to initialize program
init();
