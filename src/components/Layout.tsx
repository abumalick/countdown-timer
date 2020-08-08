/** @jsx jsx */
import {jsx} from 'theme-ui'
import MaterialUIThemeProvider from '../providers/MaterialUIThemeProvider'
import CssBaseline from '@material-ui/core/CssBaseline'

type Props = {
  className?: string
}

const Layout: React.FC<Props> = ({className, children}) => {
  return (
    <MaterialUIThemeProvider>
      <CssBaseline />
      <div className={className}>{children}</div>
    </MaterialUIThemeProvider>
  )
}

export default Layout
