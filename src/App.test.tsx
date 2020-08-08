import React from 'react'
import {render} from '@testing-library/react'
import App from './App'

test('renders countdown label', () => {
  const {getByText} = render(<App />)
  const labelElement = getByText(/countdown/i)
  expect(labelElement).toBeInTheDocument()
})
