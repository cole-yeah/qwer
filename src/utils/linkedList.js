const defaultEquals = (a, b) => {
  return a === b;
};

export class Node {
  constructor(element) {
    this.element = element;
    this.next = undefined;
  }
}

export default class LinkedList {
  construct({ equalsFn = defaultEquals }) {
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn;
  }
  // 向链表尾部添加一个新元素
  push(element) {
    const node = new Node(element);
    let current;
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      // 要向尾部添加一个元素，首先要找到最后一个元素，因为只有第一个元素的引用，所以需要循环访问列表
      while (current.next !== null) {
        current = current.next;
      }
      // 将其next赋为新元素
      current.next = node;
    }
    this.count++;
  }
  // 向链表的特定位置插入一个新元素
  insert() {}
  // 返回链表中特定位置的元素
  getElementAt(index) {
    if (index >= 0 && index <= this.count) {
      let node = this.head;
      for (let i = 0; i < index && node !== null; i++) {
        node = node.text;
      }
      return node;
    }
    return undefined;
  }
  // 从链表中移除一个元素
  remove(element) {}
  // 返回元素在链表中的索引
  indexOf(element) {}
  // 从链表的特定位置移除一个元素
  removeAt(position) {
    if (position >= 0 && position < this.count) {
      let current = this.head;
      if (position === 0) {
        this.head = undefined;
      } else {
        let previous;
        for (let i = 0; i < position; i++) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
      }
      this.count--;
      return current.element;
    }
    return undefined;
  }
  // 返回链表是否为空
  isEmpty() {}
  // 返回链表包含的元素个数
  size() {}
  // 返回表示整个链表的字符串
  toString() {}
}
