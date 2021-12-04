module.exports = templateData => {
    // console.log(templateData)
    return `
    #${templateData.name}\
    ###Description\
    ${templateData.description}\
    ##Table of Contents\
    * Installation\
    * Usage\
    * Credits\
    * License\
    ###Installation\
    ${templateData.installation}\
    ###Usage\
    ${templateData.use}\
    ###Credits\
    ${templateData.credits}\
    ###License\
    ${templateData.license}\
    ###Tests\
    ${templateData.tests}\
    ###Questions\
    Check out my GitHub profile at [${templateData.github}](https://github.com/${templateData.github})\
    You can also reach me at my email: ${templateData.email}
    `;
}
