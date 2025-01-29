const leapYears = function(year) {
    const divisibleByFour = year % 4 === 0
    const century = year % 100 === 0
    const fourthCentury = year % 400 === 0
    return divisibleByFour && (!century || fourthCentury) ? true : false
};

// Do not edit below this line
module.exports = leapYears;
