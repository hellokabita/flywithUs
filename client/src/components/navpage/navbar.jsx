import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import {ImAirplane} from 'react-icons/im'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
import './navbar.css'
import Navigation from "../navigation";
import { useSelector} from 'react-redux';






  const Navbar=()=> {
   
    const { userRole } = useSelector(state => state.user)

   

  //   const [active, setActive]= useState('navBar')
    
  //   const showNav=()=>{
  //     setActive('navBar activeNavBar')
  //   }

  //   const removeNavbar=()=>{
  //     setActive('navBar')
  //   }

  
  
    // return (

     
    // <section className='navBarSection'>
    //   <header className='header flex'>
    //     <div className='logoDiv'>
    //       <NavLink to='#' className='logo flex'>
    //         <h1><ImAirplane className='icon'/>flywithUs</h1>
    //       </NavLink>
    //     </div>
        
    //     <div className={active}>
    //       <ul className='navLists flex'>
    //         <li className="navItem ">
    //           <NavLink className="navLink" to="/">Home</NavLink>
    //         </li>
    //         <li className="navItem">
    //           <NavLink className="navLink" to="/about">About</NavLink>
    //         </li>
    //         <li className="navItem">
    //           <NavLink className="navLink" to="/Packages">Packages</NavLink>
    //         </li>

    //         <li className="navItem">
    //           <NavLink className="navLink" to="/contact">Contact</NavLink>
    //         </li>

    //    <li className="navItem">
    //      <NavLink className="navLink" to="/login">Signin</NavLink>
    //    </li>

    //    <li className="navItem">
    //      <NavLink className="navLink" to="/register">Signup</NavLink>
    //    </li>
    //   <button className="button">Login</button>
       
    //       </ul>

    //       <div onClick={removeNavbar}
    //        className='closeNavbar'>
    //         <AiFillCloseCircle className='icon'/>
    //       </div>
    //     </div>

    //     <div onClick={showNav} 
    //     className="toggleNavbar">
    //       <TbGridDots className='icon'/>
    //     </div>
      
      
    //   </header>
    // </section>



  






  return(
    <>
   
    {userRole ?(
     <nav className="navbar navbar-expand-lg navbar-light bg-light flex">
     <div className='logoDiv'>
           <NavLink to='#' className='logo flex'>
           <h1><ImAirplane className='icon'/>flywithUs</h1>
             </NavLink>
          </div>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
  <div className="NavbarItems" id="navbarSupportedContent">
  
   
   {userRole === 'user' ?(
    <ul className="navbar-nav mr-auto">

    
<li className="nav-item active">
  <NavLink className="nav-link" to="/">Home </NavLink>
</li>

 

 
<li className="nav-item active">
  <NavLink className="nav-link" to="/packages">Packages</NavLink>
</li>
<li className="nav-item">
  <NavLink className="nav-link" to="/about">About</NavLink>
</li>

<li className="nav-item">
  <NavLink className="nav-link" to="/contact">Contact</NavLink>
</li>
{/* <Navigation/> */}




</ul>
   ):(
    <>
    <ul className="navbar-nav mr-auto">

    
    <li className="nav-item active">
      <NavLink className="nav-link" to="/">Home </NavLink>
    </li>
    
     
    
    
    <li className="nav-item active">
      <NavLink className="nav-link" to="/api/services">ADD SERVICES</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/">ticketsList</NavLink>
    </li>
    
    <li className="nav-item">
      <NavLink className="nav-link" to="/">userList</NavLink>
    </li>
    
    
    
    
    </ul>
   
    </>
   )}
     <Navigation/>
  
     
   </div>
   </nav>
    ):(
      null
    )
  }
   </>
  
  )}
//   else if(userRole === 'admin'){
//     return(
//     <>
//      <Navigation/>
   
// <nav className="navbar navbar-expand-lg navbar-light bg-light">
// <div className='logoDiv'>
//          <NavLink to='#' className='logo flex'>
//          <h1><ImAirplane className='icon'/>flywithUs</h1>
//            </NavLink>
//         </div>
//   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>

//         <div className="NavbarItems" id="navbarSupportedContent">
//         <ul className="navbar-nav mr-auto">
//           <li className="nav-item active">
//             <NavLink className="nav-link" to="/">Home </NavLink>
//           </li>
    
           
          
        
//           <li className="nav-item active">
//             <NavLink className="nav-link" to="/packages">upload Packages</NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink className="nav-link" to="/ticketList">tickets</NavLink>
//           </li>
    
//           <li className="nav-item">
//             <NavLink className="nav-link" to="/userList">users</NavLink>
//           </li>
    
      
    
          
//         </ul>
        
//       </div>
//       </nav>
//       </>
//     )
//   }else{
//     return null
//   }
  
 
  
 
  
        
  

export default Navbar;