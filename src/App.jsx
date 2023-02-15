import { useState } from 'react'
import { boardLength } from './bot/const'
import { debounce, range0 } from './bot/support'
import { Gobang } from './bot/gobang'
import './App.less'
import './bot/otherFivechess'
import { Chessboard } from './bot/otherFivechess'
import { useReducer } from 'react'
import Num from './comps/num'
import ABC from './comps/abc'
import { useEffect } from 'react'
import Worker from './bot/worker.js?worker'

var chessboard = new Chessboard(boardLength, boardLength)

let gobang = new Gobang({})
gobang.init({})

const Square = ({ position, value, onClick, isLastChess, isMarkPoint, isWinnerPoint }) => {
  const stackIndex = gobang.stack.findIndex((x) => x[0] === position[0] && x[1] === position[1])
  return (
    <button className={`square ${isLastChess && 'lastChess'}`} onClick={onClick}>
      {value !== Gobang.EMPTY && (
        <div
          className={['chess', value === gobang.firstHand ? 'black' : 'white', isWinnerPoint ? 'pulse' : ''].join(' ')}
        >
          {stackIndex + 1 || null}
        </div>
      )}
      {isMarkPoint && <div className="markPoint"></div>}
    </button>
  )
}

const Board = ({ squares, onClick, winner }) => {
  const lastChess = gobang.lastChessPosition
  const winnerPositions = winner ? gobang.winnerPositions : null

  return (
    <div className="boardCenter">
      <div className="rowLines">
        {range0(boardLength).map((x) => (
          <div key={x} className="item" />
        ))}
      </div>
      <div className="colLines">
        {range0(boardLength).map((x) => (
          <div key={x} className="item" />
        ))}
      </div>
      <div className="chesses">
        {range0(boardLength).map((i) => (
          <div key={i} className="boardRow">
            {range0(boardLength).map((j) => (
              <Square
                key={j}
                position={[i, j]}
                value={squares[i][j]}
                isLastChess={lastChess && lastChess[0] === i && lastChess[1] === j}
                isWinnerPoint={winnerPositions && winnerPositions.some(([pi, pj]) => pi === i && pj === j)}
                isMarkPoint={
                  (i === 3 && j === 3) ||
                  (i === 3 && j === 11) ||
                  (i === 7 && j === 7) ||
                  (i === 11 && j === 3) ||
                  (i === 11 && j === 11)
                }
                onClick={() => onClick(i, j)}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="gameoverTip">
        {gobang.isDraw && <div className="tip">和棋~</div>}
        {winner && <div className="tip">{winner === gobang.firstHand ? '黑方胜' : '白方胜'}</div>}
      </div>
    </div>
  )
}

var worker = new Worker()

const Game = () => {
  const [start, startX] = useState(false)
  const [_, forceUpdate] = useReducer((x) => x + 1, 0)
  const { winner, isFinal } = gobang
  const [time, timeX] = useState(0)

  const onClickBoard = (i, j) => {
    if (!start) return console.log({ start })
    if (isFinal) return console.log({ isFinal })

    if (window.t) {
      console.time('b1')
      var res = Chessboard.prototype.min(chessboard, 2)
      console.timeEnd('b1')
      chessboard.put(res.row, res.column, Chessboard.MIN)
      worker.postMessage({ type: 'minGo', data: [res.row, res.column] })
    } else {
      worker.postMessage({ type: 'minGo', data: [i, j] })
    }
  }

  const maxGo = () => {
    worker.postMessage({ type: 'maxGo' })
  }

  const onReStart = () => {
    startX(false)
  }

  const onStart = (firstHand) => {
    startX(true)
    chessboard = new Chessboard(boardLength, boardLength)
    worker.postMessage({ type: 'init', data: { firstHand } })
  }

  useEffect(() => {
    const id = setInterval(() => {
      timeX((x) => x + 0.2)
    }, 200)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    worker.onmessage = (e) => {
      const [type, gob, res] = e.data
      gobang = JSON.parse(gob)
      switch (type) {
        case 'minGo':
          // maxGo()
          setTimeout(maxGo, 0)
          break
        case 'maxGo':
          const { i, j } = res
          chessboard.put(i, j, Chessboard.MAX)
          break
        default:
          break
      }
      forceUpdate()
      console.log('Message received from worker', type, JSON.parse(gob), res)
    }
  }, [])

  return (
    <div className="game">
      <div className="gameInfo">
        <div className="">{time.toFixed(1)}</div>
        <div className=""></div>
      </div>
      <div className="gameBoard">
        <Num />
        <div className="center">
          <ABC />
          <Board squares={gobang.node} onClick={debounce(onClickBoard, 50)} winner={winner} />
          <ABC />
        </div>
        <Num />
      </div>
      <div className="opbtns">
        {start && <button onClick={onReStart}>重来</button>}
        {!start && <button onClick={() => onStart(Gobang.MAX)}>开始 - 电脑先</button>}
        {!start && <button onClick={() => onStart(Gobang.MIN)}>开始 - 玩家先</button>}
        {start && (
          <button
            onClick={() => {
              gobang.minRepent()
              forceUpdate()
            }}
          >
            {'悔棋'}
          </button>
        )}
      </div>
      <div className="game-info">
        <div>{isFinal && 'game over'}</div>
        {winner && <div>{winner === Gobang.MAX ? '少侠请努力' : '干得漂亮'}</div>}
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  )
}

const App = Game

export default App
