import React from 'react'

const Button = ({onClick,color = 'gray-900',text}) => {
    return (
        <button
        className={`px-8 py-2 bg-${color} text-white text-sm font-medium rounded hover:bg-${color}-500 focus:outline-none focus:bg-gray-500`}
        onClick={onClick}
      >
        {text}
      </button>
    )
}

export default Button
