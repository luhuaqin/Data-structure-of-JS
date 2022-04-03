// 在内存空间上可以不连续
// 链表对象中有两个元素：一个元素本身、另一个保存指向下一个链表对象的引用

class linck {
  constructor(element) {
    // 当前元素
    this.element = element;
    this.next = null;
  }

  // append(element)：向链表尾部添加项
  // insert(position, element)：向链表的指定位置插入一个新项
  // get(position)：获取对应位置的元素
  // indexOf(element)：返回元素在链表中的索引，如果链表中没有该元素则返回-1
  // update(position, element)：修改某个元素的位置
  // removeAt(position)：从列表的特定位置移除一项
  // remove(element)：从链表中移除一项
  // isEmpty()：判断链表是否为空
  // size()：返回链表包含的元素个数，与数组的length属性类似
}