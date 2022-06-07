import React from 'react'
import { Link } from 'react-router-dom'
import './Navegator.css'

const Navegator = () => {
  return (
    <div className="navbar">
       <span className="logo">El vending </span>
       <ul className="list">
          <li className='listItem-avatar'>
          <img 
            src="http://www.mecanio.com/images/LOGOMEC3.GIF" 
            height="40px"
            width="70px"
            alt="mecanio"
            className='avatar'
            />
          </li>
         <li className="listItem"> <Link className='link' to="/">Home</Link></li>
         <li className="listItem"><Link className='link' to="/productos">Productos</Link> </li>
         <li className="listItem"><Link className='link' to="/contacto">Contacto</Link></li>
        </ul> 
    </div>
  )
}

export default Navegator
