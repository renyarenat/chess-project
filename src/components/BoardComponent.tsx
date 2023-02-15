import React from 'react'

export default function BoardComponent (): JSX.Element {
  return (
    <div className='board'>
        <div className="cell white"></div>
        <div className="cell black"></div>
        <div className="cell white"></div>
        <div className="cell black"></div>
    </div>
  )
}
