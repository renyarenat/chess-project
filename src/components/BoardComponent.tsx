import React, { useEffect, useState } from 'react'
import { type Board } from '../models/Board'
import { type Cell } from '../models/Cell'
import { type Player } from '../models/Player'
import CellComponent from './CellComponent'

interface BoardProps {
  board: Board
  setBoard: (board: Board) => void
  currentPlayer: Player | null
  swapPlayer: () => void
}

function BoardComponent ({ board, setBoard, currentPlayer, swapPlayer }: BoardProps): JSX.Element {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

  function click (cell: Cell): void {
    if ((selectedCell != null) && selectedCell !== cell && ((selectedCell.figure?.canMove(cell)) ?? false)) {
      selectedCell.moveFigure(cell)
      swapPlayer()
      setSelectedCell(null)
      updateBoard()
    } else {
      if (cell.figure?.color === currentPlayer?.color) {
        setSelectedCell(cell)
      }
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
    <div>
    {currentPlayer?.color === 'white' ? (<h3>Ход белых</h3>) : (<h3>Ход черных</h3>)}
    <div className='board'>
      {board.cells.map((row, index) =>
      <React.Fragment key={index}>
        {row.map(cell =>
          <CellComponent
            click={click}
            cell={cell}
            key={cell.id}
            selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}/>
        )}
      </React.Fragment>
      )}
    </div>
    </div>
  )
}

export default BoardComponent
