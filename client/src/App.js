// import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Navbar from './containers/navbar';
import Home from './containers/home';
import Contact from './containers/contact';
import About from './containers/about';
import Register from './containers/register';
import Login from './containers/login';


const App=() => {
  return(
   <>
   <Navbar/>
   <Routes>
     
     
     <Route exact path='/' element={<Home/>}/>
      <Route exact path='/contact' element={<Contact/>}/>
      <Route exact path='/about' element={<About/>}/>
      <Route exact path='/register' element={<Register/>}/>
      <Route exact path='/login' element={<Login/>}/>
     
    </Routes>
    </>
  );
}

export default App;
