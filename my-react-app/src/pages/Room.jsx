import { useParams } from 'react-router-dom'

export default function Room() {
    const params = useParams();
    const id = params.roomID

  return (
    <div>Room {id}</div>
  )
}
