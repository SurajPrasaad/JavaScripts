if (!Array.prototype.myFilter) {
  Array.prototype.myFilter = function (userFn) {
    let OriginalArray = [];
    for (let index = 0; index < this.length; index++) {
      if (userFn(this[index],index,this)) {
        OriginalArray.push(this[index]);
      }
    }
    return OriginalArray;
  };
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const result = arr.myFilter((elements, i) => elements % 2 === 0);
console.log(result);

//Signatures => callback->typically provides three arguments
//return => new Array
