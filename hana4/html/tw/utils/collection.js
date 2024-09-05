export class Collection {
  #arr = [];

  constructor(...args) {
    this.#arr.push(...args);
  }

  get _arr() {
    return this.#arr;
  }

  push(...args) {
    this.#arr.push(...args);
    return this.#arr;
  }

  get peek() {
    return this.#isQueue() ? this.#arr[0] : this.#arr.at(-1);
  }

  get poll() {
    return this.#isQueue() ? this.#arr.shift() : this.#arr.pop();
  }

  remove() {
    return this.poll;
  }

  get length() {
    return this.#arr.length;
  }

  get isEmpty() {
    return !this.#arr.length;
  }

  clear() {
    this.#arr.length = 0;
  }

  iterator() {
    return this[Symbol.iterator]();
  }

  *[Symbol.iterator]() {
    for (let i = this.length - 1; i >= 0; i -= 1) {
      yield this.toArray()[i];
    }
  }

  toArray() {
    return this.#isQueue() ? this.#arr.toReversed() : this.#arr;
  }

  print() {
    console.log(`<${this.constructor.name}: [${this.toArray()}]>`);
  }

  #isQueue() {
    // console.log('>>', this.constructor.name); // exact-matching
    return this instanceof Queue;
  }
}

export class Stack extends Collection {
  pop() {
    // return this.#arr.pop();
    return this._arr.pop();
  }
}

export class Queue extends Collection {
  enqueue(...args) {
    this.push(...args);
    return this._arr;
  }

  dequeue() {
    return this._arr.shift();
  }
}