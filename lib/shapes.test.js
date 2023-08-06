// Constructor classes imported.
const { Circle, Square, Triangle } = require('./shapes.js');


describe('Shapes', () => {
  describe('Circle', () => {
    it('should take a color and output a line of SVG shape file', () => {
      const shape = new Circle();
      shape.setColor("blue");
      expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
    });
  });
});



describe('Shapes', () => {
    describe('Triangle', () => {
      it('should take a color and output a line of SVG shape file', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
      });
    });
  });
  
  describe('Shapes', () => {
    describe('Square', () => {
      it('should take a color and output a line of SVG shape file', () => {
        const shape = new Square();
        shape.setColor("blue");
        expect(shape.render()).toEqual(`<rect x="50" height="150" width="150" fill="blue" />`);
      });
    });
  });
  

