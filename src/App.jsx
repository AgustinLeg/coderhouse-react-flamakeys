import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import Cookies from 'js-cookie'

import { ProtectedRoute } from '@/components/protectedRoute'
import { FooterComponent, Header } from '@/components/ui'

import { ButtonChat } from './components/chat/Button'
import { removeCredentials, setCredentials } from './features/user/authSlice'
import { ChatPage } from './pages/chat'
import {
  AboutPage,
  CheckoutPage,
  HomePage,
  LoginPage,
  NotFoundPage,
  ProductPage,
  ProfilePage,
  RegisterPage,
} from './pages'
import { shopAPI } from './services'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = Cookies.get('token')
        const { data } = await shopAPI.get('/auth/user', {
          headers: { Authorization: `Bearer ${token}` },
        })
        dispatch(setCredentials({ token, user: data }))
      } catch (error) {
        Cookies.remove('token')
        dispatch(removeCredentials())
      }
    }
    checkAuth()
  }, [])

  return (
    <div className=" bg-secondary min-h-screen max-w-screen overflow-x-hidden">
      <div className="container max-w-5xl p-2 m-auto pb-24">
        <Header />
        <main className="pb-14 min-h-screen">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/producto/:term" element={<ProductPage />} />
            <Route path="/acerca-nosotros" element={<AboutPage />} />
            <Route path="/finalizar-compra" element={<CheckoutPage />} />
            <Route
              element={<ProtectedRoute redirectedPath="/iniciar-sesion" />}
            >
              <Route path="/perfil" element={<ProfilePage />} />
              <Route path="/iniciar-sesion" element={<LoginPage />} />
              <Route path="/crear-cuenta" element={<RegisterPage />} />
              <Route path="/chat" element={<ChatPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
      <FooterComponent />
      <ButtonChat />
    </div>
  )
}

export default App
