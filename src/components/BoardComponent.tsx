import React from 'react'
import { type Board } from '../models/Board'
import CellComponent from './CellComponent'

interface BoardProps {
  board: Board
  setBoard: (board: Board) => void
}

function BoardComponent ({ board, setBoard }: BoardProps): JSX.Element {
  return (
    <div className='board'>
      {board.cells.map((row, index) =>
      <React.Fragment key={index}>
        {row.map(cell =>
          <CellComponent cell={cell} key={cell.id}/>
        )}
      </React.Fragment>
      )}
    </div>
  )
}

export default BoardComponent
