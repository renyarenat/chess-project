import React from 'react'
import { type Cell } from '../models/Cell'

interface CellProps {
  cell: Cell
  selected: boolean
  click: (cell: Cell) => void
}

export default function CellComponent ({ cell, selected, click }: CellProps): JSX.Element {
  return (
    <div
     className={['cell', cell.color, selected ? 'selected' : ''].join(' ')}
     onClick={() => { click(cell) }}
     style={{ background: cell.available && (cell.figure != null) ? 'green' : '' }}>
      {cell.available && (cell.figure == null) && <div className={'available'} />}
      {((cell.figure?.logo) != null) && <img src={cell.figure.logo} alt="" />}
    </div>
  )
}
