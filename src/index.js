
exports.min = function min (array) {
  if (!array||!array.length) return 0;
  let size = array.length;
  let min = 0;
  
  for (let i = 0; i < size; i++) {
    min = array[i] < min ? array[i] : min;
  }
  return min;
}

exports.max = function max (array) {
    if (!array||!array.length) return 0;
    let size = array.length;
    let max = 0;
    for (let i = 0; i < size; i++) {
      max = array[i] > max ? array[i] : max;
    }
    return max;
}

exports.avg = function avg (array) {
    if (!array||!array.length) return 0;
    let size = array.length;
    let sum = 0;
    for (let i = 0; i < size; i++) {
      sum += array[i];
    }
    return (sum / size);
}
