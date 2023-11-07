import React from 'react'
import { CartWidget } from '../CartWidget/CartWidget'

export const NavBar = () => {
  return (
    <nav>
        <div>
            <button>CONJUNTOS</button>
            <button>PANTALONES</button>
            <button>BUZOS</button>
            <button>REMERAS</button>
            <button>SHORTS</button>
        </div>
        <CartWidget />
    </nav>
  )
}
