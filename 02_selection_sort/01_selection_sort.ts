function findSmallest<T>(array: Array<T>): number {
  let smallest = array[0]
  let smallestIndex = 0

  array.forEach((item, index) => {
    if (item < smallest) {
      smallest = item
      smallestIndex = index
    }
  })

  return smallestIndex
}

console.log(findSmallest([5, 3, 6, 2, 10]))
