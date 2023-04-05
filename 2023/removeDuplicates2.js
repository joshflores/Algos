function removeDuplicates2(arr) {
    let nonDuplicates = [];
    
    arr.forEach(element => {
        if (!nonDuplicates.includes(element) ) {
            nonDuplicates.push(element);
        }
    });
    return nonDuplicates;
}

let arr = [1,1,3,4,5];
console.log(removeDuplicates2(arr));
