/**
 * Build two frequency counters. If any of the message characters are not
 *  found in the 'letters' characters, or if there are not enough of them,
 *  return false. Otherwise return true.
 */

// add whatever parameters you deem necessary
const makeCounter = str => {
  const freqCounter = {};
  for (let char of str) {
    freqCounter[char] = freqCounter[char] + 1 || 1;
  }
  return freqCounter;
};

function constructNote(msg, letters) {
  const msgCounter = makeCounter(msg);
  const lettersCounter = makeCounter(letters);

  for (let key in msgCounter) {
    if (!lettersCounter[key]) return false;
    if (lettersCounter[key] < msgCounter[key]) return false;
  }
  return true;
}

module.exports = { makeCounter, constructNote }