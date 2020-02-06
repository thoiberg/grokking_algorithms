function recursiveSum(array: Array<number>): number {
  //  base case: no more items in the array
  // recursive case: still items in the array
  let [head, ...tail] = array

  return head ? head + recursiveSum(tail) : 0
}

console.log(recursiveSum([1, 2, 3, 4])) // 10
