import inquirer from 'inquirer';
import fs from 'fs';

inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project:',

    },
    {
        type: 'input',
        name: 'installation',
        message: 'How are you installing your application?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How will you be using this application?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Who else contributed to this application?',
    },
    {
        type: 'input',
        name: 'testing',
        message: 'How do you run your tests on this application, if any?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your e-mail address?',
    },
    {
        type: 'list',
        name: 'licenseOptions',
        choices: ['MIT', 'Apache', 'BSD 2-Clause License', 'Boost Software License 1.0'],
        message: 'How do you run your tests on this application, if any?',
    },
]).then(answers => {
console.log(answers);  

    const readmeContent = `
    # ${answers.title}
    # Description
    ${answers.description}
    # Installation
    ${answers.installation}
    # Usage
    ${answers.usage}
    # Contributions
    ${answers.contributing}
    # Testing
    ${answers.testing}
    # GitHub UserName
    ${answers.github}
    # Email Address
    ${answers.email}
    # License
    ${answers.licenseOptions}
    `;
    fs.writeFileSync('README.md', readmeContent);
    console.log('README.md has been generated!');
});



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