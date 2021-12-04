module.exports = templateData => {
    // console.log(templateData)
    return `
# ${templateData.name}
## Description
![Badge](https://img.shields.io/badge/license-${templateData.license}-blue)<br>
${templateData.description}
## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [Credits](#Credits)
* [License](#License)
## Installation
${templateData.installation}
## Usage
${templateData.use}
## Credits
${templateData.credits}
## License
This project is licensed under the ${templateData.license} license.
## Tests
${templateData.tests}
## Questions
Check out my GitHub profile at [${templateData.github}](https://github.com/${templateData.github})<br>
You can also reach me at my email: ${templateData.email}
    `;
}
