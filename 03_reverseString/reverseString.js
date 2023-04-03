const reverseString = function(string) {
    let splitString = string.split('');
    let reverseString = splitString.reverse();
    return reverseString.join('');
};

// Do not edit below this line
module.exports = reverseString;
