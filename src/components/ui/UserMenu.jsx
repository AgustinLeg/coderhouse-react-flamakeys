// import { useSelector } from 'react-redux'

import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { Avatar, Button, Dropdown } from 'flowbite-react'
import Cookies from 'js-cookie'

import { removeCredentials } from '../../features/user/authSlice'

export const UserMenu = () => {
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const handleLogout = () => {
    Cookies.remove('token')
    dispatch(removeCredentials())
  }

  if (!user)
    return (
      <Button onClick={() => navigate('/iniciar-sesion')}>
        Iniciar Sesion
      </Button>
    )

  return (
    <Dropdown inline label={<Avatar alt="User settings" size="sm" rounded />}>
      <Dropdown.Header>
        <span className="block text-sm">{`${user.name} ${user.lastName}`}</span>
        <span className="block truncate text-sm font-medium">{user.email}</span>
      </Dropdown.Header>
      <NavLink to="/perfil">
        <Dropdown.Item>Perfil</Dropdown.Item>
      </NavLink>
      <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
    </Dropdown>
  )
}
