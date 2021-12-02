const generatePage = () => {
    return `
    # ${projectName}
    ### Description
    this is similar to the about me content from the module
    ## Table of Contents
    1. [Installation](#Installation)
    2. [Usage](#Usage)
    3. [License](#License)
    4. [Contributing](#Contributing)
    5. [Tests](#Tests)
    6. [Questions](#Questions)
    ### Usage
    `
}
console.log(generatePage());

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