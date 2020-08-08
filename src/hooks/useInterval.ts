// source: https://overreacted.io/making-setinterval-declarative-with-react-hooks/
import {useEffect, useRef} from 'react'

interface Callback {
  (): void
}

function useInterval(callback: Callback, delay: number | null) {
  const savedCallback = useRef<Callback>(() => {})

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

export default useInterval
