import HashTable from "../common/hash_table"

const nodeGraph: HashTable<HashTable<number>> = {
  start: {
    a: 6,
    b: 2,
  },
  a: {
    fin: 1,
  },
  b: {
    a: 3,
    fin: 5,
  },
  fin: {},
}

const costs: HashTable<number> = {
  a: 6,
  b: 2,
  fin: Infinity,
}

const parents: HashTable<string | null> = {
  a: "start",
  b: "start",
  fin: null,
}

const processed: Array<string> = []

// process:
// while there are nodes to process
// grab the node closest to the start
// update costs for it's neighbours
// if any neighbours costs were updated, update the parents too
// mark the node as processed
const findLowestCostNode = (costs: HashTable<number>) => {
  let lowestCost = Infinity
  let lowestCostNode: string | null = null

  Object.keys(costs).forEach(node => {
    let cost = costs[node]

    if (cost < lowestCost && !processed.includes(node)) {
      lowestCost = cost
      lowestCostNode = node
    }
  })
  return lowestCostNode
}

let node = findLowestCostNode(costs)
while (node != null) {
  let cost = costs[node]
  let neighbours = nodeGraph[node]

  Object.keys(neighbours).forEach(neighbourNode => {
    let newCost = cost + neighbours[neighbourNode]
    if (costs[neighbourNode] > newCost) {
      costs[neighbourNode] = newCost
      parents[neighbourNode] = node
    }
  })
  processed.push(node!)
  node = findLowestCostNode(costs)
}

console.log("the lowest cost to fin is:", costs["fin"])
