import React from 'react'
import video from '../../background/video1.mp4'
import './packages.css'
import {GrLocation} from 'react-icons/gr'
import {HiFilter} from 'react-icons/hi'

  const Packages=()=> {
  return (
   
    <section className='home'>
      <div className='overlay'></div>
        {/* <video src={video} muted autoPlay loop type="video/mp4"></video> */}

        <div className="homeContent container">
          <div className="textDiv">

            <span className='smallText'>
              our Packages
            </span>

            <h1 className='homeTitle'>
              Search Your Destination
            </h1>
          </div>

          <div className='carDiv grid'>
            <div className='destinationInput'>
              <label htmlFor='city'>Search Your destination:</label>
              <div className='input flex'>
              <input type='text' placeholder='Enter name here...'/>
              <GrLocation className='icon'/>
              </div>
            </div>

             <div className='dateInput'> 
              <label htmlFor='date'>Select your date:</label>
              <div className='input flex'>
              <input type='date' />
              </div>
            </div>

            <div className='priceInput'>
             <div className='label_total flex'>
              <label htmlFor='price'>Max price:</label> 
              <h3 className='total'>$5000</h3>
             </div>
             <div className='input flex'>
              <input type='range' max='5000' min='1000'/>
             </div>
            </div>

            <div className='button'>
              <HiFilter className='icon'/>
              <span>MORE FILTERS</span>
            </div>
            
       </div>
        </div>
          
         
    </section>
   
  );
}

export default Packages;