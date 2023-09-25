class Rectangle {
  constructor(name, width, height) {
    this.name = name;
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }

  perimeter() {
    return 2 * (this.width + this.height);
  }

  isSquare() {
    return this.width === this.height;
  }

  changeName(newName) {
    this.name = newName
    return `Name changed to ${this.name}`;
  }

  logArea() {
    console.log('Rectangle area: ' + this.area());
  }
}

const rect = new Rectangle('Rect', 10, 20);
const rect2 = new Rectangle('Rect 2', 40, 40);

console.log(rect);
console.log(rect2);
console.log(rect.perimeter());
console.log(rect.isSquare());
console.log(rect.changeName('Different rectangle'));
rect.logArea();