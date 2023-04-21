/**
 * Make sure to read the e17.md file!
 * For this exercise we want you to make custom `maxBy` and `minBy` methods. 
 * In order to do this it is ok to use any type of FOR loops. 
 * REQUIREMENTS: functions should:
 * * Take an array of things
 * * minBy(): Return the element where the callback function on that element yields the lowest value
 * * maxBy(): Return the element where the callback function on that element yields the highest value
 */

export function minBy(array, cb) {
  let minVal = [];
  for (let i = 0; i < array.length; i++) {
    if (i === 0) {
      minVal.push(array[i]);
    }
    else if (cb(array[i]) < cb(minVal[0])) {
      minVal.pop(minVal[0]);
      minVal.push(array[i]);
    }
  }
  return minVal[0];
}

export function maxBy(array, cb) {
  let maxVal = [];
  for (let i = 0; i < array.length; i++) {
    if (i === 0) {
      maxVal.push(array[i]);
    }
    else if (cb(array[i]) > cb(maxVal[0])) {
      maxVal.pop(maxVal[0]);
      maxVal.push(array[i]);
    }
  }
  return maxVal[0];
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-17"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function