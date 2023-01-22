import React from "react";
import {Route, Routes} from 'react-router-dom'
import Home from '../containers/auth/homepage/home';
import Contact from '../containers/contact';
import About from '../containers/about';
import Register from '../containers/auth/registerpage/register';
import Login from '../containers/auth/loginpage/login';
import AdminDashboard from '../containers/admin/dashboard';
import UserDashboard  from '../containers/user/dashboard'
import Packages from '../containers/user/packages';
import {useSelector} from 'react-redux';
import ChangePassword from "./changePassword";
import Services from '../containers/admin/services'



const ConditionalRouting = ()=>{
    const {userRole} = useSelector(state=>state.user)
    if(userRole==='user'){
      return <UserScreen/>
    }else if(userRole === 'admin'){
      return (<AdminScreen/>)
    }else{
      return <AuthScreens/>
    }
}

const UserScreen=()=>{
    return(
      <Routes>
      <Route exact path='/' element={<UserDashboard/>}/> 
      <Route exact path='/contact' element={<Contact/>}/>
      <Route exact path='/about' element={<About/>}/>
      <Route exact path='/packages' element={<Packages/>}/>
      <Route exact path = '/changepassword' element = {<ChangePassword/>}/>


      </Routes>
    )
  }

  const AdminScreen=()=>{
    return(
      <Routes>
        <Route exact path='/' element={<AdminDashboard/>}/>
        <Route exact path = '/changepassword' element = {<ChangePassword/>}/>
        <Route exact path = '/api/services' element = {<Services/>}/>

      </Routes>
    )
  }


const AuthScreens=()=>{
  return(
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/register' element={<Register/>}/>
        <Route exact path='/login' element={<Login/>}/>
    {/* <Route path="*" element={<ErrorPage/>}/> */}
   
    </Routes>
  )
}
  

export default ConditionalRouting


