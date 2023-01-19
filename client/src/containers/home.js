import React from 'react'
// import video from '../background/video2.mp4'
import './home.css'

  const Home=()=> {
  return (
   <>
    <section className='home'>
      <div className='overlay'>
        {/* <video src={video} muted autoPlay looptype="video/mp4"></video> */}

        <div classNmae="homeContent container">
          <div className="textDiv">
            <span className="smallText">
              Our Packages
            </span>
            <h1 className="homeTitle">Search your Holiday</h1>
          </div>
        </div>
      </div>
    </section>
   </>
  );
}

export default Home;