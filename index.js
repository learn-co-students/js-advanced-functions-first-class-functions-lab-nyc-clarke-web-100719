

const returnFirstTwoDrivers = (function(drivers){
    return drivers.slice(0,2);
});

const returnLastTwoDrivers = (function(drivers){
    let x = drivers.length;
    return drivers.slice(x-2,x);
});


const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];


function createFareMultiplier(num){
    return function(fare){
        return num * fare;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, func){
    return func(drivers);
}