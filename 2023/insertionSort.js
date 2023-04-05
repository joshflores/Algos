function insertionSort(nums) {
    for (let i = 1; i < nums.length; i++) {
        let j = i;
        while (j > 0 && nums[j] < nums[j - 1]) {
            // Swap
            let temp = nums[j];
            nums[j] = nums[j - 1];
            nums[j - 1] = temp;
            j--;
        }
    }
    return nums;
}

console.log(insertionSort([5, 3, 8, 2, 1, 4]));  // Output: [1, 2, 3, 4, 5, 8]

