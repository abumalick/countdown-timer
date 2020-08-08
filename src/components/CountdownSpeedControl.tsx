/** @jsx jsx */
import {jsx} from 'theme-ui'
import {SPEEDS, Speed} from '../constants'
import {MouseEvent, memo} from 'react'
import Button from '@material-ui/core/Button'

type Props = {
  currentSpeed: Speed
  onChange: (newSpeed: Speed) => void
}

const CountdownSpeedControl: React.FC<Props> = ({onChange, currentSpeed}) => {
  const handleClick = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) => {
    const id = e.currentTarget.id
    const speedString = id.split('-')[1]
    const speed = parseFloat(speedString) as Speed
    onChange(speed)
  }
  return (
    <div>
      {SPEEDS.map((speed, index) => {
        const isCurrentSpeed = speed === currentSpeed
        return (
          <Button
            key={speed}
            id={`speedControl-${speed}`}
            onClick={handleClick}
            style={{
              backgroundColor: isCurrentSpeed ? 'gray' : 'white',
              color: isCurrentSpeed ? 'white' : 'black',
              marginLeft: index > 0 ? '0.7rem' : 0,
            }}
            variant={isCurrentSpeed ? 'contained' : 'outlined'}
            color="secondary"
          >
            {speed}X
          </Button>
        )
      })}
    </div>
  )
}

export default memo(CountdownSpeedControl)
