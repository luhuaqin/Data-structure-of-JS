// import { Node, SingleLinkedList } from "./single-linked-list";
// 在内存空间上可以不连续
// 链表对象中有两个元素：一个元素本身、另一个保存指向下一个链表对象的引用

class Node {
  constructor(element) {
    // 保存元素
    this.element = element;
    // 指向下一个节点
    this.next = null
  }
}

class linkedList {
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
    if(position < 0 || position > this.length) return false;

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
    if(position < 0 || position > this.length) return false;

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
    if(position < 0 || position < this.length) return false;

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

class DoubleNode extends Node {
  constructor(element) {
    super(element);
    this.prev = null
  }
}

class DoubleLinkedList extends linkedList {
  constructor() {
    super();
    this.tail = null
  }

  /**
   * 向链表尾部添加一个新项
   * @param {any} element 需要插入链表中的元素
   */
  append(element) {
    // 根据element创建node节点
    const newNode = new DoubleNode(element);

    // 判断链表是否为空
    if(this.length === 0) {
      this.head = newNode;
      this.tail = newNode
    }else {
      // 尾部添加添加元素
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
  }

  /**
   * 向链表指定位置插入一个新的项
   * @param {number} position 需要插入元素的位置
   * @param {any} element 需要插入链表中的元素
   */
  insert(position, element) {
    // 越界处理
    if(position < 0 || position > this.length) return false;

    // 创建node
    const newNode = new DoubleNode(element);

    // 判断位置插入元素
    if(position === 0) {
      if(this.head === null) {
        this.head = newNode;
        this.tail = newNode;
      }else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      }
    }else if(position === this.length) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode
    }else {
      let index = 0;
      let current = this.head;
      let prev = null;

      while(index++ < position) {
        prev = current;
        current = current.next
      }

      // 找到元素位置，开始插入元素
      prev.next = newNode;
      newNode.prev = prev;
      newNode.next = current;
      current.prev = newNode;
    }

    this.length ++;
    return true
  }

  /**
   * 获取对应位置的元素（继承父类）
   * @param {number} position 元素位置
   */
  // get(position) {}

  /**
   * 查找元素对应的索引，如果没有返回-1（继承父类）
   * @param {any} element 需要查找索引的元素
   */
  // indexOf(element) {}

  /**
   * 修改某个位置的元素（继承父类）
   * @param {number} position 元素新位置
   * @param {any} element 需要修改位置的元素
   */
  // update(position, element) {}

  /**
   * 从链表的特定位置移除一项
   * @param {number} position 需要移除的位置
   */
  removeAt(position) {
    if(position < 0 || position > this.length - 1) return false;

    // 根据position判断删除元素
    if(position === 0) {
      if(this.length === 1) {
        this.head = null;
        this.tail = null
      }else {
        this.head = this.head.next;
        this.head.prev = null
      }
    }else if(position === this.length - 1) {
      this.tail.prev.next = null;
      this.tail = this.tail.prev
    }else {
      let index = 0;
      let current = this.head;
      let prev = null;

      while(index++ < position) {
        prev = current;
        current = current.next
      }

      prev.next = current.next
      current.next.prev = prev
    }

    this.length --;
    return true
  }

  /**
   * 从链表中移除一项
   * @param {any} element 需要移除的元素
   */
  remove(element) {

  }

  /**
   * 链表是否为空，是返回TRUE，不是返回FALSE（继承父类）
   */
  // isEmpty() {}

  // /**
  //  * 链表长度(继承父类)
  //  */
  // size() {}
}


// 测试代码
const linkList = new DoubleLinkedList();

linkList.append('aaa');
linkList.append('bbb');
linkList.append('ccc');
linkList.append('ddd');

linkList.insert(1, '666');

console.log(linkList.isEmpty())
console.log(linkList.size())
linkList.removeAt(2)

console.log(linkList)
