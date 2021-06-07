import React from 'react';
import './Navbar.css'
import logo from '../../../images/logo.png'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <img id='logo' style={{width:'80px'}} className='img-fluid' src={logo} alt="" />
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav w-100 justify-content-end">
              <li class="nav-item">
                <Link to='/' style={{color: '#17d3c2'}} class="nav-link mx-4" aria-current="page" href="#">Home</Link>
              </li>
              <li class="nav-item">
                <Link to="/about" style={{color: '#17d3c2'}} class="nav-link mx-4" href="#">About</Link>
              </li>
              <li class="nav-item">
                <a  style={{color: '#17d3c2'}} class="nav-link mx-4" href="#">Dental Services</a>
              </li>
              <li class="nav-item">
                <a style={{color: '#17d3c2'}} class="nav-link mx-4" href="#">Reviews</a>
              </li><li class="nav-item">
                <a style={{color: '#17d3c2'}} class="nav-link mx-4" href="#">Blogs</a>
              </li><li class="nav-item">
                <a style={{color: '#17d3c2'}} class="nav-link mx-4" href="#">Contact Us</a>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    );
};

export default Navbar;