import React from 'react'
import Form from './components/form/Form'
import "./App.css"
import { BrowserRouter , Routes, Route } from "react-router-dom";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import About from "./pages/About"
import Contact from "./pages/Contact"
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import Navbar from './components/navbar/Navbar';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import { Footer } from './components/footer/Footer';
import Crud from './pages/Crud';
import Notfound from './pages/Notfound';
import CrudOld from './pages/CrudOld';
import CrudMain from './pages/CrudMain';

const App = () => { 
  
  return (
    <div className='main_container'>
      <ToastContainer />
      <BrowserRouter>
       <Navbar/>
        <div className='min-h-[calc(100vh-128px)]'>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/> 
            <Route path="/contact" element={<Contact />}/> 
            <Route path="/product" element={<Product />}/> 
            <Route path="/cart" element={<Cart />}/> 
            <Route path="/crud" element={<Crud />}/> 
            <Route path="/sign-up" element={<SignUp />}/> 
            <Route path="/sign-in" element={<SignIn />}/> 
            <Route path="/crud-old" element={<CrudOld />}/> 
            <Route path="/crud-main" element={<CrudMain />}/> 
            <Route path="*" element={<Notfound />}/> 
          </Routes>
        </div>
        <Footer />
    </BrowserRouter>
    </div>
  )
}

export default App
