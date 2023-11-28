class Queue {
  #items = new Array();
  #count = 0;
  #front = 0;

  constructor() {};

  get length() {
    return this.#count - this.#front;
  }

  isEmpty() {
    return this.#count === 0;
  }

  enqueue(item) {
    this.#items[this.#count++] = item;
  }

  dequeue() {
    if (this.isEmpty()) {
      return 'Here are no items in queue.';
    }

    const item = this.#items[this.#front];

    for (let i = this.#front; i < this.#count-1; i++) {
      this.#items[i] = this.#items[i+1];
    }

    this.#count--;
    this.#items.length = this.#count;

    return item;
  }

  peek() {
    if (this.isEmpty()) {
      return 'Here are no items in queue.';
    }

    return this.#items[this.#front];
  }
}

const queue = new Queue();
console.log('Front item:', queue.peek());

queue.enqueue('Item 1');
queue.enqueue('Item 2');
queue.enqueue('Item 3');
queue.enqueue('Item 4');
console.log(queue);

queue.dequeue();
console.log(queue);
console.log('Queue length:', queue.length);