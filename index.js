// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// array of questions for user input
const questions = [
    {
        message: "Enter up to three characters",
        name: "text",
        type: "input"
    },
    {
        message: "Enter a color keyword (OR a hexadecimal number)",
        name: "textColor",
        type: "input"
    },
    {
        message: "Select a shape",
        name: "shape",
        type: "list",
        choices: ["circle", "triangle", "square"]
    },
    {
        message: "Enter a shape color?",
        name: "shapeColor",
        type: "input"
    }
];

// Create a function to write README file
function writeToFile(fileName, data) {}

// Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers);
        const template = `# ${answers.title}
        
## Description
${answers.description}

Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Contributions](#contributions)
- [To Do](#to-do)
- [GitHub](#github)
- [Email](#email)


## Installation
${answers.installation}

## Contributions
${answers.contributions}

## To Do
${answers.todo}

## GitHub
${answers.github}

## Email
${answers.email}`;

        fs.writeFile('TEST.md', template, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
    });
}

// Function call to initialize app
init();
