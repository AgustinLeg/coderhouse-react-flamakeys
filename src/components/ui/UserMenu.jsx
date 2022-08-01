// import { useSelector } from 'react-redux'

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Avatar, Button, Dropdown } from 'flowbite-react'

export const UserMenu = () => {
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.user)

  if (!user)
    return (
      <Button onClick={() => navigate('/iniciar-sesion')}>
        Iniciar Sesion
      </Button>
    )

  return (
    <Dropdown inline label={<Avatar alt="User settings" rounded />}>
      <Dropdown.Header>
        <span className="block text-sm">Bonnie Green</span>
        <span className="block truncate text-sm font-medium">
          name@flowbite.com
        </span>
      </Dropdown.Header>
      <Dropdown.Item>Dashboard</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>Sign out</Dropdown.Item>
    </Dropdown>
  )
}
