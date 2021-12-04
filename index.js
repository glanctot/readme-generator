const inquirer = require('inquirer');
const generatePage = require('./src/page-template.js');
const fs = require("fs");

// add confirm for some questions

const promptUser = readmeData => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the title of your project? (Required)',
            validate: projectName => {
                if (projectName) {
                    return true;
                } else {
                    console.log('Please enter a project name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of your project. (Required)',
            validate: description => {
                if (description) {
                    return true;
                } else {
                    console.log('Please enter a description of your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project? (Required)',
            validate: installation => {
                if (installation) {
                    return true;
                } else {
                    console.log('Please enter the steps to install your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'use',
            message: 'Provide instructions and examples for use. (Required)',
            validate: use => {
                if (use) {
                    return true;
                } else {
                    console.log('Please provide instructions and examples for use!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'credits',
            message: 'List any collaborators, third-party assets or tutorials. (Required)',
            validate: credits => {
                if (credits) {
                    return true;
                } else {
                    console.log('Please enter any credits.  If none type "none".');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Write any tests for your application and provide examples on how to run them.',
            validate: tests => {
                if (tests) {
                    return true;
                } else {
                    console.log('Please enter any tests.  If none type "none".');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Choose a license would you like to include?',
            choices: ['BSD3', 'MIT', 'APACHE2.0', 'GPL3.0', 'None']
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your github username. (Required)',
            validate: githubName => {
                if (githubName) {
                    return true;
                } else {
                    console.log('Please enter your github username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address. (Required)',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        }
    ])
}
    promptUser()
    .then(readmeData => {
        const pageRead = generatePage(readmeData);

        fs.writeFile('readme.md', pageRead, err => {
            if (err) throw err;
        
            console.log('Markdown Complete.  Check readme.md to see the output');
        })
    })
/* const fs = require("fs");

const generatePage = require('./src/page-template.js')



fs.writeFile('readme.md', generatePage(project), err => {
    if (err) throw err;

    console.log('Markdown Complete.  Check readme.md to see the output');
}) */

// enter title for project, displayed as title for readme
// enter description, installation instructions, usage info, contribution guidelines and test instructions then this info is added to corresponding sections
// choose a license, badge added to top of readme and notice is added to section of license
// enter github username and email then added to questions section
// click on links in table of contents then taken to corresponding section of readme

// installation: what steps are required to install your project? Provide step by step instructions on how to get running
// usage: provide instructions and examples for use
// license: explains which license the application is covered under
// contributing: list any collaborators
// tests: write tests for your application
// questions: github username and email added to questions
/* ### Description
    this is similar to the about me content from the module
    ## Table of Contents
    1. [Installation](#Installation)
    2. [Usage](#Usage)
    3. [License](#License)
    4. [Contributing](#Contributing)
    5. [Tests](#Tests)
    6. [Questions](#Questions)
    ### Usage */