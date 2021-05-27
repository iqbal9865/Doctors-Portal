import React from 'react';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
        
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav w-100 justify-content-end">
              <li class="nav-item">
                <a class="nav-link m-3 active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link m-3" href="#">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link m-3" href="#">Dental Services</a>
              </li>
              <li class="nav-item">
                <a class="nav-link m-3" href="#">Reviews</a>
              </li><li class="nav-item">
                <a class="nav-link m-3" href="#">Blogs</a>
              </li><li class="nav-item">
                <a class="nav-link m-3" href="#">Contact Us</a>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    );
};

export default Navbar;