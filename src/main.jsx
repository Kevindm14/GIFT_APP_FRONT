import { CssBaseline, ThemeProvider } from '@mui/material'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import RoutesApp from './Routes'
import theme from './theme'

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RoutesApp />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
