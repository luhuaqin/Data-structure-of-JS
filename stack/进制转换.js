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



function dec2binary(num) {
  const stack = new Stack();
  // 循环取余数
  while(num > 0) {
    let remainder = num % 2;
    num = Math.floor(num / 2);
    stack.push(remainder);
  }

  let binString = "";
  while(!stack.isEmpty()) {
    binString += stack.pop();
  }
  console.log(binString);

  // 用此方法也可以完成进制数转字符串操作
  // let binString = stack.items.reverse().join("")
  // console.log(binString);
}

console.log(dec2binary(10));
