import React from 'react'
import video from '../background/video1.mp4'
import './home.scss'

  const Home=()=> {
  return (
   <>
    <section className='home'>
      <div className='overlay'>
        <video src={video} muted autoPlay loop type="video/mp4"></video>

        <div classNmae="homeContent container">
          <div className="textDiv">
            
          </div>
        </div>
      </div>
    </section>
   </>
  );
}

export default Home;