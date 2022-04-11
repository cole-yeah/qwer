const defaultToStrFn = key => {
  if (key === null) {
    return "NULL";
  } else if (key === undefined) {
    return "UNDEFINED";
  } else if (typeof key === "string") {
    return key;
  }
  return key.toString();
};

class CustomMap {
  constructor(toStrFn = defaultToStrFn) {
    this.toStrFn = toStrFn;
    this.table = {};
  }
  set() {}
  remove() {}
  hasKey(key) {
    const curKey = this.toStrFn(key);
    return this.table[curKey] !== null;
  }
  get() {}
  clear() {}
  size() {}
  isEmpty() {}
  keys() {}
  values() {}
  keyValues() {}
  forEach() {}
}

function factorialIterative(number) {
  if (number < 0) return undefined;
  let total = 1;
  for (let n = number; n > 1; n--) {
    total = total * n;
  }
  return total;
}

function fn(index) {
  if (index === 0) return 0;
  if (index === 1) return 1;
  return fn(index - 2) + fn(index - 1);
}
