function binarySearch<T>(list: Array<T>, item: T): number | null {
  let low = 0
  let high = list.length - 1

  while (low <= high) {
    let mid = Math.floor(low + high / 2)
    console.log("mid is ", mid)
    let guess = list[mid]

    if (guess === item) {
      return mid
    } else if (guess > item) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }

  return null
}

const myList = [1, 3, 5, 7, 9]

console.log(binarySearch(myList, 3)) // 1
console.log(binarySearch(myList, -1)) // null
