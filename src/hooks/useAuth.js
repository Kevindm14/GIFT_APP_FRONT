import { getToken } from '../helpers/authHelper'

export function useAuth () {
  const token = !!getToken()

  return token
}
