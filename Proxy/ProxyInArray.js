let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function negativeIndex(arr) {
    return new Proxy(arr, {
        get(target, props) {
            const index = Number(props);
            if (index < 0) {
                return target[index];
            }
            return target[target.length + index];
        },
        set(target, props, value) {
            const index = Number(props);
            if (index < 0) {
                return target[target.length + index] = value;
            } else {
                target[index] = value;
            }
            return true;
        }
    })
}
let newArr = negativeIndex(arr);
newArr[-1] = 11;
console.log(newArr)
console.log(arr)