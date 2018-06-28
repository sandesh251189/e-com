import React, { Component } from "react";


class Navbar extends Component{
  render(){
    return(
      <div className="header-nav">
      <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light">
         <button className="navbar-toggler" data-toggle="collapse">
         <span className="navbar-toggle-icon"></span>
         </button>
         <div className="collapse navbar-collapse">
           <ul className="navbar-nav">
           <li className="nav-item">
           <a className="nav-link" href="#">Home</a>
           </li>
           <li className="nav-item">
           <a className="nav-link" href="#">Clothing</a>
           </li>
           <li className="nav-item">
           <a className="nav-link" href="#">Electronics</a>
           </li>
           </ul>
         </div>
     </nav>
     </div>
    </div>
    )
  }
}

export default Navbar;
