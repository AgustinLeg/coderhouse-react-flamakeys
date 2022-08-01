import { useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

export const ProtectedRoute = ({ redirectedPath = '/' }) => {
  const { user } = useSelector((state) => state.user)
  const { pathname } = useLocation()

  const authRoutes = ['/iniciar-sesion', '/crear-cuenta']

  if (user && authRoutes.includes(pathname)) {
    return <Navigate to="/" replace />
  }

  if (!user && !authRoutes.includes(pathname)) {
    return <Navigate to={redirectedPath} replace />
  }

  return <Outlet />
}
