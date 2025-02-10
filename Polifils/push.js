if(!Array.prototype.myPush){
    Array.prototype.myPush = function(...elements){
        let length = this.length
        for(let i = 0;i<elements.length;i++){
            this[length] = elements[i];
            length++;
        }
        return this.length
    }
}

let arr = [1,2,3];
arr.myPush(60)
console.log(arr)