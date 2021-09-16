// add whatever parameters you deem necessary
/**
 * Convert the keys array into an object using Array.prototype.reduce.
 *  In the reduce callback function, set the current value as a key in
 *  the accumulator object, with the value set to whatever element is
 *  at the current index in the values array.
 *
 *  MDN reduce -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 */
 function twoArrayObject(keys, values) {
  let resultDict = {};

  keys.forEach(function(key, index) {
    resultDict[key] = index < values.length ? values[index] : null;
  });

  return resultDict;
}

module.exports = { twoArrayObject}
