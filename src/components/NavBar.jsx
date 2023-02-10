import "./Styles/Navbar.css"
import React from 'react';
import CartWidget from './CartWidget';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Image  from '../images/LOGO.png'


const NavBar = ({ background }) => {
  //Declaro una variable donde voy a almacenar la ruta de la imagen que quiero mostrar

  //la lógica va siempre antes del return
  return (
    <header className={`header background--${background}`}>
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
