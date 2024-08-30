import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Hero from '../components/Hero/Hero';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className='home'> 
      <Hero />
    </div>
  )
}

export default Home
