import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const root = useLocation()
  if(root.pathname ==="/sign-up" || root.pathname ==="/sign-in"){
    return 
  }
  return (
    <div className='navbar'>
      <Link to="/"><h3 className="logo">Logo</h3></Link>
      <ul className='menu_items'>
        <li className={`${root.pathname=="/" ? "item active" : "item"}`}><Link  to="/">Home</Link></li>
        <li className={`${root.pathname=="/about" ? "item active" : "item"}`}><Link to="/about">About</Link></li>
        <li className={`${root.pathname=="/contact" ? "item active" : "item"}`}><Link to="/contact">Contact</Link></li>
        <li className={`${root.pathname=="/product" ? "item active" : "item"}`}><Link to="/product">Product</Link></li>
        <li className={`${root.pathname=="/cart" ? "item active" : "item"}`}><Link to="/cart">Cart</Link></li>
        <li className={`${root.pathname=="/crud" ? "item active" : "item"}`}><Link to="/crud">Crud</Link></li>
        <li className={`${root.pathname=="/crud-main" ? "item active" : "item"}`}><Link to="/crud-main">Crud 2</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
