
// import { Logo } from '../Index'
// import { LogoutBtn } from '../Index'
// import { Link, useNavigate } from 'react-router-dom'
// import { useSelector } from 'react-redux'
// import Button from '../Button'

// function Header() {

//   const authStatus = useSelector((state) => state.auth.status)
//   const navigate = useNavigate()

//   const navItems = [
//     {
//       name: 'Home',
//       slug: '/',
//       active: true
//     },
//     {
//       name: 'Login',
//       slug: '/login',
//       active: !authStatus
//     },
//     {
//       name: 'Signup',
//       slug: '/signup',
//       active: !authStatus
//     },
//     {
//       name: 'All Post',
//       slug: '/all-posts',
//       active: authStatus
//     },
//     {
//       name: 'Add Post',
//       slug: '/add-post',
//       active: authStatus
//     }
//   ]

//   return (
//     <header className='bg-gray-900 shadow-lg py-5 w-full border-b-[3px]'>
//       <div className='container mx-auto px-6'>
//         <nav className='flex flex-col sm:flex-row sm:items-center sm:justify-between'>
//           <div className='flex items-center justify-between sm:justify-start'>
//             {/* Hide Logo on small screens */}
//             <Link to='/' className='hidden sm:block'>
//               <Logo className='text-teal-300 text-3xl font-extrabold tracking-tight' />
//             </Link>
//             {authStatus && (
//               <div className='block sm:hidden'>
//                 <LogoutBtn />
//               </div>
//             )}
//           </div>
//           <ul className='flex flex-row sm:flex-row sm:justify-between items-center  sm:space-x-6 mt-4 sm:mt-0 gap-3'>
//             {navItems.map((item) =>
//               item.active ? (
//                 <li key={item.name}>
//                   <Button
//   onClick={() => { navigate(item.slug) }}
//   className='text-gray-900 bg-teal-300 hover:bg-teal-400 px-3 py-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105 text-xs'
// >
//                     {item.name}
//                   </Button>
//                 </li>
//               ) : null
//             )}
//             {authStatus && (
//               <li className='hidden sm:block'>
//                 <LogoutBtn />
//               </li>
//             )}
//           </ul>
//         </nav>
//       </div>
//     </header>
//   )
// }

// export default Header;
import { Logo } from '../Index'
import { LogoutBtn } from '../Index'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Button from '../Button'
import { useState } from 'react'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: '/',
      active: true
    },
    {
      name: 'Login',
      slug: '/login',
      active: !authStatus
    },
    {
      name: 'Signup',
      slug: '/signup',
      active: !authStatus
    },
    {
      name: 'All Post',
      slug: '/all-posts',
      active: authStatus
    },
    {
      name: 'Add Post',
      slug: '/add-post',
      active: authStatus
    }
  ]

  return (
    <header className='bg-gray-900 shadow-lg py-5 w-full border-b-[3px]'>
      <div className='container mx-auto px-6'>
        <nav className='flex flex-col sm:flex-row sm:items-center sm:justify-between'>
          <div className='flex items-center justify-between w-full'>
            <Link to='/' className='text-teal-300 text-2xl font-extrabold'>
              <Logo />
            </Link>
            {/* Hamburger icon */}
            <div className='sm:hidden'>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className='text-teal-300 focus:outline-none'
              >
                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7'></path>
                </svg>
              </button>
            </div>
          </div>




          {/* Menu items - visible on larger screens or when the menu is open on small screens */}
          <ul
  className={`${
    menuOpen ? 'flex' : 'hidden'
  } sm:flex flex-row sm:justify-between items-center sm:space-x-6 mt-4 sm:mt-0 gap-3`}
>
  {navItems.map(
    (item) =>
      item.active && (
        <li key={item.name}>
          <Button
            onClick={() => {
              navigate(item.slug)
              setMenuOpen(false) // Close the menu after navigation
            }}
            className={`text-gray-900 bg-teal-300 hover:bg-teal-400 px-3 py-2 sm:${item.name === 'Add Post' ? 'py-2' : ''} m-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105 text-xs`}
          >
            {item.name}
          </Button>
        </li>
      )
  )}
  {authStatus && (
    <li className='m-2'>
      <LogoutBtn />
    </li>
  )}
</ul>
        </nav>
      </div>
    </header>
  )
}

export default Header



