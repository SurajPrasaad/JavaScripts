if(!Array.prototype.myMap){
    Array.prototype.myMap = function(userFn){
        let OriginalArray = [];
        for(let index=0;index<this.length;index++){
                OriginalArray.push(userFn(this[index],index,this))
        }
        return OriginalArray;
    }
}

const arr = ["Suraj","Niraj","Krishna"];
 arr.myMap((elements,i)=>{
    if(arr[i].length > 5){
    console.log(elements)
    }
})

const arr2 = [1,2,3,4,5,6];
const result = arr2.myMap((elements)=>elements%2==0?"even":"odd")
console.log(result)
// Signatures: => userFn,
// return => new Array