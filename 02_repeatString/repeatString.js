const repeatString = function(a, b) {
    let result = ''
    for (let i = 0; i < b; i++) {
        result += a
    }
    return b < 0 ? 'ERROR' : result
};

// Do not edit below this line
module.exports = repeatString;
