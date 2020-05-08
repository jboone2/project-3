// jshint esversion: 6

//fill an array with the numbers from start to stop, in steps of step
let fillArray = (start, stop, step) => Array.from({
  length: (stop - start) / step + 1
}, (_, i) => start + (i * step));

let arrOf1To100 = fillArray(1, 100, 1);

let bitBatBotOrNot = (n) => {
  //Determine bitBatBotorNot string for a given number
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
  //Add prepended number to bitBatBotOrNot string
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
  var outArray = [];
  for (const element of inArray) {
    outArray.push(bitBatBotOrNotStringMaker(element));
  }
  console.log(outArray);
  return outArray;
};

let findAllbitBatBotOrNots4 = (inArray) => {
  // Uses Array.forEach and Array.push
  var outArray = [];
  inArray.forEach((element) => {
    outArray.push(bitBatBotOrNotStringMaker(element));
  });
  console.log(outArray);
  return outArray;
};

let findAllbitBatBotOrNotsXC = (inArray) => {
  // Uses for..in loop and Array.push
  var outArray = [];
  var j;
  for (j in inArray) {
    outArray.push(bitBatBotOrNotStringMaker(inArray[j]));
  }
  console.log(outArray);
  return outArray;
};
