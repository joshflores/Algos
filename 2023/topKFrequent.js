var topKFrequent = (nums, k) => {
    let frequency = new Map();

    nums.forEach(num => {
        frequency.set(num, (frequency.get(num) || 0) + 1);
    });

    let sortedFrequency = [...frequency.entries()].sort((a, b) => b[1] - a[1]);
    let map = new Map(sortedFrequency);
    
    let mostFrequent = Array.from(map.entries()).slice(0, k).map(entry => entry[0])

    return mostFrequent;
}

let arr = [1,1,1,2,2,3,4,5,7,7,7];
console.log(topKFrequent(arr, 3))
