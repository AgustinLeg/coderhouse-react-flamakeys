import { NavLink } from 'react-router-dom'
import { Navbar } from 'flowbite-react'

import { NAV_ITEMS } from '@/assets/navItems'

import { CartDrawer } from '../cart'

import { UserMenu } from './UserMenu'

export const Header = () => {
  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand href="/">
        <img
          src="/images/flama-logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
      </Navbar.Brand>
      <div className="flex gap-5 md:order-2 items-center">
        <CartDrawer />
        <UserMenu />
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        {NAV_ITEMS.map(({ ref, name }) => (
          <NavLink key={`header-link-${ref}`} className="p-3 " to={ref}>
            {name}
          </NavLink>
        ))}
      </Navbar.Collapse>
    </Navbar>
  )
}
