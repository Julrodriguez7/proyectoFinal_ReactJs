import React, { useState } from 'react'
import { CartWidget } from '../CartWidget/CartWidget'
import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {

    const [isOpen, setIsOpen] = useState (false);

  return (
    <nav className='nav-bar'>
        <Link className='link-title' to={`/`} onClick={() => { setIsOpen(false);}}>
            <h1 className='title-nav'>ARROW</h1>
        </Link>
        <div className={`nav-items ${isOpen && "open"}`}>
            <NavLink to={`/category/pantalones`} className='btn-nav'  onClick={() => { setIsOpen(false);}}>PANTALONES</NavLink>
            <NavLink to={`/category/buzos`} className='btn-nav'  onClick={() => { setIsOpen(false);}}>BUZOS</NavLink>
            <NavLink to={`/category/remeras`} className='btn-nav'  onClick={() => { setIsOpen(false);}}>REMERAS</NavLink>
            <NavLink to={`/category/shorts`} className='btn-nav'  onClick={() => { setIsOpen(false);}}>SHORTS</NavLink>
        </div>
        <div>
            <CartWidget />
        </div>
        <div className={`nav-toggle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
        </div>    
    </nav>
  )
}
