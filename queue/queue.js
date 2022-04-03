// 先进先出
class Queue {
  constructor() {
    this.items = []
  }
  // 入队列
  enqueue(ele) {
    this.items.push(ele)
  }
  // 出队列
  dequeue() {
    return this.items.shift()
  }
  // 获取第一个元素
  front() {
    if(this.isEmpty()) return null;
    return this.items[0]
  }
  // 判断队列是否为空
  isEmpty() {
    return this.items.length === 0
  }
  // 队列长度
  size() {
    return this.items.length
  }

  toString() {
    let str = this.items.join("")
    console.log(str);
  }
}

function passGame(nameList, num) {
  // 创建队列
  const queue = new Queue()
  // 将循环元素压入队列
  for(let i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i])
  }
  // 循环出、入队列
  while(queue.size() > 1) {
    for(let i = 0; i < num - 1; i++) {
      queue.enqueue(queue.dequeue())
    }
    queue.dequeue()
  }
  // 返回最顶元素
  return queue.front()
}

let result = passGame(["lhq", "zjc", "wzc", "666", "777"], 3)
console.log(result);
