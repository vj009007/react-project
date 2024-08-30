import React from 'react'
import { useNavigate } from 'react-router-dom'

const Notfound = () => {
    const navigate = useNavigate()
  return (
    <div>
      <h1>This page is not found.</h1>
      <h3>404</h3>
      <button onClick={()=>navigate("/")}>Home</button>
    </div>
  )
}

export default Notfound
