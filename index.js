// Code your solution in this file!

function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0,2);
}

function returnLastTwoDrivers(drivers) {
    const size = drivers.length;
    return drivers.slice(size-2, size);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num) {
   return  function(ele) {
      return  ele * num;
    };
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, whichDrivers) {
    return whichDrivers(drivers);
  };