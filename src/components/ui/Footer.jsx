import { Link } from 'react-router-dom'
import { Footer } from 'flowbite-react'

import { NAV_ITEMS } from '../../assets/navItems'

export const FooterComponent = () => {
  return (
    <Footer container={true}>
      <div className="container max-w-5xl m-auto">
        <div className="w-full text-center">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
            <Footer.Brand
              href="https://flowbite.com"
              src="https://flowbite.com/docs/images/logo.svg"
              alt="Flowbite Logo"
              name="Flowbite"
            />
            <Footer.LinkGroup>
              {NAV_ITEMS.map(({ ref, name }) => (
                <Link key={`footer-link-${ref}`} to={ref} className="mx-4">
                  {name}
                </Link>
              ))}
            </Footer.LinkGroup>
          </div>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="#" by="Flowbite™" year={2022} />
      </div>
    </Footer>
  )
}
