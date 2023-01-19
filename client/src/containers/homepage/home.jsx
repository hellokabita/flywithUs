import React from 'react'
import video from '../../background/video1.mp4'
import './home.css'
import { useNavigate } from 'react-router-dom'


  const Home=()=> {
    const navigate = useNavigate()
  return (
   
  <>
        <video src={video} muted autoPlay loop type="video/mp4"></video>

        <div className="homeContent container">

            <h1 className='homeTitle'>
             fly with Us 
            </h1>
            <div>
            <button className='button' on onClick={()=>navigate('/login')}>LOGIN</button>

            </div>
          
 
          </div>
         



    
          
         
    </>
   
  );
}

export default Home;