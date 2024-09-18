/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'


function Button({
    children,
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = '',
    className = '' ,
    ...prop
}) {
  return (
   <button className={` w-full  text-nowrap font-bold rounded-lg ${className} ${bgColor} ${textColor}`} {...prop}> {children}</button>
  )
}

export default Button  

