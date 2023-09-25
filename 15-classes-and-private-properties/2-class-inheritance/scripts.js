class Shape {
  constructor(name) {
    this.name = name;
  }

  logName() {
    console.log(`Shape name: ${this.name}`);
  }
}

class Rectangle extends Shape {
  constructor(name, width, height) {
    super(name);
    
    this.width = width;
    this.height = height;
  }

  logName() {
    console.log(`Rectangle name: ${this.name}`);
  }
}

class Circle extends Shape {
  constructor(name, radius) {
    super(name);
    
    this.radius = radius;
  }
}

const rect = new Rectangle('Rectangle 1', 20, 20);
const circ = new Circle('Circle 1', 30);

console.log(rect, circ);

rect.logName();
circ.logName();

// console.log(rect.constructor);