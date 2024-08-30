/* eslint-disable no-unused-vars */
import React , {useState} from 'react'
import authService from '../AppWrite/Auth'
import {useNavigate , Link} from 'react-router-dom'
import { useForm  } from 'react-hook-form'
import {login} from '../Store/authSlice'
import {Button , Input , Logo} from '../Components/Index'
import { useDispatch } from 'react-redux'


  function Signup() {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
  
    const create = async (data) => {
      setError('');
      try {
        const userData = await authService.createAccount(data);
        console.log(userData)
        if (userData) {
          const currentUser = await authService.getCurrentUser();
          console.log(currentUser)
          if (currentUser) {
            dispatch(login(currentUser));
            navigate('/');
          }
        }
      } catch (error) {
        setError(error.message);
      }
    };
  
    return (
      <div className="flex items-center justify-center">
        <div className="mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10">
          
          <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[300px]">
                    <h1 className=' text-black text-center text-3xl border-neutral-800 font-bold '>
                    WonderWord
                    </h1>
          </span>
          </div>
          <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
          <p className="mt-2 text-center text-base text-black">
            Already have an account?&nbsp;
            <Link
              to="/login"
              className="font-medium text-primary transition-all duration-200 hover:underline"
            >
              Sign In
            </Link>
          </p>
          {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
  
          {/* react-hook-form */}
          
          <form onSubmit={handleSubmit(create)}>
            <div className="space-y-5">
              {/* Input field for name */}
              <Input
                label="Full Name: "
                placeholder="Enter you full name"
                {...register('name', {
                  required: 'Full name is required',
                  minLength: {
                    value: 3,
                    message: 'Full name must be at least 3 characters',
                  },
                  maxLength: {
                    value: 50,
                    message: 'Full name cannot exceed 50 characters',
                  },
                })}
              />
  
              {/* Input field for Email */}
              <Input
                label="Email: "
                placeholder="Enter your email"
                type="email"
                {...register('email', {
                  required: true,
                  validate: {
                    matchPattern: (value) =>
                      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                      'Email address must be a valid address',
                  },
                })}
              />
  
              {/* Input field for password */}
              <Input
                label="Password"
                type="password"
                placeholder="Enter your password"
                {...register('password', {
                  required: true,
                })}
              />
  
              {/* button  for sign up */}
              <Button type="submit" className="w-full">
                Create Account
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  
  export default Signup;