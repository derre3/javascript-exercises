const sumAll = function(n1, n2) {
    let start = n1;
    let end = n2;

    if (n1 > n2) {
        start = n2;
        end = n1;
    }

    if ((start > 0) && (end > 0) && (Number(start) === start) && (Number(end) === end)) {
        let sumNumbers = 0;
        for (let i = start; i <= end; i++) {
            sumNumbers += i;
        } return sumNumbers
    } else return "ERROR"
}

// Do not edit below this line
module.exports = sumAll;
