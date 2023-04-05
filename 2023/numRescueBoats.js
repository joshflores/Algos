var numRescueBoats = function(people, limit) {
    people.sort((a,b) => a - b);

    let left = 0;
    let right = people.length - 1;
    let count = 0;

    while (left <= right) {
        if (left == right) {
            count++;
            break;
        }

        if (people[left] + people[right] <= limit) {
            left++;
        }

        right--;
        count++;
    }

    return count;

};

let people = [3,2,2,2,2,1];
let limit = 3;
console.log(numRescueBoats(people, limit));
