/** @jsx jsx */
import {jsx} from 'theme-ui'
import zeroPadStart from '../lib/zeroPadStart'
import {keyframes} from '@emotion/core'
import {RED_TIME, BLINKING_TIME} from '../constants'
type Props = {
  secondsLeft: number
}

const blink = keyframes`
  50% {
    opacity: 0;
  }
`

const CountdownTimer: React.FC<Props> = ({secondsLeft}) => {
  const minutes = zeroPadStart(Math.floor(secondsLeft / 60), 2)
  const seconds = zeroPadStart(secondsLeft % 60, 2)
  const color = secondsLeft > RED_TIME ? 'black' : 'red'
  const shouldBlink = secondsLeft <= BLINKING_TIME
  return (
    <div
      sx={{
        animation: shouldBlink ? `${blink} 1s step-start infinite` : 'none',
        fontSize: ['5rem', '8rem'],
        fontWeight: 700,
      }}
      style={{
        color,
      }}
    >
      {minutes}:{seconds}
    </div>
  )
}

export default CountdownTimer
