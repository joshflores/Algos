function removeNonNumericItems(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (typeof arr[i] !== 'number') {
      arr.splice(i, 1);
    }
  }
}

const arr = [1, 'a', 'b', 2];
removeNonNumericItems(arr);

console.log(arr); // Output: [1, 2]
