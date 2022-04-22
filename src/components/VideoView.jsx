import { getToken } from '../helpers/authHelper'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Videoview = () => {
  const [gift, setGift] = useState([])
  const { gift_id } = useParams()

  const showVideo = async () => {
    // eslint-disable-next-line no-undef
    const res = await fetch(`${BASE_URL}/gifts/show/${gift_id}/view`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })

    const data = await res.json()
    setGift(data.gift)
  }

  useEffect(() => {
    showVideo()
  }, [])

  return (
    <div>
      <video src={gift.video_url} />
    </div>
  )
}
