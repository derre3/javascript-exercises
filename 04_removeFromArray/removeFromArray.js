const removeFromArray = function(arr, ...target) {
    let i = 0;
    let j = 0;
    while (i < arr.length) {
        while (j < target.length) {
            if (arr[i] === target[j]) {
                arr.splice(i, 1);
                j = 0;
            } else j++
        } 
        i++;
        j = 0;
    } return arr
};

// Do not edit below this line
module.exports = removeFromArray;


// const newArr = [];
// arr.forEach(element => {
//     if (!target.includes(element)) {
//         newArr.push(element);
//     }
// });
// return newArr;


// return arr.filter(val => !target.includes(val))