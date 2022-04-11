class CustomSet {
  constructor() {
    this.items = {};
  }
  add(element) {
    if (this.has(element)) return false;
    this.items[element] = element;
    return true;
  }
  delete(element) {
    if (!this.has(element)) return false;
    delete this.items[element];
    return true;
  }
  has(element) {
    return Object.prototype.hasOwnProperty.call(this.items, element);
    /**
     * 等同于
     * this.itmes.hasOwnProperty(element)
     * 但是，如果这样的话，代码检查工具eslint会抛出一个错误，
     * 错误的原因为不是所有的对象都继承了Object.prototype，
     * 甚至继承了Object.prototype的对象上的hasOwnProperty
     * 方式也有可能被覆盖，导致代码不能正常工作。要避免出现这样
     * 的问题，使用Object.prototype.hasOwnProperty.call
     * 是更安全的做法
     */
  }
  clear() {
    this.items = {};
  }
  size() {
    return Object.keys(this.items).length;
  }
  values() {
    return Object.values(this.items);
  }
}
