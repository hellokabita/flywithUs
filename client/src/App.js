import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Navbar from './components/navbar';
import Home from './components/home';
import Contact from './components/contact';
import About from './components/about';
import Signup from './components/signup';
import Login from './components/login';


const App=() => {
  return(
   <>
   <Navbar/>
   <Routes>
     
     
     <Route exact path='/' element={<Home/>}/>
      <Route exact path='/contact' element={<Contact/>}/>
      <Route exact path='/about' element={<About/>}/>
      <Route exact path='/signup' element={<Signup/>}/>
      <Route exact path='/login' element={<Login/>}/>
     
    </Routes>
    </>
  );
}

export default App;
