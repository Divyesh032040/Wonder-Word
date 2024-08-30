/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store  from './Store/Store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Protected , Login } from './Components/Index.js'


//pages
import AddPost from "./Pages/AddPost.jsx";
import SignupComponent from './Pages/SignupComponent.jsx'
// import EditPost from "./pages/EditPost.jsx";
import EditPost from './Pages/EditPost.jsx'
import Home from './Pages/Home.jsx'

import Post from "./pages/Post";
import AllPosts from "./Pages/AllPost.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/login",
            element: (
                <Protected authentication={false}>
                    <Login />
                </Protected>
            ),
        },
        {
            path: "/signup",
            element: (
                <Protected authentication={false}>
                    <SignupComponent/>
                </Protected>
            ),
        },
        {
            path: "/all-posts",
            element: (
                <Protected authentication>
                    <AllPosts />
                </Protected>
            ),
        },
        {
            path: "/add-post",
            element: (
                <Protected authentication>

                    <AddPost />
                </Protected>
            ),
        },
        {
            path: "/edit-post/:slug",
            element: (
                <Protected authentication>
                   
                    <EditPost />
                </Protected>
            ),
        },
        {
            path: "/post/:slug",
            element: <Post />,
        },
    ],
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
 
    <Provider store={store}>
      <RouterProvider router={router}/>
      
    </Provider>
  
)
