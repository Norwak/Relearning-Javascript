class Stack {
  #items = new Array();
  #count = 0;

  constructor() {}

  get length() {
    return this.#count;
  }

  isEmpty() {
    return this.#count === 0;
  }

  push(item) {
    this.#items[this.#count] = item;
    this.#count++;
  }

  pop() {
    if (this.isEmpty()) {
      return 'Underflow';
    }

    const item = this.#items[this.#count - 1];
    this.#count--;

    this.#items.splice(this.#count, 1);

    return item;
  }

  peek() {
    if (this.isEmpty()) {
      return 'No items in stack';
    }

    return this.#items[this.#count-1];
  }

  clear() {
    this.#items = new Array();
    this.#count = 0;
  }
}

const stack = new Stack();

stack.push('Item 1');
stack.push('Item 2');
stack.push('Item 3');
console.log(stack);

stack.pop();
console.log('Top item:', stack.peek());

console.log('Item count is', stack.length);

stack.clear();
console.log(stack);