import { blank, max, min } from './const'
import { evaluate } from './evaluate.js'
import { theIndexArray } from './generateIndexArray'

const childs = (node) => {
  let rst = []
  for (let i in node) for (let j in node[i]) if (node[i][j] === blank) rst.push([i, j])
  return rst
}

const childNode = (node, position, val) => {
  let rst = node.map((x) => [...x])
  rst[position[0]][position[1]] = val
  return rst
}

const theWinner = (node) => {
  const xx = theIndexArray.map((x) => x.map((position) => node[position[0]][position[1]] || '-').join(''))
  if (xx.some((x) => RegExp(Array(5).fill(max).join('')).test(x))) return max
  if (xx.some((x) => RegExp(Array(5).fill(min).join('')).test(x))) return min
  return null
}

const isBoardFull = (node) => !node.some((x) => x.some((m) => m === blank))

const isTerminalNode = (node) => isBoardFull(node)

const minimax = (node, depth, alpha = -Infinity, beta = Infinity, isMax = true) => {
  if (isTerminalNode(node) || depth === 0) return [evaluate(node), null]
  const allNextPosition = childs(node)
  if (isMax) {
    let val = -Infinity
    let nextPosition = allNextPosition && allNextPosition[0] // 即使所有评分都等于 -Infinity (必输局), 也要随便走一步
    for (const childPosition of allNextPosition) {
      const childVal = minimax(childNode(node, childPosition, max), depth - 1, alpha, beta, !isMax)[0]
      if (childVal > val) {
        val = childVal
        nextPosition = childPosition
      }
      alpha = Math.max(alpha, val)
      if (beta <= alpha) break
    }
    return [val, nextPosition]
  } else {
    let val = Infinity
    let nextPosition = allNextPosition && allNextPosition[0]
    for (const childPosition of allNextPosition) {
      const childVal = minimax(childNode(node, childPosition, min), depth - 1, alpha, beta, !isMax)[0]
      if (childVal < val) {
        val = childVal
        nextPosition = childPosition
      }
      beta = Math.min(beta, val)
      if (beta <= alpha) break
    }
    return [val, nextPosition]
  }
}

export { isBoardFull, theWinner, minimax }
