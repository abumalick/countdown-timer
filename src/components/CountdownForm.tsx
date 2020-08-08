/** @jsx jsx */
import {FormEvent, memo} from 'react'
import {jsx} from 'theme-ui'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

type Props = {
  onSubmit: (minutes: number) => void
  running: boolean
}

const CountdownForm: React.FC<Props> = ({onSubmit, running}) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const value = (event.currentTarget.elements[0] as HTMLInputElement).value
    const parsedValue = parseInt(value, 10)

    onSubmit(parsedValue)
  }
  const buttonText = running ? 'STOP' : 'START'
  return (
    <form
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <label
        htmlFor="countdown-input"
        sx={{
          fontWeight: 500,
          fontSize: '1.2rem',
          mr: '0.5rem',
        }}
      >
        Countdown:
      </label>
      <TextField
        variant="outlined"
        type="number"
        name="countdown-input"
        id="countdown-input"
        placeholder="(Min)"
        size="small"
        sx={{
          width: '7rem',
        }}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{
          width: '6rem',
          ml: '0.5rem',
          display: 'block',
          height: 40,
        }}
      >
        {buttonText}
      </Button>
    </form>
  )
}

export default memo(CountdownForm)
