

const range = len => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

export default function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth]
    return range(len).map(d => {
      return {
        name: "home device",
        mac: "74:69:69:2D:30:01",
        connected: 1,
        lastConnected: "2022-07-05T18:30:45.185Z",
        lastReport: "2022-07-05T18:30:45.185Z",
        actions: 1
      }
    })
  }

  return makeDataLevel()
}
