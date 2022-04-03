class Stack {
  constructor() {
    this.items = []
  }

  // 压栈
  push(ele) {
    this.items.push(ele)
  }

  // 弹栈
  pop() {
    if (this.items.length <= 0) {
      return "栈已空"
    } else {
      return this.items.pop()
    }
  }

  // 返回栈顶元素
  peek() {
    return this.items[this.items.length - 1]
  }

  // 栈是否为空
  isEmpty() {
    return this.items.length === 0
  }

  // 栈元素个数
  size() {
    return this.items.length
  }
}

const stack = new Stack()
stack.push("aaa")
stack.push("bbb")
stack.push("ccc")
console.log(stack.pop());
console.log(stack.size());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.isEmpty());