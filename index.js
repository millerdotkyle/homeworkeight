const fs = require('fs');
const inquirer = require('inquirer');
const shapes = require('./util/shapes');


inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your company name',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What color would you like the text to be',
      name: 'text',
    },
    {
        type: 'list',
        message: 'What shape would you like the logo to be?',
        name: 'shape',
        choices: ['circle', 'square', 'triangle']
    },
    {
      type: 'input',
      message: 'What color would you like for the shape?',
      name: 'color',
    }
  ])
  .then((response) => {
       fs.writeFile('./output/logo.svg', shapes(response), (err) => 
       err ? console.error(err) : console.log('Shape generated!') )
  });
  