function productExceptSelf(nums) {
    
    let length = nums.length - 1;
    const result = [1];
    let preFix = 1;
    let postFix = 1;
    
    for (let i = 0; i<=length; i++) {
        result[i] = preFix;
        preFix *= nums[i];
    }
    
    for (let i=length; i>=0; i--) {
        result[i] *= postFix;
        postFix *= nums[i];
    }
    return result;
};

let arr = [1,2,3,4];
console.log(productExceptSelf(arr))
