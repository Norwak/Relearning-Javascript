// // CHEAP WAY WITH OBJECT LITERALS
// const node1 = {
//   value: 100
// };

// const node2 = {
//   value: 200
// };

// const node3 = {
//   value: 300
// };

// node1.next = node2;
// node2.next = node3;
// node3.next = null;
// console.log(node1, node2, node3);


class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {

  constructor() {
    this.head = null;
    this.length = 0;
  }

  // Insert first node (Head)
  insertFirst(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  // Insert last node (Tail)
  insertLast(value) {
    const newNode = new Node(value);
    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
    this.length++;
  }

  // Insert at index
  insertAt(value, index) {
    if (index > this.length) {
      return;
    }

    if (index === 0) {
      this.insertFirst(value);
      return;
    }

    if (index === this.length) {
      this.insertLast(value);
      return;
    }

    const newNode = new Node(value);
    let current, previous;
    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current;
      current = current.next;
      count++;
    }

    newNode.next = current;
    previous.next = newNode;
    this.length++;
  }

  // Get at index
  getAt(index) {
    if (index > this.length-1) {
      return false;
    }

    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) {
        return current.value;
      }

      current = current.next;
      count++;
    }
  }

  // Remove at index
  removeAt(index) {
    if (index > this.length-1) {
      return false;
    }

    let current = this.head;
    let previous;
    let count = 0;

    if (index === 0) {
      this.head = current.next;
    } else {

      while (count < index) {
        previous = current;
        current = current.next;
        count++;
      }

      previous.next = current.next;
      current = undefined;

    }

    this.length--;
  }

  // Print list data
  printListData() {
    let current = this.head;
    let list = '';

    while (current) {
      list += current.value + ' ';
      current = current.next;
    }

    return list;
  }

  // Clear list
  clearListData() {
    this.head = null;
  }
}



const list = new LinkedList();

list.insertFirst(100);
list.insertFirst(200);
list.insertFirst(300);
list.insertLast(50);
list.insertAt(75, 4);
list.removeAt(4);

list.clearListData();

console.log(list.printListData());
console.log(list.getAt(3));