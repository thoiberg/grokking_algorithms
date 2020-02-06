function quickSort<T>(array: Array<T>): Array<T> {
  if (array.length < 2) {
    return array
  }

  const [pivot, ...rest] = array
  const lessThanPivot = rest.filter(item => item <= pivot)
  const greaterThanPivot = rest.filter(item => item > pivot)

  return [...quickSort(lessThanPivot), pivot, ...quickSort(greaterThanPivot)]
}

console.log("expected [ 2, 3, 5, 10 ], got: ", quickSort([10, 5, 2, 3]))

// playing around with different types
console.log(quickSort(["banana", "apple", "zz"]))
console.log(quickSort([[1, 3, 5], [99], [1, 2], [99, 1]]))
