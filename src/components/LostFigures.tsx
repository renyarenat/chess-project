import React from 'react'
import { type Figure } from '../models/figures/Figure'

interface LostFiguresProps {
  title: string
  figures: Figure[]
}

const LostFigures = ({ title, figures }: LostFiguresProps): JSX.Element => {
  return (
        <div className='lost'>
            <h3>{title}</h3>
            {figures.map(figure =>
                <div key={figure.id}>
                    {figure.name} {(figure.logo != null) && <img width={20} height={20} src={figure.logo}/>}
                </div>
            )}
        </div>
  )
}

export default LostFigures
