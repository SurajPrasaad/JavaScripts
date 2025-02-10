if (!Array.prototype.myFill) {
    Array.prototype.myFill = function myFill(
        elements,
        start = 0,
        end = this.length
    ) {
        start = start < 0 ? Math.max(this.length + start, 0) : start;
        console.log(start);
        end =
            end < 0
                ? Math.max(this.length + end, 0)
                : Math.min(this.length + end, end);
        console.log(end);
        for (let index = start; index < end; index++) {
            this[index] = elements;
        }
        return this;
    };
}

const array = [1, 2, 3, 4, 5];
array.myFill("💖");
console.log(array);

//Signatures: => elements ,startIndex,endingIndex
//return: => modify array ko