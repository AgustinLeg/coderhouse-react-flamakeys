import { Link } from 'react-router-dom'

export const NotFoundPage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full md:w-80">
        <img src="/images/robot_notfound.svg" alt="robot not found" />
      </div>
      <Link
        to="/"
        className="p-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800"
      >
        Volver al inicio
      </Link>
    </div>
  )
}
