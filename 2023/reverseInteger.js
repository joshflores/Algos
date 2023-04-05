function reverseInteger(num) {
    let reversed = 0;

    while (num != 0) {
        const lastDigit = num % 10;
        reversed = reversed * 10 + lastDigit;
        num = Math.floor(num / 10);
    }
    return reversed;
}

const reversed = reverseInteger(2143);
console.log(reversed);
