import React from 'react'
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles'
import {StylesProvider} from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#07a69b',
    },
    secondary: {
      main: '#616161',
    },
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 0,
      },
      containedSecondary: {
        border: '2px solid black',
      },
      outlinedSecondary: {
        border: '2px solid black',
        padding: '6px 16px',
        '&:hover': {
          border: '2px solid black',
        },
      },
    },
    MuiOutlinedInput: {
      root: {
        borderWidth: 2,
        borderRadius: 0,
      },
      notchedOutline: {
        borderColor: 'black',
      },
    },
    MuiFab: {
      secondary: {
        'background-color': 'white',
        color: 'black',
        'border-color': 'black',
      },
    },
  },
})

const MaterialUIThemeProvider: React.FC = ({children}) => {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StylesProvider>
  )
}

export default MaterialUIThemeProvider
