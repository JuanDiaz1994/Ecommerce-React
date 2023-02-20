import "./Navbar.css"
import React from 'react';
import CartWidget from '../Cart/Index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Image  from '../images/LOGO.png'
import { NavLink } from "react-router-dom";


const NavBar = () => {
  return (
    <header>
      <div>
        {/* Botón de menú  */}
        <div className="menu-button">
          <FontAwesomeIcon icon={faBars} size="lg" color="black"/>
          <span>Menu</span>
        </div>

        {/* links de navegación */}

        <nav >
          <ul className="nav-container">

          <ol className='nav-titles1'>
            <NavLink  to={"/"}>
              <img className="logo-container" src={Image} alt="logo" />
            </NavLink>
          </ol>
          <div className="nav-container1">
          <ol>
            <NavLink className='nav-titles' to={"/"}>
            Inicio
            </NavLink>
            </ol>
            <ol>
            <NavLink className='nav-titles' to={"./category/Juegos"}>
            Juegos
            </NavLink>
            </ol>
            <ol>
            <NavLink className='nav-titles' to={"./category/Tecnologia"}>
            Tecnologia
            </NavLink>
            </ol>
            <ol>
            <NavLink className='nav-titles' to={"./category/Articulos"}>
            Articulos varios
            </NavLink>
            </ol>
            <ol>
            <NavLink className='nav-titles' to={"./category/Cocina"}>
            Cocina
            </NavLink>
            </ol>
            </div>
          </ul>
        </nav>
        </div>
        <CartWidget />
    </header>


  );
};

export default NavBar;
