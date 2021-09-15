// add whatever parameters you deem necessary
// add whatever parameters you deem necessary
function averagePair(arr, target) {
  // make pointers at start and end
  let left = 0;
  let right = arr.length - 1;

  // run loop until the paths cross or the truthy answer is found
  while (left < right) {
    let avg = (arr[left] + arr[right]) / 2;
    if (avg === target) {
      return true;
    } else if (avg < target) {
      left++;
    } else {
      right--;
    }
  }
  return false;
}

module.exports = { averagePair };