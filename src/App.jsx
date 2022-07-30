import { Route, Routes } from 'react-router-dom'

import { PrivateRoute } from './components/privateRoute'
import { Header } from './components/ui'
import {
  CheckoutPage,
  HomePage,
  ProductPage,
  ProfilePage,
  ShopPage,
} from './pages'

function App() {
  return (
    <div className=" bg-secondary min-h-screen max-w-screen overflow-x-hidden">
      <div className="container max-w-5xl font-display p-2 m-auto">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/productos" element={<ShopPage />} />
          <Route path="/productos/:term" element={<ProductPage />} />
          <Route path="/finalizar-compra" element={<CheckoutPage />} />
          <Route element={<PrivateRoute />}>
            <Route path="/perfil" element={<ProfilePage />} />
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
