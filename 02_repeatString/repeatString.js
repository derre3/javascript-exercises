const repeatString = function(string, num) {
    let stringConcat = '';
    if (num >= 0) {
        for (let i = 0; i < num; i++) {
            stringConcat += string;
        }
        return stringConcat
    } else return "ERROR"
};

// Do not edit below this line
module.exports = repeatString;
