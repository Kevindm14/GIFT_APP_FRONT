import { useParams } from 'react-router-dom'

const DetailUser = () => {
  const { id } = useParams()
  return (
    <>
      User {id}
    </>
  )
}

export default DetailUser
