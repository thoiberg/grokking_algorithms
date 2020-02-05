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

console.log("findSmallest", findSmallest([5, 3, 6, 2, 10])) // index pos of 2 (smallest number) is 3

function selectionSort<T>(array: Array<T>): Array<T> {
  let newArray: Array<T> = []

  let arrayLength = array.length
  for (let i = 0; i < arrayLength; i++) {
    let smallestIndex = findSmallest(array)
    let smallestValue = array.splice(smallestIndex, 1)[0]
    newArray.push(smallestValue)
  }

  return newArray
}

console.log("selectionSort", selectionSort([5, 3, 6, 2, 10])) // [2, 3, 5, 6, 10]
