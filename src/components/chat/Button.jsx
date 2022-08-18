import { RiChatSmileLine } from 'react-icons/ri'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from 'flowbite-react'

export const ButtonChat = () => {
  const { user } = useSelector((state) => state.auth)

  return (
    <div className="fixed bottom-5 right-5">
      <Link to={user ? '/chat' : '/iniciar-sesion'}>
        <Button>
          <RiChatSmileLine size={25} />
        </Button>
      </Link>
    </div>
  )
}
