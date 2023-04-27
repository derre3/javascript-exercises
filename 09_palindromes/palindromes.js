const palindromes = function (str) {
    str = str.replace(/[^\p{L}]/gu, '').toLowerCase();
    const strRev = str.split('').reverse().join('');
    return strRev === str;
};

// Do not edit below this line
module.exports = palindromes;
