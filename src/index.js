
exports.min = function min (array) {
    if (array && array.length > 0) {
        return array.sort((a, b) => a - b )[0];
        // return Math.min(...array);
    }
  return 0;
}

exports.max = function max (array) {
    if (array && array.length > 0) {
        return array.sort((a, b) => b - a )[0];
        // return Math.max(...array);
    }
  return 0;
}

exports.avg = function avg (array) {
    if (array && array.length > 0) {
        const sumVal = array.reduce((acc, val) => acc + val, 0);
        return sumVal / array.length;
    }
  return 0;
}
