class Shape {
    constructor(shapeColor) {
      this.shapeColor = shapeColor;
    }
    setColor(color) {
      this.shapeColor = color;
      return this;
    }
  }

  class Circle extends Shape {
    render(){
      return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`
   }
  }


  class Square extends Shape {
    render() {
      return `<rect x="50" height="150" width="150" fill="${this.shapeColor}" />`;
    }
  }

  class Triangle extends Shape {
    render () {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
    }
  }

module.exports = {Square, Circle, Triangle}


/* <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<circle cx="150" cy="100" r="80" fill="green" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg> */