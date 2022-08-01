import { NavLink } from 'react-router-dom'
import { Navbar } from 'flowbite-react'

import { NAV_ITEMS } from '../../assets/navItems'
import { CartDrawer } from '../cart'

import { UserMenu } from './UserMenu'

export const Header = () => {
  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand href="https://flowbite.com/">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite
        </span>
      </Navbar.Brand>
      <div className="flex gap-5 md:order-2 items-center">
        <CartDrawer />
        <UserMenu />
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        {NAV_ITEMS.map(({ ref, name }) => (
          <NavLink key={`footer-link-${ref}`} to={ref}>
            {name}
          </NavLink>
        ))}
      </Navbar.Collapse>
    </Navbar>
  )
}
