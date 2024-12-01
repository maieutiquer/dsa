import {
  addEdge,
  addVertex,
  bfs,
  createGraph,
  dfs,
  displayGraph,
  pipe,
} from "./graph"

test.skip("create and display graph with vertices and edges", () => {
  const graph = pipe(
    [addVertex, ["A"]],
    [addVertex, ["B"]],
    [addVertex, ["C"]],
    [addEdge, ["A", "B"]],
    [addEdge, ["B", "A"]],
    [addEdge, ["B", "D"]],
  )(createGraph())

  expect(displayGraph(graph)).toBe(
    `A -> [B]
B -> [A, D]
C -> []
D -> []`,
  )
})

test.skip("dfs", () => {
  const graph = pipe(
    [addVertex, ["A"]],
    [addEdge, ["B", "D"]],
    [addEdge, ["D", "B"]],
    [addEdge, ["A", "C"]],
    [addEdge, ["D", "C"]],
    [addEdge, ["C", "B"]],
  )(createGraph())

  expect(dfs(graph, "B").join(", ")).toBe("B, D, C")
})

test.only("bfs", () => {
  const graph = pipe(
    [addVertex, ["A"]],
    [addEdge, ["A", "D"]],
    [addEdge, ["D", "B"]],
    [addEdge, ["B", "A"]],
    // [addEdge, ["A", "C"]],
    // [addEdge, ["D", "C"]],
    // [addEdge, ["C", "B"]],
  )(createGraph())

  console.log(bfs(graph, "A"))

  expect(bfs(graph, "A").join(", ")).toBe("B, D, C")
})
