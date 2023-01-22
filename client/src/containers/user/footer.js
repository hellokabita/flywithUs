import React from "react";
import {Link} from 'react-router-dom'
import('./footer.css')


const Footer =()=>{
    return (
        <div className='footer-card'>
            <diV>
                <a className='a-link' href="https://www.facebook.com/">Facebook</a>
                <a className='a-link' href="https://www.google.com/">Google</a>
                <a className='a-link' href="https://www.instagram.com/">Instagram</a>
                <a className='a-link' href="https://www.twitter.com/">Twitter</a>

            </diV>

            <div>
                <Link className='a-link' to='/about'>About</Link>
                <Link className='a-link' to='/contact'>Contact</Link>
                <Link className='a-link' to='/home'>Home</Link>

            </div>
           
        </div>
    )
}


export default Footer