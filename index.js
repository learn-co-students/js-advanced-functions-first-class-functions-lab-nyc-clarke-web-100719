const returnFirstTwoDrivers = function(arr) {
    const newArr = arr.slice(0, 2);
    return newArr
}

const returnLastTwoDrivers = function(arr) {
    const newArr = arr.slice(-2);
    return newArr
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(int) {
    return function(value) {
        return value * int;
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arr, func) {
    return func(arr);
}