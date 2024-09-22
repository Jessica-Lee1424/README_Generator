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
        message: 'Choose a license for your project:',
    },
]).then(answers => {
    console.log(answers);

    // Determine the badge based on the selected license
    let licenseBadge = '';
    switch (answers.licenseOptions) {
        case 'MIT':
            licenseBadge = '![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)';
            break;
        case 'Apache':
            licenseBadge = '![Apache License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
            break;
        case 'BSD 2-Clause License':
            licenseBadge = '![BSD License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)';
            break;
        case 'Boost Software License 1.0':
            licenseBadge = '![Boost License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)';
            break;
        default:
            licenseBadge = ''; // No badge if no license is selected
    }

    const readmeContent = `# ${answers.title}

## License
${licenseBadge}

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributions
${answers.contributing}

## Testing
${answers.testing}

## GitHub Username
${answers.github}

## Email Address
${answers.email}
`;

    fs.writeFileSync('README.md', readmeContent);
    console.log('README.md has been generated!');
});

// import inquirer from 'inquirer';
// import fs from 'fs';

// inquirer.prompt([
//     {
//         type: 'input',
//         name: 'title',
//         message: 'What is the title of your project?',
//     },
//     {
//         type: 'input',
//         name: 'description',
//         message: 'Describe your project:',
//     },
//     {
//         type: 'input',
//         name: 'installation',
//         message: 'How are you installing your application?',
//     },
//     {
//         type: 'input',
//         name: 'usage',
//         message: 'How will you be using this application?',
//     },
//     {
//         type: 'input',
//         name: 'contributing',
//         message: 'Who else contributed to this application?',
//     },
//     {
//         type: 'input',
//         name: 'testing',
//         message: 'How do you run your tests on this application, if any?',
//     },
//     {
//         type: 'input',
//         name: 'github',
//         message: 'What is your GitHub username?',
//     },
//     {
//         type: 'input',
//         name: 'email',
//         message: 'What is your e-mail address?',
//     },
//     {
//         type: 'list',
//         name: 'licenseOptions',
//         choices: ['MIT', 'Apache', 'BSD 2-Clause License', 'Boost Software License 1.0'],
//         message: 'Choose a license for your project:',
//     },
// ]).then(answers => {
//     console.log(answers);  

//     const readmeContent = `# ${answers.title}

// ## Description
// ${answers.description}

// ## Installation
// ${answers.installation}

// ## Usage
// ${answers.usage}

// ## Contributions
// ${answers.contributing}

// ## Testing
// ${answers.testing}

// ## GitHub Username
// ${answers.github}

// ## Email Address
// ${answers.email}

// ## License
// ${answers.licenseOptions}
// `;

//     fs.writeFileSync('README.md', readmeContent);
//     console.log('README.md has been generated!');
// });
// const dropdownContent = document.querySelector('.dropdown-content');
// const selected = document.querySelector('.selected');
// const badgeContainer = document.getElementById('badgeContainer');

// // Function to render the license badge
// function renderLicenseBadge(license) {
//     let badgeHTML = '';

//     switch (license) {
//         case 'MIT':
//             badgeHTML = '<img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="MIT License Badge">';
//             break;
//         case 'Apache':
//             badgeHTML = '<img src="https://img.shields.io/badge/License-Apache_2.0-blue.svg" alt="Apache License Badge">';
//             break;
//         case 'BSD':
//             badgeHTML = '<img src="https://img.shields.io/badge/License-BSD_2--Clause-orange.svg" alt="BSD License Badge">';
//             break;
//         case 'Boost':
//             badgeHTML = '<img src="https://img.shields.io/badge/License-Boost_1.0-lightblue.svg" alt="Boost License Badge">';
//             break;
//         default:
//             badgeHTML = ''; // No badge if no license is selected
//     }

//     badgeContainer.innerHTML = badgeHTML; // Update the badge container
// }

// // Event listener for license selection
// dropdownContent.addEventListener('click', (event) => {
//     const selectedLicense = event.target.getAttribute('data-value');
//     if (selectedLicense) {
//         selected.textContent = selectedLicense; // Update the selected text
//         renderLicenseBadge(selectedLicense); // Call the function to render the badge
//     }
// });

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
