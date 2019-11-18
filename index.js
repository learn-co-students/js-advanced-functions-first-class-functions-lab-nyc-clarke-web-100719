// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    let a = drivers.slice(0,2)
    return a
}

const returnLastTwoDrivers = function(drivers){
    let b = drivers.slice(-2)
    return b
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int){
    return function(a){
        return a * int
    }
}

function fareDoubler(int){
    return int * 2
}

function fareTripler(int){
    return int * 3
}

function selectDifferentDrivers(arrayOfDrivers, aFunc ){
    console.log(arrayOfDrivers)
    console.log(aFunc)
    return aFunc(arrayOfDrivers)
}