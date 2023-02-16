import React from 'react'
import { type Cell } from '../models/Cell'

interface CellProps {
  cell: Cell
}

export default function CellComponent ({ cell }: CellProps): JSX.Element {
  return (
    <div className={['cell', cell.color].join(' ')}>
      {cell.figure?.logo && <img src={cell.figure.logo} alt="" />}
    </div>
  )
}
