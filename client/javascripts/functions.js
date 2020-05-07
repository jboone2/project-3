// jshint esversion: 6

//fill an array with the numbers from start to stop, in steps of step
let fillArray = (start, stop, step) => Array.from({
  length: (stop - start) / step + 1
}, (_, i) => start + (i * step));

//create an array of the numbers 1 - 100
let arrOf1To100 = fillArray(1, 100, 1);

//log the array for inspection
console.log(arrOf1To100);


let bitBatBotOrNot = (n) => {
  //your code goes here
  let result = (``);
  let notFlag = 1;
  if (n % 3 == 0) {
    result = `${result}Bit`;
    notFlag = 0;
  }
  if (n % 5 == 0) {
    result = `${result}Bat`;
    notFlag = 0;
  }
  if (n % 7 == 0) {
    result = `${result}Bot`;
    notFlag = 0;
  }
  if (notFlag == 1) {
    result = `${result}Not`;
  }
  return result;
};

let bitBatBotOrNotStringMaker = (n) => {
  //your code goes here
  let result = (n + `: `);
  let notFlag = 1;
  if (n % 3 == 0) {
    result = `${result}Bit`;
    notFlag = 0;
  }
  if (n % 5 == 0) {
    result = `${result}Bat`;
    notFlag = 0;
  }
  if (n % 7 == 0) {
    result = `${result}Bot`;
    notFlag = 0;
  }
  if (notFlag == 1) {
    result = `${result}Not`;
  }
  return result;
};

let findAllbitBatBotOrNots1 = (inArray) => {
  // Uses Array.map and no loops
  let outArray = inArray.map(bitBatBotOrNotStringMaker);
  console.log(outArray);
  return outArray;
};

let findAllbitBatBotOrNots2 = (inArray) => {
  // Uses for loop and Array.push
  var outArray = [];
  for (i = 0; i < inArray.length; i++) {
    outArray.push(bitBatBotOrNotStringMaker(inArray[i]));
  }
  console.log(outArray);
  return outArray;
};

let findAllbitBatBotOrNots3 = (inArray) => {
  // Uses for..of loop and Array.push
  //console.log(arr);
  var outArray = [];
  for (const element of inArray) {
    console.log(inArray[element]);
    outArray.push(bitBatBotOrNotStringMaker(inArray));
  }
  //console.log(outArray);
  //for (var item in outArray) {

  //  }
  return outArray;
};

let findAllbitBatBotOrNots4 = (inArray) => {
  // Uses Array.forEach and Array.push
  let arr = [2,3,5];
  let resultStr="";
  for(let n of arr){
  resultStr = resultStr + n + " ";
  }

  console.log(resultStr);
};

//test the functions

// findAllbitBatBotOrNots1(arrOf1To100)
//
// findAllbitBatBotOrNots2(arrOf1To100)
//
// findAllbitBatBotOrNots3(arrOf1To100)
//
// findAllbitBatBotOrNots4(arrOf1To100)
