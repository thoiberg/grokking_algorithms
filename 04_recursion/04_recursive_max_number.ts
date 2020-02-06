function recursiveMaxNumber(
  array: Array<number>,
  maxNum: number = -Infinity
): number {
  // base case: there are no more items in the array
  // recursive case: there are items left in the array

  const [head, ...tail] = array

  if (head != undefined) {
    let tempMax = head > maxNum ? head : maxNum
    return recursiveMaxNumber(tail, tempMax)
  } else {
    return maxNum
  }
}

console.log("expected 99, got: ", recursiveMaxNumber([10, 99, 30, 55]))
console.log("expected -1, got: ", recursiveMaxNumber([-4, -3, -2, -1]))
