import React, { Component } from 'react';

class Navbar extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
               <a className="navbar-brand" href="#">Code Executor</a>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul className="navbar-nav me-auto">
                     <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="#">My Codes</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="#">Contact Us</a>
                     </li>
                  </ul>

                  <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">My Profile</button>
                  <ul className="dropdown-menu dropdown-menu-end">
                     <li><a className="dropdown-item" href="#">My Account</a></li>
                     <li><a className="dropdown-item" href="#">Logout</a></li>
                     <li><a className="dropdown-item" href="#">Something else here</a></li>
                     <li><hr className="dropdown-divider" /></li>
                     <li><a className="dropdown-item" href="#">Separated link</a></li>
                  </ul>
               </div>
            </div>
         </nav>
      );
   }
}

export default Navbar;