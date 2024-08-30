/* eslint-disable react/prop-types */
//import React from 'react';

function Container({children}) {
  return (
    <div className='w-full max-w-7xl h-auto mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20'>
      {children}
    </div>
  )
}

export default Container;
