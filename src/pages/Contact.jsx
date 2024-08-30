import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Contact = () => {

  const initialValue = {
      firstName:"",
      lastName:"",
      email:"",
      contactNum:"",
      message:""
  }


  const [formData , setFormData] = useState(initialValue);
  const [formError, setFormError] = useState({});

  const handleOnchage= (e)=>{
    const {name, value}= e.target;
    delete formError[name]
    setFormData((prev)=>({...prev, [name]:value}))
  }

  const handleValidation= ()=>{

      const regexForEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const regexForName = /^[a-zA-Z ]{2,40}$/;
      const phoneRegex =  /^[0-9\b]+$/;


      let error = {}

      if(formData.firstName===""){
          error.firstName = "Required"
      }
      else if(formData.firstName && !regexForName.test(formData.firstName)){
        error.fullName="First Name is Invalid";
      }

      
      if(formData.lastName===""){
          error.lastName = "Required"
      }else if(formData.lastName && !regexForName.test(formData.lastName)){
        error.fullName="Last Name is Invalid";
      }

      if(formData.email===""){
          error.email = "Required"
      }else if(formData.email && !regexForEmail.test(formData.email)){
        error.email = "Email is invalid";
      }

      if(formData.contactNum===""){
          error.contactNum = "Required"
      }else if(formData.contactNum && !phoneRegex.test(formData.contactNum)){
        error.contactNum="Number isn't Valid!"
      }
      // console.log(Object.keys(error)) its retuen array

      setFormError(error);
      return Object.keys(error).length < 1
  }


  const handleSubmit = (e)=>{
    e.preventDefault();
    const checkValid = handleValidation();


    if (checkValid) {
      toast.success("User details submited")
      console.log(formData);
      setFormData(initialValue)
    }
    else{
      toast.warning("Please fill all required fields")
    }

  }

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="md:py-20 py-10">
        <div className="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
          <div className="flex items-center justify-center w-full">
            <div className="px-2 md:px-12 w-full">
              <p className="text-2xl font-bold text-gray-900 md:text-4xl">Get in touch</p>
              <p className="mt-4 text-lg text-gray-600">
                Our friendly team would love to hear from you.
              </p>
              <form onSubmit={handleSubmit} className="mt-8 space-y-4 flex flex-wrap gap-2">
                <div className="grid w-full gap-6 lg:grid-cols-2">
                  <div className="grid w-full items-center gap-1.5 relative">
                    <label
                      className="text-sm font-medium leading-none text-gray-900"
                      htmlFor="first_name"
                    >
                      First Name
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-900 bg-transparent px-3 py-2 text-sm placeholder:text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-1"
                      type="text"
                      id="first_name"
                      placeholder="First Name"
                      name='firstName'
                      value={formData.firstName}
                      onChange={(e)=>handleOnchage(e)}
                    />
                    <div className='error_msg'>{formError.firstName}</div>
                  </div>
                  <div className="grid w-full items-center gap-1.5 relative">
                    <label
                      className="text-sm font-medium leading-none text-gray-900"
                      htmlFor="last_name"
                    >
                      Last Name
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-900 bg-transparent px-3 py-2 text-sm placeholder:text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-1"
                      type="text"
                      id="last_name"
                      placeholder="Last Name"
                      name='lastName'
                      value={formData.lastName}
                      onChange={(e)=>handleOnchage(e)}
                    />
                    <div className='error_msg'>{formError.lastName}</div>
                  </div>
                </div>
                <div className="grid w-full items-center gap-1.5 relative">
                  <label
                    className="text-sm font-medium leading-none text-gray-900"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-900 bg-transparent px-3 py-2 text-sm placeholder:text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-1"
                    type="text"
                    id="email"
                    placeholder="Email"
                    name='email'
                    value={formData.email}
                    onChange={(e)=>handleOnchage(e)}
                  />
                  <div className='error_msg'>{formError.email}</div>
                </div>
                <div className="grid w-full items-center gap-1.5 relative">
                  <label
                    className="text-sm font-medium leading-none text-gray-900"
                    htmlFor="phone_number"
                  >
                    Phone number
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-900 bg-transparent px-3 py-2 text-sm placeholder:text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-1"
                    type="tel"
                    id="phone_number"
                    placeholder="Phone number"
                    name='contactNum'
                    value={formData.contactNum}
                    onChange={(e)=>handleOnchage(e)}
                  />
                  <div className='error_msg'>{formError.contactNum}</div>
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <label
                    className="text-sm font-medium leading-none text-gray-900"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className="flex w-full rounded-md border border-gray-900 bg-transparent px-3 py-2 text-sm placeholder:text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-1"
                    id="message"
                    placeholder="Leave us a message"
                    cols={3}
                    rows={4}
                    name='message'
                    value={formData.message}
                    onChange={(e)=>handleOnchage(e)}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <img
            alt="Contact us"
            className="hidden max-h-full w-full rounded-lg object-cover lg:block"
            src="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGhhcHB5JTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
