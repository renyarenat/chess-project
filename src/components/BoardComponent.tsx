import React, { useEffect, useState } from 'react'
import { type Board } from '../models/Board'
import { type Cell } from '../models/Cell'
import CellComponent from './CellComponent'

interface BoardProps {
  board: Board
  setBoard: (board: Board) => void
}

function BoardComponent ({ board, setBoard }: BoardProps): JSX.Element {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

  function click (cell: Cell): void {
    if (cell.figure != null) {
      setSelectedCell(cell)
    }
  }

  useEffect(() => {
    highlightCells()
  }, [selectedCell])

  function highlightCells (): void {
    board.highlightCells(selectedCell)
    updateBoard()
  }

  function updateBoard (): void {
    const newBoard = board.getCopyBoard()
    setBoard(newBoard)
  }

  return (
    <div className='board'>
      {board.cells.map((row, index) =>
      <React.Fragment key={index}>
        {row.map(cell =>
          <CellComponent click={click} cell={cell} key={cell.id} selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}/>
        )}
      </React.Fragment>
      )}
    </div>
  )
}

export default BoardComponent
