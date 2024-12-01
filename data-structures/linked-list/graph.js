export const autoCurry =
  (func) =>
  (...args) =>
    args.length >= func.length
      ? func(...args)
      : (nextArgs) => autoCurry(func)(...args, ...nextArgs)

export const pipe =
  (...functions) =>
  (initialValue) =>
    functions.reduce((acc, [func, args]) => func(acc, ...args), initialValue)

export const createGraph = () => ({})

export const addVertex = (graph, vertex) =>
  vertex in graph ? graph : { ...graph, [vertex]: [] }

export const addEdge = (graph, vertex1, vertex2) => {
  let newGraph = { ...graph }
  newGraph = addVertex(newGraph, vertex1)
  newGraph = addVertex(newGraph, vertex2)

  if (newGraph[vertex1] === undefined) {
    newGraph[vertex1] = [vertex2]
  } else if (!newGraph[vertex1].includes(vertex2)) {
    newGraph[vertex1] = [...newGraph[vertex1], vertex2]
  }

  return newGraph
}

export const displayGraph = (graph) =>
  Object.entries(graph)
    .map(([vertex, edges]) => `${vertex} -> [${edges.join(", ")}]`)
    .join("\n")

export const dfs = (graph, vertex, visited = new Set()) => [
  vertex,
  ...graph[vertex]
    .flatMap((neighbor) =>
      visited.has(neighbor)
        ? undefined
        : dfs(graph, neighbor, new Set(visited).add(vertex)),
    )
    .filter(Boolean),
]

// export const bfsRecursive = (
//   queue = [startVertex],
//   visited = new Set(startVertex),
// ) =>
//   queue.length === 0
//     ? undefined
//     : (currentVertex = queue.at(-1)) => [
//         currentVertex,
//         ...bfsRecursive(
//           ...graph[currentVertex].reduce(
//             ([queueAcc, visitedAcc], neighbor) =>
//               visited.has(neighbor)
//                 ? undefined
//                 : [[neighbor, ...queueAcc], new Set(visitedAcc).add(neighbor)],
//             [queue, visited],
//           ),
//         ),
//       ]
const activeSegBundles =
  segBundles?.filter((installation) =>
    existingInstallationsIds?.some((id) => installation.id === id),
  ) || []
export const bfs = (
  graph,
  startVertex,
  bfsRecursive = (queue = [startVertex], visited = new Set(startVertex)) =>
    queue.length === 0
      ? []
      : ((currentVertex = queue.at(-1)) => [
          currentVertex,
          ...bfsRecursive(
            ...graph[currentVertex].reduce(
              ([queueAcc, visitedAcc], neighbor) =>
                visited.has(neighbor)
                  ? []
                  : [
                      [neighbor, ...queueAcc],
                      new Set(visitedAcc).add(neighbor),
                    ],
              [queue.slice(0, -1), visited],
            ),
          ),
        ])(),
) => bfsRecursive()
