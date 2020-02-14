const generateCellMatrix = (
  rows: number,
  cols: number,
): Array<Array<number>> => {
  const matrix = new Array(rows)

  for (let i = 0; i < matrix.length; i++) {
    matrix[i] = new Array(cols).fill(0)
  }

  return matrix
}

const substring = (a: string, b: string): string => {
  const cellMatrix = generateCellMatrix(a.length + 1, b.length + 1)

  let lcs = 0
  let lastSubIndex = 0

  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      if (a[i - 1] === b[j - 1]) {
        cellMatrix[i][j] = cellMatrix[i - 1][j - 1] + 1
        if (cellMatrix[i][j] > lcs) {
          lcs = cellMatrix[i][j]
          lastSubIndex = i
        }
      } else {
        cellMatrix[i][j] = 0
      }
    }
  }

  return a.slice(lastSubIndex - lcs, lastSubIndex)
}

console.log(substring("vista", "hish")) // "is"
console.log(substring("fish", "hish")) // "ish"

const subsequence = (a: string, b: string): number => {
  const cellMatrix = generateCellMatrix(a.length + 1, b.length + 1)

  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      if (a[i] === b[j]) {
        cellMatrix[i][j] = cellMatrix[i - 1][j - 1] + 1
      } else {
        cellMatrix[i][j] = Math.max(cellMatrix[i - 1][j], cellMatrix[i][j - 1])
      }
    }
  }

  return cellMatrix[a.length][b.length]
}

console.log(subsequence("fish", "fosh")) // 3
console.log(subsequence("fort", "fosh")) // 2
