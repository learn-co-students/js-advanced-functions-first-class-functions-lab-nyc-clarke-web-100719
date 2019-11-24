const returnFirstTwoDrivers = function(driver) {
    return driver.slice(0, 2)
};

const returnLastTwoDrivers = function(driver) {
    return driver.slice(-2) 
};

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num) {
    return function(fare) {
        return fare*num
    };
};

const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare)
};

const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare)
};

function selectDifferentDrivers(drivers, driversFunction) {
    return driversFunction(drivers)
};