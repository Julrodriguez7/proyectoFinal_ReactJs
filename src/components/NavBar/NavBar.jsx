import React from 'react'
import { CartWidget } from '../CartWidget/CartWidget'
import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className='nav-bar'>
        <Link className='link-title' to={`/`}>
            <h1 className='title-nav'>ARROW</h1>
        </Link>
        <div>
            <NavLink to={`/category/pantalones`} className='btn-nav'>PANTALONES</NavLink>
            <NavLink to={`/category/buzos`} className='btn-nav'>BUZOS</NavLink>
            <NavLink to={`/category/remeras`} className='btn-nav'>REMERAS</NavLink>
            <NavLink to={`/category/shorts`} className='btn-nav'>SHORTS</NavLink>
        </div>
        <div>
            <CartWidget />
        </div>    
    </nav>
  )
}
