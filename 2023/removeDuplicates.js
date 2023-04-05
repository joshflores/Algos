function removeDuplicates(arr) {
    let nonDuplicates = [];

    for (let i = 0; i < arr.length; i++) {
        console.log(arr.indexOf(arr[i]))
        if (arr.indexOf(arr[i]) === i) {
            nonDuplicates.push(arr[i]);
        }
    }
    return nonDuplicates;
}

let arr = [1,3,5,6,6,7];
console.log(removeDuplicates(arr));
