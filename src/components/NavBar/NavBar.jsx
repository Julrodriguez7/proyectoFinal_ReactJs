import React from 'react'
import { CartWidget } from '../CartWidget/CartWidget'
import './NavBar.css'

export const NavBar = () => {
  return (
    <nav className='nav-bar'>
        <div>
            <h1 className='title-nav'>ARROW</h1>
        </div>
        <div>
            <button className='btn-nav'>CONJUNTOS</button>
            <button className='btn-nav'>PANTALONES</button>
            <button className='btn-nav'>BUZOS</button>
            <button className='btn-nav'>REMERAS</button>
            <button className='btn-nav'>SHORTS</button>
        </div>
        <div>
            <CartWidget />
        </div>    
    </nav>
  )
}
