import { makeStyles } from '@mui/styles'
import Navbar from './Navbar/Navbar'
import { Link } from 'react-router-dom'
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew'
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard'
import EventIcon from '@mui/icons-material/Event'

export const Dashboard = ({ component }) => {
  const classes = useStyles()

  return (
    <div style={{ fontFamily: 'Rubik' }}>
      <Navbar />
      <div className={classes.root}>
        <div className={classes.sidebar}>
          <Link className={classes.listItemLink} to='/users'>
            <AccessibilityNewIcon style={{ marginRight: '.4em' }} /> Usuarios
          </Link>
          <Link className={classes.listItemLink} to='/gifts'>
            <CardGiftcardIcon style={{ marginRight: '.4em' }} /> Regalos
          </Link>
          <Link className={classes.listItemLink} to='/events'>
            <EventIcon style={{ marginRight: '.4em' }} /> Eventos
          </Link>
        </div>
        <div className={classes.content}>
          {component}
        </div>
      </div>
    </div>
  )
}

const useStyles = makeStyles({
  root: {
    display: 'flex',
    color: '#EDF2F7',
    fontFamily: 'Gothic A1, sans-serif'
  },
  sidebar: {
    width: '20rem',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    background: '#1D2332',
    padding: '1.5rem 0'
  },
  content: {
    background: 'white',
    width: '100%',
    padding: '3rem'
  },
  listItemLink: {
    display: 'flex',
    alignItems: 'center',
    padding: '1rem 2em',
    marginBottom: '.2em',
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',

    '&:hover': {
      backgroundColor: '#2A2E3C',
      color: '#0EB67F',
      borderRight: '4px solid #0EB67F'
    }
  }
})
