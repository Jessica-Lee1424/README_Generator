const inquirer = require('inquirer');
const fs = require('fs');

inquirer.createPromptModule([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        email: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project:',
        email: 'email address'
    },
]).then(answers => {
    const readmeContent = `
    # ${answers.title}
    ## Description
    ${answers.description}
    `;
    fs.writeFileSync('README.md', readmeContent);
    console.log('README.md has been generated!');
});