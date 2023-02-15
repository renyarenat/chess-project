import React, { useEffect, useState } from 'react'
import './App.css'
import BoardComponent from './components/BoardComponent'

function App (): JSX.Element {
  const [board, setBoard] = useState(new Board())

  useEffect(() => {
    restart()
  }, [])

  function restart () {
    const newBoard = newBoard()
    newBoard.initCells()
    setBoard(newBoard)
  }
  return (
    <div className='app'>
      <BoardComponent board={board} setBoard={setBoard}/>
    </div>
  )
}

export default App
