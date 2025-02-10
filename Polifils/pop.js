if (!Array.prototype.myPop) {
  Array.prototype.myPop = function () {
    let lastElement = this[this.length - 1];
    this.length = this.length - 1;
    return lastElement;
  };
}

let arr = [1, 2, 3];
console.log(arr.myPop());
console.log(arr);
