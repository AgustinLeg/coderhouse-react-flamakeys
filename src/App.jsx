import { Route, Routes } from 'react-router-dom'

import { ProtectedRoute } from '@/components/protectedRoute'
import { FooterComponent, Header } from '@/components/ui'

import {
  AboutPage,
  CheckoutPage,
  HomePage,
  LoginPage,
  NotFoundPage,
  ProductPage,
  ProfilePage,
  RegisterPage,
  ShopPage,
} from './pages'

function App() {
  return (
    <div className=" bg-secondary min-h-screen max-w-screen overflow-x-hidden">
      <div className="container max-w-5xl p-2 m-auto pb-24">
        <Header />
        <main className="pb-14">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/productos" element={<ShopPage />} />
            <Route path="/productos/:term" element={<ProductPage />} />
            <Route path="/acerca-nosotros" element={<AboutPage />} />
            <Route path="/finalizar-compra" element={<CheckoutPage />} />
            <Route
              element={<ProtectedRoute redirectedPath="/iniciar-sesion" />}
            >
              <Route path="/perfil" element={<ProfilePage />} />
              <Route path="/iniciar-sesion" element={<LoginPage />} />
              <Route path="/crear-cuenta" element={<RegisterPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
      <FooterComponent />
    </div>
  )
}

export default App
