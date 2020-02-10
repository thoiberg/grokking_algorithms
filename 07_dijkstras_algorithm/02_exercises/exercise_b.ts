import HashTable from "../../common/hash_table"
import djikstrasAlgorithm from "./algorithm"

const nodeGraphB: HashTable<HashTable<number>> = {
  start: {
    a: 10,
  },
  a: {
    b: 20,
  },
  b: {
    c: 1,
    fin: 30,
  },
  c: {
    a: 1,
  },
  fin: {},
}

console.log(
  "The least cost path for exercise B is: ",
  djikstrasAlgorithm(nodeGraphB, "start", "fin")
)
