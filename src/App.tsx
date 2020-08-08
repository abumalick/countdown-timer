/** @jsx jsx */
import {jsx} from 'theme-ui'
import React, {useState, useCallback} from 'react'
import './App.css'
import CountdownForm from './components/CountdownForm'
import CountdownMessage from './components/CountdownMessage'
import CountdownTimer from './components/CountdownTimer'
import CountdownControl from './components/CountdownControl'
import CountdownSpeedControl from './components/CountdownSpeedControl'
import {STATE, Speed, DEFAULT_SECONDS} from './constants'
import useInterval from './hooks/useInterval'
import Layout from './components/Layout'

const CountdownApp: React.FC = () => {
  const [state, setState] = useState<STATE>(STATE.NOT_STARTED)
  const [startSeconds, setStartSeconds] = useState<number>(DEFAULT_SECONDS)
  const [secondsLeft, setSecondsLeft] = useState<number>(DEFAULT_SECONDS)
  const [speed, setSpeed] = useState<Speed>(1)

  const handleSubmitForm = useCallback((minutes: number) => {
    const seconds = minutes ? 60 * minutes : DEFAULT_SECONDS
    setStartSeconds(seconds)
    setSecondsLeft(seconds)

    setState((prevState) => {
      switch (prevState) {
        case STATE.NOT_STARTED:
        case STATE.COMPLETED:
          return STATE.STARTED

        case STATE.STARTED:
        case STATE.PAUSED:
        default:
          return STATE.NOT_STARTED
      }
    })
  }, [])
  const handleToggleRunning = useCallback(() => {
    setState((prevState) => {
      switch (prevState) {
        case STATE.STARTED:
          return STATE.PAUSED
        case STATE.COMPLETED:
          // reset counter
          setSecondsLeft(startSeconds)
        // eslint-disable-next-line no-fallthrough
        case STATE.NOT_STARTED:
        case STATE.PAUSED:
        default:
          return STATE.STARTED
      }
    })
  }, [startSeconds])
  const intervalCallback = useCallback(() => {
    setSecondsLeft((prevSecondsLeft) => {
      if (prevSecondsLeft === 1) {
        setState(STATE.COMPLETED)
      }
      return prevSecondsLeft - 1
    })
  }, [])

  const delay = state === STATE.STARTED ? 1000 / speed : null
  useInterval(intervalCallback, delay)

  let message = ''
  if (secondsLeft === 0) {
    message = "Time's up!"
  } else if (startSeconds / secondsLeft > 2) {
    message = 'More than halfway there!'
  }
  return (
    <Layout
      sx={{
        pt: 50,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <CountdownForm
        onSubmit={handleSubmitForm}
        running={state !== STATE.NOT_STARTED && state !== STATE.COMPLETED}
      />
      <CountdownMessage message={message} />
      <div
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          sx={{
            width: [55, 70],
          }}
        />
        <CountdownTimer secondsLeft={secondsLeft} />
        <CountdownControl
          running={state === STATE.STARTED}
          onClick={handleToggleRunning}
          sx={{
            width: [55, 70],
          }}
        />
      </div>
      <CountdownSpeedControl onChange={setSpeed} currentSpeed={speed} />
    </Layout>
  )
}

export default CountdownApp
