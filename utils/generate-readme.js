const fs = require("fs");

fs.writeFile('readme.md', generatePage(project), err => {
    if (err) throw err;

    console.log('Markdown Complete.  Check readme.md to see the output');
})

module.exports = writeFile;