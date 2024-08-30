
import { Logo } from '../Index'
import { LogoutBtn } from '../Index'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Button from '../Button' 

function Header() {

  const authStatus = useSelector((state) => state.auth.status)
  console.log("authStatus" ,authStatus)

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
    <header className='bg-gray-900 shadow-lg py-5 w-full'>
      <div className='container mx-auto px-6'>
        <nav className='flex items-center justify-between'>
          <div className='flex items-center'>
            {/* Hide Logo on small screens */}
            <Link to='/' className='hidden sm:block'>
              <Logo className='text-teal-300 text-3xl font-extrabold tracking-tight' />
            </Link>
          </div>
          <ul className='flex flex-wrap justify-end space-x-2 sm:space-x-6'>
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  
                  <Button
                    onClick={() => { navigate(item.slug) }}
                    className='text-gray-900 bg-teal-300 hover:bg-teal-400 px-3 py-2 sm:px-6 sm:py-3 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105'
                  >
                    {item.name}
                  </Button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;
