/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React , {forwardRef, useId} from 'react'

const Input = forwardRef(function Input ({
    label ,
    type = 'test',
    className = " ",
    ...props
} , ref){

    const id = useId();
    
    return (
        <div className='w-full'>
            {label && <label className='inline-block mb-1 pl-1'
            htmlFor={id} > {label}
            </label>
            }
            <input type={type} 
            className= {`px-3 py-2 rounded-lg bg-black text-white outline-none focus:bg-grey-200 w-full  ${className}`}
            ref={ref}
            {...props}
            id={id}
            />
        </div>
    )
} )

export default Input