function Shape(name) {
  this.name = name;
}

Shape.prototype.logName = function() {
  console.log(`Shape name: ${this.name}`);
}



function Rectangle(name, width, height) {
  Shape.call(this, name);

  this.width = width;
  this.height = height;
}

Rectangle.prototype = Object.create(Shape.prototype);

Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.logName = function() {
  console.log(`Rectangle name: ${this.name}`);
}



function Circle(name, radius) {
  Shape.call(this, name);
  
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.constructor = Circle;



const rect = new Rectangle('Rectangle 1', 20, 20);
const circ = new Circle('Circle 1', 30);

// console.log(rect, circ);

rect.logName();
circ.logName();

// console.log(rect.constructor);