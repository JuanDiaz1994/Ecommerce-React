import "./Navbar.css"
import React from 'react';
import CartWidget from '../Cart/Index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Image  from '../images/LOGO.png'


const NavBar = () => {
  return (
    <header className= "main">
      <div>
        
        {/* Botón de menú  */}
        <div className="menu-button">
          <FontAwesomeIcon icon={faBars} size="lg" color="black"/>
          <span>Menu</span>
        </div>

        {/* links de navegación */}
        <div className="nav">
        <img className="logo-container" src={ Image } alt ="logo" />

        <nav >
          <ul className="nav-container">

            <ol>
              <a className='nav-titles' href="/">Inicio</a>
            </ol>
            <ol>
              <a className='nav-titles' href="/"> Productos</a>
            </ol>
            <ol>
              <a className='nav-titles' href="/">Blog</a>
            </ol>
            <ol>
              <a className='nav-titles' href="/">Contacto</a>
            </ol>
          </ul>
        </nav>
        </div>
        {/* logo de la marca */}

        {/* cart widget */}
        <CartWidget />
      </div>
    </header>
  );
};

export default NavBar;
