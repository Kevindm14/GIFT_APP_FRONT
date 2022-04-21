import { Navigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

export const PrivateRoute = ({ component }) => {
  const auth = useAuth()

  return (
    <>
      {
        auth ? component : <Navigate to='/login' />
      }
    </>
  )
}
