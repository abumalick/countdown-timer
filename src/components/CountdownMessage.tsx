/** @jsx jsx */
import {jsx} from 'theme-ui'
import {memo} from 'react'

type Props = {
  message: string
}

const CountdownMessage: React.FC<Props> = ({message}) => {
  return (
    <div
      sx={{
        pt: ['1.3rem', '2rem'],
        height: '2.5rem',
        fontStyle: 'italic',
        fontWeight: 700,
        fontSize: '1.2rem',
      }}
    >
      {message}
    </div>
  )
}

export default memo(CountdownMessage)
