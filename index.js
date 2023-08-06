const fs = require('fs');
const inquirer = require('inquirer');
const shapes = require('./lib/shapes');
const { Circle, Square, Triangle } = require('./lib/shapes');

class SVG {
  constructor(name, textColor) {
    this.name = name;
    this.textColor = textColor;
  }
  fileRender() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">` 
  }
  textRender() {
    return `<text x="150" y="100" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.name}</text></svg>`
  }
}



inquirer.prompt( [
  {
    type: 'input',
    message: 'What is your company name (3 characters max)',
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
  let trimname = response.name.trim().slice(0,3);


  const svg = new SVG(trimname, response.textColor)
  console.log(svg)



  if(response.shape === 'circle') {
    var shape = new Circle(response.shapeColor);
  } else if (response.shape === 'square') {
    var shape = new Square.render(response.shapeColor);
  }
 else if (response.shape === 'triangle') {
  var shape = new Triangle.render(response.shapeColor);
  }

  let logo = svg.fileRender() + shape.render() + svg.textRender();

  fs.writeFile('./output/logo.svg', logo, (err) => 
  err ? console.error(err) : console.log('Shape generated!') )

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
  
// function fileCreate(data) {
//   console.log(data);
// }

/* <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<circle cx="150" cy="100" r="80" fill="green" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg> */