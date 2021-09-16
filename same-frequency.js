// add whatever parameters you deem necessary
function createFrequencyCounter(str) {
  let frequencies = new Map();

  for (let val of str) {
    let valCount = frequencies.get(val) || 0;
    frequencies.set(val, valCount + 1);
  }

  return frequencies;
}

function sameFrequency(num1, num2) {
  const str1 = num1.toString();
  const str2 = num2.toString();
  if(str1.length !== str2.length) return false;
  
  const charMap1 = createFrequencyCounter(str1);
  const charMap2 = createFrequencyCounter(str2);
  if(charMap1.size != charMap2.size) return false;
  for (let letter of charMap1.keys()){
    if (charMap2.get(letter) !== charMap1.get(letter)) return false;
  }
  return true;
}


module.exports = { createFrequencyCounter, sameFrequency }