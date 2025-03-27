function reverseNumber(num) {

    const reversed = num.toString().split('').reverse().join('');

    return parseInt(reversed) * Math.sign(num);
}

const x = 32243;
console.log(reverseNumber(x)); 
