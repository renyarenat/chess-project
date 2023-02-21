import React, { useEffect, useRef, useState } from 'react'
import { Colors } from '../models/Colors'
import { type Player } from '../models/Player'

interface TimerProps {
  currentPlayer: Player | null
  restart: () => void
}

const Timer = ({ currentPlayer, restart }: TimerProps): JSX.Element => {
  const [blackTime, setBlackTime] = useState(300)
  const [whiteTime, setWhiteTime] = useState(300)
  const timer = useRef<null | ReturnType<typeof setInterval>>(null)

  useEffect(() => {
    startTimer()
  }, [currentPlayer])

  function startTimer (): void {
    if (timer.current != null) {
      clearInterval(timer.current)
    }
    const callback = currentPlayer?.color === Colors.WHITE ? decrementWhiteTimer : decrementBlackTimer
    timer.current = setInterval(callback, 1000)
  }

  function decrementBlackTimer (): void {
    setBlackTime(prev => prev - 1)
  }

  function decrementWhiteTimer (): void {
    setWhiteTime(prev => prev - 1)
  }

  const handleRestart = (): void => {
    setWhiteTime(300)
    setBlackTime(300)
    restart()
  }

  return (
        <div>
            <div>
                <button onClick={handleRestart}>Restart Game</button>
            </div>
            <h2>Черные - {blackTime}</h2>
            <h2>Белые - {whiteTime}</h2>
        </div>
  )
}

export default Timer
