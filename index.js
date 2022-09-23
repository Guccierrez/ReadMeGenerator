// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README


const inquirer = require("inquirer")
const fs= require ("fs")

function generateBadgeForLicense(license){
    if (license === "MIT"){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"};

    if (license === "ISC"){
    return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"};

    if (license === "IBM"){
    return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"};

    if (license === "Eclipse Public License"){
    return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"};

    
}


let readMeText = (data)=>{
return`
# ${generateBadgeForLicense(data.license)} ${data.repoName}

## Table of Contents  
* [description](#description)  
* [installation](#installation) 
* [usage](#usage)  
* [contributers](#contributers) 
* [license](#license)
* [test](#test)
* [github](#github)  
* [email](#email)  

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributers
${data.contribution}

## License
${data.license}

## Test
${data.testInstructions}

# Questions
#### for more information please contact me on github or email

## Github
    ${[data.github]}

## Email
    ${[data.email]}
`
}


const questions = [
    {
        type: 'input',
        name: 'repoName',
        message: 'What is the name of your Repository',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter instructions for installation',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Who contributed to your project',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project?',
        choices: ["MIT", "ISC", "IBM", "Eclipse Public License"],
    },
    {
        type: 'input',
        name: 'testInstructions',
        message: 'Are there any test instructions? ',
        
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username link?',
        
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    
];


inquirer.prompt(questions).then((data)=>{
    console.log(data)
    fs.writeFile("readMe.md", readMeText(data), function(err){
        if(err) 
        console.log(err);
        
        
    })
    
})




