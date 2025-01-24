const removeFromArray = function(a, ...args) {
    return a.filter(val => !args.includes(val));
};

// Do not edit below this line
module.exports = removeFromArray;
