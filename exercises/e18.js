/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  let mostCommonYear = data.asteroids.map((ast) => {
    return ast.discoveryYear;
  }).reduce((acc, val) => {
    const currCount = acc[val] ?? 0;
    return {
      ...acc,
      [val]: currCount + 1,
    }
  }, {});
  // I don't understand this use of reduce method; found it online(what is "??"?)
  let maxBy = ((arr, cb) => {
    let max = [];
    for (let i = 0; i < arr.length; i++) {
      if (i === 0) {
          max.push(arr[i]);
      }
      else if (cb(arr[i]) > cb(max[0])) {
          max.pop(max[0]);
          max.push(arr[i]);
      }
    }
    return max;
  })
  return parseInt(maxBy((Object.entries(mostCommonYear)), entry => entry[1])[0]);
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
