function fact(x: number): number {
  return x === 1 ? 1 : x * fact(x - 1)
}

console.log(fact(5)) // 120
