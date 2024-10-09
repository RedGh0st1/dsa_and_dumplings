class MinStack {
  constructor() {
    this.stack = [];
    this.min = null;
  }
  push(value) {
    if (this.min === null || value < this.min) {
      this.min = value;
    }
    this.stack.push(value);
  }

  top(value) {
    return this.stack(this.stack.length - 1);
  }
  getMin() {
    return this.min;
  }
}

module.exports = MinStack;
