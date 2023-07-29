const fs = require('fs');
const inquirer = require('inquirer');
// const shapes = require('./util/shapes');

class SVG {
  constructor(name, textColor, shape, shapeColor) {
    this.name = name;
    this.textColor = textColor;
    this.shape = shape;
    this.shapeColor = shapeColor;
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`
  }
}



inquirer.prompt( [
  {
    type: 'input',
    message: 'What is your company name',
    name: 'name',
  },
  {
    type: 'input',
    message: 'What color would you like the text to be',
    name: 'textColor',
  },
  {
    type: 'list',
    message: 'What shape would you like the logo to be?',
    choices: ['circle', 'square', 'triangle'],
    name: 'shape'
  },
  {
    type: 'input',
    message: 'What color would you like for the shape?',
    name: 'shapeColor',
  }
])
.then((response) =>{
  console.log(response)
  const svg = new SVG(response.name, response.textColor, response.shape, response.shapeColor)
  console.log(svg)

})

// const runtime = () =>
//   new Promise((resolve, rejects)) => {

//     function getSVG() {
//       const response = inquirer.prompt(questions);

//       let answers = response.JSON();
      
//       const svg = new SVG(answers);
//       console.log(svg);
  
//     }

//   }



      //  fs.writeFile('./output/logo.svg', shapes(response), (err) => 
      //  err ? console.error(err) : console.log('Shape generated!') )
  
function fileCreate(data) {
  console.log(data);
}