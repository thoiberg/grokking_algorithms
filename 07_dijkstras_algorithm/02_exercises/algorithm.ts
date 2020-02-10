import HashTable from "../../common/hash_table"

const findLowestCostNode = (
  costs: HashTable<number>,
  processed: Array<string>
) => {
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

export default (
  nodeGraph: HashTable<HashTable<number>>,
  startingNode: string,
  finishNode: string
): number => {
  const processed: Array<string> = []
  const costs: HashTable<number> = {}
  const parents: HashTable<string | null> = {}

  //   initial costs for the connections from the starting node
  Object.keys(nodeGraph).forEach(node => {
    costs[node] = Infinity
  })
  Object.keys(nodeGraph[startingNode]).forEach(node => {
    costs[node] = nodeGraph[startingNode][node]
  })

  let node = findLowestCostNode(costs, processed)
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

    node = findLowestCostNode(costs, processed)
  }

  return costs[finishNode]
}
