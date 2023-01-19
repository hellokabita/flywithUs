import React from "react";
import {Route, Routes} from 'react-router-dom'
import Home from '../containers/homepage/home';
import Contact from '../containers/contact';
import About from '../containers/about';
import Register from '../containers/registerpage/register';
import Login from '../containers/loginpage/login';
import AdminDashboard from '../containers/admin/dashboard';
import Packages from '../containers/packages/packages';
import {useSelector} from 'react-redux';



const ConditionalRouting = ()=>{
    const {userRole} = useSelector(state=>state.user)

    if(userRole === 'admin'){
        return (<AdminScreen/>)
      }else{
        return <AuthScreens/>
      }
}

const AuthScreens=()=>{
    return(
      <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/contact' element={<Contact/>}/>
      <Route exact path='/about' element={<About/>}/>
      <Route exact path='/packages' element={<Packages/>}/>

      <Route exact path='/register' element={<Register/>}/>
      <Route exact path='/login' element={<Login/>}/>
     
      </Routes>
    )
  }
  
 const AdminScreen=()=>{
    return(
      <Routes>
        <Route exact path='/' element={<AdminDashboard/>}/>
        {/* <Route exact path = '/changepassword' element = {<ChangePassword/>}/> */}
      </Routes>
    )
  }

export default ConditionalRouting


