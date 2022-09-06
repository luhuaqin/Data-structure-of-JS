// 在内存空间上可以不连续
// 链表对象中有两个元素：一个元素本身、另一个保存指向下一个链表对象的引用

 export class Node {
  constructor() {
    // 保存元素
    this.element = element;
    // 指向下一个节点
    this.next = null
  }
}

export class linkedList {
  constructor(element) {
    this.head = null;
    this.length = 0
  }

  // append(element)：向链表尾部添加项
  append(element) {
    // 根据element创建Node对象
    const newNode = new Node(element);

    // 追加到最后
    if(!this.head) {
      this.head = newNode;
    }else {
      let current = this.head;
      while(current.next) {
        current = current.next;
      }

      current.next = newNode;
    }

    this.length++;
  }

  // insert(position, element)：向链表的指定位置插入一个新项
  insert(position, element) {
    // 越界处理
    if(position < 0 || position > this.length - 1) return false;

    // 创建新节点
    const newNode = new Node(element);

    // 插入元素
    if(position === 0) {
      newNode.next = this.head;
      this.head = newNode
    }else {
      let index = 0;
      let current = this.head;
      let prev = null;
      while(index++ < position) {
        prev = current;
        current = current.next;
      }
      prev.next = newNode;
      newNode.next = current
    }
  }

  // get(position)：获取对应位置的元素
  get(position) {
    // 越界处理
    if(position < 0 || position > this.length - 1) return false;

    // 查找该位置的元素
    let index = 0;
    let current = this.head;
    while(index++ < position) {
      current = current.next
    }

    return current.element
  }

  // indexOf(element)：返回元素在链表中的索引，如果链表中没有该元素则返回-1
  indexOf(element) {
    // 获取头元素
    let current = this.head;
    let index = 0;

    while(current) {
      if(current.element = element) {
        return index
      }
      index++;
      current = current.next
    }

    return -1
  }

  // removeAt(position)：从列表的特定位置移除一项
  removeAt(position) {
    // 越界处理
    if(position < 0 || position < this.length - 1) return false;

    // 删除元素
    let current = this.head;
    let index = 0;
    let prev = null;
    if(position === 0) {
      this.head = current.next;
    }else {
      while(index++ < position) {
        prev = current;
        current = current.next
      }
      prev.next = current.next
    }

    this.length--;
    return current.element
  }

  // update(position, element)：修改某个元素的位置
  update(position, element) {
    // 删除position位置的元素
    const result = this.removeAt(position);

    // 将element元素插入到position中
    this.insert(position, element)

    return result
  }

  // remove(element)：从链表中移除一项
  remove(element) {
    // 获取元素位置
    const index = this.indexOf(element);
    if(index === -1) return;

    // 删除该位置的元素
    this.removeAt(index)
  }

  // isEmpty()：判断链表是否为空
  isEmpty() {
    return this.length === 0
  }

  // size()：返回链表包含的元素个数，与数组的length属性类似
  size() {
    return this.length
  }
}