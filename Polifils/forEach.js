if(!Array.prototype.myForEach){
    Array.prototype.myForEach = function(userFn){
        for(let i=0;i<this.length;i++){
            userFn(this[i],i)
        }
    }
}

const arr = [1,2,3,4,5]
arr.forEach((elements)=>{
    console.log(elements);
})

arr.myForEach((elements,i)=>{
    console.log(`The index is ${i} and ${elements}`)
})