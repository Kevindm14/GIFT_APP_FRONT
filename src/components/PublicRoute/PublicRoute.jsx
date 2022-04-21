import { Navigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

export const PublicRoute = ({ component }) => {
  const auth = useAuth()

  return (
    <>
      {
        auth ? <Navigate to='/dashboard' /> : component
      }
    </>
  )
}
