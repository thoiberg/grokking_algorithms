interface HashTable<T> {
  [key: string]: T
}

const graph: HashTable<Array<string>> = {}
graph.you = ["alice", "bob", "claire"]
graph.bob = ["anuj", "peggy"]
graph.alice = ["peggy"]
graph.claire = ["thom", "jonny"]
graph.peggy = []
graph.thom = []
graph.jonny = []

const breadthFirstSearch = (): boolean => {
  let searchQueue = graph.you
  let searched: Array<string> = []

  while (searchQueue.length > 0) {
    let person = searchQueue.shift()
    if (!searched.includes(person!)) {
      if (personIsSeller(person!)) {
        console.log(`${person} is a mango seller!`)
        searched.push(person!)
        return true
      } else {
        searchQueue = searchQueue.concat(graph[person!])
      }
    }
  }
  return false
}

const personIsSeller = (person: string) => person.endsWith("m")

breadthFirstSearch()
