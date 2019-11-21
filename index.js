// Code your solution in this file!

const log = {
  msg: (info) => {
    console.log(info);
  },
  line: () => {
    const arr = new Array(50).fill("-");
    console.log(arr.join(""));
  }
};

const returnFirstTwoDrivers = function (arrStrDrivers) {

  let arr = [];

  for (let i = 0; i < 2; i++) {
    arr.push(arrStrDrivers[i]);
  }

  return arr;
};

const returnLastTwoDrivers = function (arrStrDrivers) {
  let arr = [];
  let i = arrStrDrivers.length - 2;

  for (; i < arrStrDrivers.length; i++) {
    arr.push(arrStrDrivers[i]);
  }

  return arr;
};



const selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers
];

function multiplier(num) {
  return num ** 2;
}

const createFareMultiplier = () => {return multiplier};

function multipliesDouble(num){
  return num * 2;
}

const fareDoubler = multipliesDouble;

function multipliesTriple(num) {
  return num * 3;
}

const fareTripler = multipliesTriple;

// const selectDifferentDrivers = [
//   returnFirstTwoDrivers
// ]

function selectDifferentDrivers(arrStrDrivers, cb) {
  return cb(arrStrDrivers);
}

// const createFareMultiplier = ((num) => {
//   return num ** 4;
// })();









