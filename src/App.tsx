import React, { useEffect, useState } from 'react'
import './App.css'
import BoardComponent from './components/BoardComponent'
import LostFigures from './components/LostFigures'
import Timer from './components/Timer'
import { Board } from './models/Board'
import { Colors } from './models/Colors'
import { Player } from './models/Player'

function App (): JSX.Element {
  const [board, setBoard] = useState(new Board())
  const [whitePlayer] = useState(new Player(Colors.WHITE))
  const [blackPlayer] = useState(new Player(Colors.BLACK))
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null)

  useEffect(() => {
    restart()
    setCurrentPlayer(whitePlayer)
  }, [])

  function restart (): void {
    const newBoard = new Board()
    newBoard.initCells()
    newBoard.addFigures()
    setBoard(newBoard)
  }

  function swapPlayer (): void {
    setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer)
  }

  return (
    <div className='app'>
      <Timer
      restart={restart}
      currentPlayer={currentPlayer }
      />
      <BoardComponent
      board={board}
      setBoard={setBoard}
      currentPlayer={currentPlayer}
      swapPlayer={swapPlayer}
      />
      <div>
      <LostFigures title="Черные фигуры" figures={board.lostBlackFigures} />
      <LostFigures title="Белые фигуры" figures={board.lostWhiteFigures} />
      </div>
    </div>
  )
}

export default App
