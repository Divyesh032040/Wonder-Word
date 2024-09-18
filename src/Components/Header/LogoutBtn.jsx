/* eslint-disable no-unused-vars */
import React from 'react'
import {useDispatch} from 'react-redux'
import  authService from '../../AppWrite/Auth'
import {logout} from '../../Store/authSlice'
import { Navigate } from 'react-router-dom'


function LogoutBtn() {

const dispatch = useDispatch()

const logoutHandler = () => {
  authService.logOut().then(() => {
      dispatch(logout())
  })
}


  return (

    <button
      className='text-gray-900 bg-teal-300 font-bold hover:bg-teal-400 px-3 py-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105 text-xs'
    onClick={logoutHandler}
  >
    Logout
  </button>
  )
}

export default LogoutBtn