class Shape {
    constructor(name, textColor, shape, shapeColor) {
      this.name = name;
      this.textColor = textColor;
      this.shape = shape;
      this.shapeColor = shapeColor;
    }
  }

  class Square extends Shape {
    constructor(name, textColor, shapeColor) {
      super(name, textColor, shapeColor);
    }

    render() {
      return `<rect x="50" height="150" width="150" fill="${this.shapeColor}" />`;
    }
  }

  class Circle extends Shape {
    constructor(name, textColor, shape, shapeColor) {
      super(name, textColor, shape, shapeColor);
    }
    render(){
      return `<circle cx="150" cy="150" r="80" fill="${this.shapeColor}">`
  }

  }

  class Triangle extends Shape {
    constructor(name, textColor, shape, shapeColor) {
      super(name, textColor, shape, shapeColor);
    }
    render () {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
    }

  }

module.exports = {Square, Circle, Triangle}


/* <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<circle cx="150" cy="100" r="80" fill="green" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg> */