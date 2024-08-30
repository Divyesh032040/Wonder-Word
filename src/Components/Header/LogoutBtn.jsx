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
    className='text-white bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-lg transition duration-300 ease-in-out'
    onClick={logoutHandler}
  >
    Logout
  </button>
  )
}

export default LogoutBtn