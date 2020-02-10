import HashTable from "../../common/hash_table"
import djikstrasAlgorithm from "./algorithm"

// exercise 7.1 A
const nodeGraphA: HashTable<HashTable<number>> = {
  start: {
    a: 5,
    b: 2,
  },
  a: {
    c: 4,
    d: 2,
  },
  b: {
    a: 8,
    d: 7,
  },
  c: {
    fin: 3,
  },
  d: {
    fin: 1,
  },
  fin: {},
}

console.log(
  "The least cost path for exercise A is: ",
  djikstrasAlgorithm(nodeGraphA, "start", "fin")
)
