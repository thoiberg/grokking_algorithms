function sum(array: Array<number>): number {
  let total = 0
  array.forEach(item => (total += item))

  return total
}

console.log(sum([1, 2, 3, 4])) // 10
