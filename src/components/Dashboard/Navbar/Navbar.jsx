import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography
} from '@mui/material'
// import { makeStyles } from '@mui/styles'
import { useState } from 'react'
import { deepOrange } from '@mui/material/colors'
import { Link, useNavigate } from 'react-router-dom'
import { deleteToken } from '../../../helpers/authHelper'

// const useStyles = makeStyles({
// })

const NavBar = () => {
  // const classes = useStyles()
  const [anchorElUser, setAnchorElUser] = useState(null)
  const navigate = useNavigate()

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const logout = () => {
    deleteToken()
    navigate('/login')
  }

  return (
    <AppBar position='sticky' sx={navbar}>
      <Toolbar>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1, mr: 2 }}>
          Gift App
        </Typography>

        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title='Open settings'>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt='User' sx={{ bgcolor: deepOrange[500] }} src='/static/images/avatar/2.jpg' />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id='menu-appbar'
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >

            <MenuItem onClick={handleCloseUserMenu}>
              <Link to='/' style={{ textDecoration: 'none', color: '#1A1F27' }}>
                <Typography textAlign='center'>
                  Perfil
                </Typography>
              </Link>
            </MenuItem>

            <MenuItem onClick={handleCloseUserMenu}>
              <Link to='/dashboard' style={{ textDecoration: 'none', color: '#1A1F27' }}>
                <Typography textAlign='center'>
                  Dashboard
                </Typography>
              </Link>
            </MenuItem>

            <MenuItem onClick={logout}>
              <Typography textAlign='center'>
                Salir
              </Typography>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

const navbar = {
  background: '#1D2332'
}

export default NavBar
