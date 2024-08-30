

    /* eslint-disable no-unused-vars */
    import React, { useState } from 'react';
    import { Link, useNavigate } from 'react-router-dom';
    import { login as authLogin } from '../Store/authSlice';
    import { Button, Input, Logo } from './Index';
    import { useDispatch } from 'react-redux';
    import authService from '../AppWrite/Auth';
    import { useForm } from 'react-hook-form';

    function Login() {
        const navigate = useNavigate();
        const dispatch = useDispatch();
        const { register, handleSubmit } = useForm();
        const [error, setError] = useState("");

        const handleLogin = async (data) => {
            setError("");
            try {
                const session = await authService.login(data);
                if (session) {
                    const userData = await authService.getCurrentUser();
                    if (userData) dispatch(authLogin(userData));
                    navigate("/");
                }
            } catch (error) {
                setError(error.message || "An unknown error occurred.");
            }
        };

        return (
            <div className='flex items-center justify-center w-full'>
                <div className="m-6 mx-auto w-full max-w-lg bg-gray-200 p-10 rounded-xl border border-black/10">

                    <div className="mb-2 flex justify-center">
                        <span className="inline-block w-full max-w-[300px]">
                        <h1 className=' text-black text-center text-3xl border-neutral-800 font-bold '>
                        WonderWord
                        </h1>

                        </span>
                    </div>
                    <h2 className="text-center text-2xl font-bold leading-tight text-black">Sign in to your account</h2>
                    <p className="mt-2 text-center text-base text-black/60">
                        Don&apos;t have an account?&nbsp;
                        <Link
                            to="/signup"
                            className="font-medium text-primary transition-all duration-200 hover:underline"
                        >
                            Sign Up
                        </Link>
                    </p>
                    {error && <p className="text-red-600 mt-8 text-center">{error}</p>}


                <form onSubmit={handleSubmit(handleLogin)} className='mt-8 p-6 bg-gray-800 rounded-lg shadow-lg'>
                <div className='space-y-5'>
                    <div className='flex flex-col'>
                        <label className='text-gray-300 mb-2 font-medium'>{`Email:`}</label>
                <Input
                    placeholder="Enter your email"
                    type="email"
                    {...register("email", {
                        required: "Email is required",
                        validate: {
                            matchPattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                            "Email address must be a valid address",
                        }
                    })}
                    className="p-3 rounded-md border border-gray-600 bg-gray-900 text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
            </div>
            <div className='flex flex-col'>
                <label className='text-gray-300 mb-2 font-medium'>{`Password:`}</label>
                <Input
                    placeholder="Enter your password"
                    type="password"
                    {...register("password", {
                        required: "Password is required",
                    })}
                    className="p-3 rounded-md border border-gray-600 bg-gray-900 text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
            </div>
            <Button
                type="submit"
                className="w-full py-3 px-6 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-600 transition duration-300 ease-in-out"
            >
                Login
            </Button>
        </div>
    </form>
                </div>
            </div>
        );
    }

    export default Login

