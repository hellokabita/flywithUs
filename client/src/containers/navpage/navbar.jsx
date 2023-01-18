import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import {ImAirplane} from 'react-icons/im'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
import './navbar.css'



  const Navbar=()=> {

    const [active, setActive]= useState('navBar')
    
    const showNav=()=>{
      setActive('navBar activeNavBar')
    }

    const removeNavbar=()=>{
      setActive('navBar')
    }

  
  
    return (
    
    <section className='navBarSection'>
      <header className='header flex'>
        <div className='logoDiv'>
          <NavLink to='#' className='logo flex'>
            <h1><ImAirplane className='icon'/>flywithUs</h1>
          </NavLink>
        </div>
        
        <div className={active}>
          <ul className='navLists flex'>
            <li className="navItem ">
              <NavLink className="navLink" to="/">Home</NavLink>
            </li>
            <li className="navItem">
              <NavLink className="navLink" to="/about">About</NavLink>
            </li>

            <li className="navItem">
              <NavLink className="navLink" to="/contact">Contact</NavLink>
            </li>

       <li className="navItem">
         <NavLink className="navLink" to="/login">Signin</NavLink>
       </li>

       <li className="navItem">
         <NavLink className="navLink" to="/register">Signup</NavLink>
       </li>
      <button className="button">Login</button>
       
          </ul>

          <div onClick={removeNavbar}
           className='closeNavbar'>
            <AiFillCloseCircle className='icon'/>
          </div>
        </div>

        <div onClick={showNav} 
        className="toggleNavbar">
          <TbGridDots className='icon'/>
        </div>
      
      
      </header>
    </section>














//    <>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//   <NavLink className="navbar-brand" to="#">logo</NavLink>
//   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>

//   <div className="NavbarItems" id="navbarSupportedContent">
//     <ul className="navbar-nav mr-auto">
//       <li className="nav-item active">
//         <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
//       </li>
//       <li className="nav-item">
//         <NavLink className="nav-link" to="/about">About</NavLink>
//       </li>

//       <li className="nav-item">
//         <NavLink className="nav-link" to="/contact">Contact</NavLink>
//       </li>

//       <li className="nav-item">
//         <NavLink className="nav-link" to="/login">Signin</NavLink>
//       </li>

//       <li className="nav-item">
//         <NavLink className="nav-link" to="/register">Signup</NavLink>
//       </li>
//     </ul>
    
//   </div>
// </nav>
//    </>
  );
}

export default Navbar;