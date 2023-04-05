function partitionString(s) {

    let set = new Set();
    let count = 1;

    for (const c of s) {
        if (!set.has(c)) set.add(c)
        else {
            set = new Set([c])
            count++
        }
    }
    return count
}

let str = "abacaba";
console.log(partitionString(str))
