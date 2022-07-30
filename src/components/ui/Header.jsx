import { NavLink } from 'react-router-dom'

import { NAV_ITEMS } from '../../assets/navItems'
import { CartDrawer } from '../cart'

export const Header = () => {
  return (
    <>
      <header className="flex justify-between p-2">
        <h1>Flama Keys</h1>
        <nav className="flex gap-5">
          {NAV_ITEMS.map((item) => (
            <NavLink key={`nav-item-${item.ref}`} to={item.ref}>
              {item.name}
            </NavLink>
          ))}
        </nav>
        <div className="flex gap-5">
          <CartDrawer />
        </div>
      </header>
    </>
  )
}
