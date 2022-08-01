import { RiCloseLine } from 'react-icons/ri'

export const Drawer = ({ isOpen, toggleMenu, children }) => {
  return (
    <>
      <div
        className={`absolute top-0 left-0 h-screen w-screen transition-opacity ${
          isOpen ? 'bg-black opacity-40 z-40' : 'opacity-0 -z-10'
        }`}
        onClick={toggleMenu}
      />
      <div
        className={`navbar w-full md:w-72 fixed overflow-x-scroll bg-white z-50 top-0 right-0 h-screen ${
          isOpen ? 'navbar-open' : 'navbar-close'
        }`}
      >
        <button
          className="p-0 absolute top-3 right-2 text-xl font-bold"
          onClick={toggleMenu}
        >
          <RiCloseLine size={22} />
        </button>
        {children}
      </div>
    </>
  )
}
