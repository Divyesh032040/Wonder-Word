/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

function Button({
    children,
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className = '' ,
    ...prop
}) {
  return (
   <button className={`px-4 py-2 rounded-lg ${className} ${bgColor} ${textColor}`} {...prop}> {children}</button>
  )
}

export default Button  