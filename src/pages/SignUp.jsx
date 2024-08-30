import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { toast } from 'react-toastify';

export default function SignUp() {

  const initialValue = {
    fullName: "",
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
    const regexForName = /^[a-zA-Z ]{2,40}$/;
    const regexForPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

    let error = {};

    if (newUser.fullName === "") {
      error.fullName = "Required";
    }
    else if(newUser.fullName && !regexForName.test(newUser.fullName)){
      error.fullName="Name is Invalid";
    }

    if (newUser.email === "") {
      error.email = "Required";
    } else if (newUser.email && !regexForEmail.test(newUser.email)) {
      error.email = "Email is invalid";
    }

    if (newUser.password === "") {
      error.password = "Required";
    }
    else if(newUser.password && !regexForPassword.test(newUser.password)){
      error.password= "Enter a valid password with 1 Capital letter and Symbol min 8 max 16 words"
    }

    setFormError(error);
    return Object.keys(error).length < 1;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkValid = validation();


    if (checkValid) {
      toast.success("User details submited")
      console.log(newUser);
    }
    else{
      toast.warning("Please fill all required fields")
    }
  }

  return (
    <section className="rounded-md py-10 max-w-3xl w-full mx-auto">
      <div className="flex items-center justify-center w-full">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <h2 className="text-2xl font-bold leading-tight text-black">Sign up to create account</h2>
          <p className="mt-2 text-base text-gray-900">
            Already have an account?
            <Link to="/sign-in" className="ps-2 font-medium text-black transition-all duration-200 hover:underline">
              Sign In
            </Link>
          </p>
          <form className="mt-8" onSubmit={handleSubmit}>
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="text-base font-medium text-gray-900">
                  Full Name
                </label>
                <div className="mt-2 relative">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-900 bg-transparent px-3 py-2 text-sm placeholder:text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Full Name"
                    id="name"
                    name='fullName'
                    value={newUser.fullName}
                    onChange={handleOnChange}
                  />
                  <div className='error_msg'>{formError.fullName}</div>
                </div>
              </div>
              <div>
                <label htmlFor="email" className="text-base font-medium text-gray-900">
                  Email address
                </label>
                <div className="mt-2 relative">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-900 bg-transparent px-3 py-2 text-sm placeholder:text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Email"
                    id="email"
                    name='email'
                    value={newUser.email}
                    onChange={handleOnChange}
                  />
                  <div className='error_msg'>{formError.email}</div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-base font-medium text-gray-900">
                    Password
                  </label>
                </div>
                <div className="mt-2 relative">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-900 bg-transparent px-3 py-2 text-sm placeholder:text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type={`${showPass ? "text" : "password"}`}
                    placeholder="Password"
                    id="password"
                    name='password'
                    value={newUser.password}
                    onChange={handleOnChange}
                  />
                  <div className="absolute right-4 top-2">
                    {showPass ? <EyeOff className='w-4 cursor-pointer' onClick={() => setShowPass(!showPass)} /> : <Eye className='w-4 cursor-pointer' onClick={() => setShowPass(!showPass)} />}
                  </div>
                  <div className='error_msg'>{formError.password}</div>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80">
                  Create Account
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
