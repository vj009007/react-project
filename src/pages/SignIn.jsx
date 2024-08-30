import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { Eye, EyeOff } from 'lucide-react';

export default function SignIn() {
    const initialValue = {
        email: "",
        password: "",
    }

    const [newUser, setNewUser] = useState(initialValue);
    const [showPass, setShowPass] = useState(false);
    const [formError, setFormError] = useState({});

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        delete formError[name]
        setNewUser((prev)=>({...prev, [name]:value}))
    }

    const validation = () => {
        const regexForEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const regexForPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

        let error = {};

        if (newUser.email === "") {
            error.email = "Required";
        } else if (newUser.email && !regexForEmail.test(newUser.email)) {
            error.email = "Email is invalid";
        }

        if (newUser.password === "") {
            error.password = "Required";
        } else if (newUser.password && !regexForPassword.test(newUser.password)) {
            error.password = "Enter a valid password with 1 capital letter, 1 symbol, min 8 and max 16 characters";
        }

        setFormError(error);
        return Object.keys(error).length < 1;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const checkValid = validation();

        if (checkValid) {
            toast.success("User details submitted");
            console.log(newUser);
        } else {
            toast.warning("Please fill all required fields");
        }
    }

    return (
        <section>
            <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
                <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                    <h2 className="text-center text-2xl font-bold leading-tight text-black">
                        Sign in to your account
                    </h2>
                    <p className="mt-2 text-center text-base text-gray-900 ">
                        Don&apos;t have an account?
                        <Link to="/sign-up"
                            className="ps-2 font-semibold text-black transition-all duration-200 hover:underline"
                        >
                            Create a free account
                        </Link>
                    </p>
                    <form className='mt-8' onSubmit={handleSubmit}>
                        <div className="space-y-5">
                            <div>
                                <label className="text-base font-medium text-gray-900">
                                    Email address
                                </label>
                                <div className="mt-2 relative">
                                    <input
                                        className="flex h-10 w-full rounded-md border border-gray-900 bg-transparent px-3 py-2 text-sm placeholder:text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="email"
                                        placeholder="Email"
                                        name='email'
                                        value={newUser.email}
                                        onChange={handleOnChange}
                                    />
                                    <div className='error_msg'>{formError.email}</div>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between">
                                    <label className="text-base font-medium text-gray-900">
                                        Password
                                    </label>
                                </div>
                                <div className="mt-2 relative">
                                    <input
                                        className="flex h-10 w-full rounded-md border border-gray-900 bg-transparent px-3 py-2 text-sm placeholder:text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        type={showPass ? "text" : "password"}
                                        placeholder="Password"
                                        name='password'
                                        value={newUser.password}
                                        onChange={handleOnChange}
                                    />
                                    <div className="absolute right-4 top-2">
                                        {showPass 
                                            ? <EyeOff className='w-4 cursor-pointer' onClick={() => setShowPass(!showPass)} />
                                            : <Eye className='w-4 cursor-pointer' onClick={() => setShowPass(!showPass)} />}
                                    </div>
                                     <div className='error_msg'>{formError.password}</div>
                                </div>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                                >
                                    Get started
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
