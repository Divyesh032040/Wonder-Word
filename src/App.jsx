/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import { useState , useEffect} from 'react'
import './App.css'
import {useDispatch} from 'react-redux'
import authService from './AppWrite/Auth'
import {login , logout} from './Store/authSlice'
import {Footer,Header} from './Components/Index.js'
import { Outlet } from 'react-router-dom'

function App() {
  
  const [loading , setLoading] = useState(true);
  const dispatch = useDispatch()                                         

  //check user is login or not 
  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        console.log(userData)
        dispatch(login({userData}))
      }else {
        dispatch(logout())
      }
    })
    .finally(()=>{setLoading(false)})
  
  },[])

return !loading ? (
  <div className=''>
  <div>
    <Header/>
    <main>
    <Outlet />
    </main>
    <Footer/>
  </div>
</div>
) : null

}



export default App
