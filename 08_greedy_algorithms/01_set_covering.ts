let statesNeeded = new Set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"])

const stations = {
  kone: new Set(["id", "nv", "ut"]),
  ktwo: new Set(["wa", "id", "mt"]),
  kthree: new Set(["or", "nv", "ca"]),
  kfour: new Set(["nv", "ut"]),
  kfive: new Set(["ca", "az"]),
}

const finalStations = new Set()
while (statesNeeded.size > 0) {
  let bestStation: string | null = null
  let statesCovered: Set<string> = new Set()
  Object.entries(stations).forEach(([station, statesForStations]) => {
    let covered = new Set(
      [...statesNeeded].filter(state => statesForStations.has(state)),
    )

    if (covered.size > statesCovered.size) {
      bestStation = station
      statesCovered = covered
    }
  })

  statesNeeded = new Set([...statesNeeded].filter(x => !statesCovered.has(x)))
  finalStations.add(bestStation)
}

console.log("finalStations", finalStations) // Set { 'kone', 'ktwo', 'kthree', 'kfive' }
