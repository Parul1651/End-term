import React from 'react'
import { NavLink } from "react-router-dom";
import web from "../src/images/image2.svg";
import pic from "../src/weblogo1.gif";


const Navbar = () => {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
        <img className='logo' src={pic}/>

          <div className="col-10 mx-auto">


            <nav className="navbar navbar-expand-lg bg-light">
              <div className="container-fluid">
                {/* <NavLink
                  className="navbar-brand" to="/"><img "src={pic}/></NavLink> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink activeClassName='menu_active' className="nav-link active text-white" aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeClassName='menu_active' className="nav-link text-white" to="/about">About</NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink activeClassName='menu_active' className="nav-link text-white" to="/service">Service</NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink activeClassName='menu_active' className="nav-link text-white" to="/contact">Contact Us</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeClassName='menu_active' className="nav-link text-white" to="/login">Login</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeClassName='menu_active' className="nav-link text-white" to="/upload">Upload</NavLink>
                    </li>

                  </ul>

                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;