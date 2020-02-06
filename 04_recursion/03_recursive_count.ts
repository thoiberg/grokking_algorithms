function recursiveCount<T>(array: Array<T>): number {
  // base case: the array is empty
  // recursive case: the array still has members

  let [head, ...tail] = array

  return head ? 1 + recursiveCount(tail) : 0
}

console.log("expected 5, got: ", recursiveCount([1, 2, 4, 8, 16]))
console.log("expected 0, got: ", recursiveCount([]))
