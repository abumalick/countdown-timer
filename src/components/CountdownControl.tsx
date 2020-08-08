/** @jsx jsx */
import Button from '@material-ui/core/Button'
import PauseIcon from '@material-ui/icons/Pause'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import {jsx} from 'theme-ui'
import {memo} from 'react'

type Props = {
  className?: string
  running: boolean
  onClick: () => void
}

const CountdownControl: React.FC<Props> = ({className, running, onClick}) => {
  return (
    <div
      className={className}
      sx={{
        textAlign: 'right',
      }}
    >
      <Button
        type="button"
        color="secondary"
        onClick={onClick}
        variant="outlined"
        sx={{
          borderRadius: '50%',
          width: [40, 50],
          minWidth: [40, 50],
          height: [40, 50],
          padding: 0,
          borderWidth: '3px',
          color: 'black',
          '&:hover': {
            borderWidth: '3px',
          },
        }}
      >
        {running ? <PauseIcon /> : <PlayArrowIcon />}
      </Button>
    </div>
  )
}

export default memo(CountdownControl)
