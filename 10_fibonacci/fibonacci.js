const fibonacci = function(num) {
    if (num < 0) return "OOPS"
    let seq = {
        prev: 0,
        next: 1,
    };
    for (; num > 1; num--) {
        seq.temp = seq.next;
        seq.next += seq.prev;
        seq.prev = seq.temp;
    }
    return seq.next;
};

// Do not edit below this line
module.exports = fibonacci;
