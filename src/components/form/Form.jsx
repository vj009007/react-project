import React, { useState } from 'react'
import { toast } from 'react-toastify';

const Form = () => {

     const [showPass, setShowPass] = useState(false)

     const initialValue = {
          firstName:"",
          lastName:"",
          email:"",
          contactNum:"",
          message:""
     }

     const [formData, setFromData] = useState(initialValue)
     const [formError,setFormError] = useState({})

     const handleOnchage = (e)=>{
          const {name, value}= e.target
          console.log(name)
          delete formError[name]
          setFromData((prev)=>({...prev, [name]:value}))
     }

     const validation = ()=>{
          const regexForEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 
     
          let error = {}
          if(formData.firstName===""){
               error.firstName = "Required"
          } 
          else if(formData.firstName){
               if(formData.firstName.length < 3){
                     error.firstName = "Min  3 char required"
               }
          }
          if(formData.lastName===""){
               error.lastName = "Required"
          } 
          else if(formData.lastName){
               if(formData.lastName.length < 3){
                     error.lastName = "Min  3 char required"
               }
          }
          if(formData.email===""){
               error.email = "Required"
          } 
          else if(formData.email && !regexForEmail.test(formData.email)){
               error.email = "Email is invalid"
          }
          if(formData.contactNum===""){
               error.contactNum = "Required"
          }  
          setFormError({...error})
          return  Object.keys(error) < 1
     }               
  
     const handleSubmit = (e)=>{
          e.preventDefault()
        let isValid =   validation()  
        if(isValid){
          toast.success("User details submited")
          console.log(formData)
          setFromData(initialValue)
        }else{
          toast.warning("Please fill all required fields")
        }
          
     }
 

  return (
    <div className='formSection'>
     <h1 className='form_title'>Contact Us</h1>
      <form className='myForm' onSubmit={handleSubmit}>
       <div className='input_container'>
            <label >First Name</label>
            <input type='text'
            name='firstName'
            value={formData.firstName} 
            onChange={(e)=>handleOnchage(e)}
            />
            <div className='error_msg'>{formError.firstName}</div>
       </div>
       <div className='input_container'>
            <label >Last Name</label>
            <input type={`${showPass ? "text" : "password"}`}
            value={formData.lastName}
            name='lastName'
            onChange={(e)=>handleOnchage(e)}
            />
               <div className='error_msg'>{formError.lastName}</div>
       </div>
       <div className='input_container'>
            <label >Email</label>
            <input type='text'
             value={formData.email}
            name='email'
            onChange={(e)=>handleOnchage(e)}
            />
               <div className='error_msg'>{formError.email}</div>
       </div>
       <div className='input_container'>
            <label >Contact Num</label>
            <input type='text'
              value={formData.contactNum}
            name='contactNum'
            onChange={(e)=>handleOnchage(e)}
            />
               <div className='error_msg'>{formError.contactNum}</div>
       </div>
       <div className='input_container'>
            <label >Message</label>
            <textarea 
                rows={5} 
                  value={formData.message}
            name='message'
            onChange={(e)=>handleOnchage(e)}
              />
                 <div className='error_msg'>{formError.message}</div>
       </div>
       <div className='button_container'>
        <button>Submit</button>
       </div>
      </form>
        <button onClick={()=>setShowPass(!showPass)}>Eye</button>
    </div>
  )
}

export default Form
