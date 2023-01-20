import React from "react";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'





const Dashboard = ()=>{
    const navigate = useNavigate()

    const {name} = useSelector(state=> state.user)
    return(
        <>
            <div style={{
             backgroundImage: "url(/user.jpg)",
             height:'100vh',
             marginTop:'-70px',
             fontSize:'50px',
             backgroundSize: 'cover',
             backgroundRepeat: 'no-repeat',
            }}>
                <div className="homeContent container">
            <h4>welcome, {name}</h4>
            <h1 className="homeTitle">BOOK YOUR JOURNEY WITH US</h1>

            </div>
            <div>
            <button className='button' on onClick={()=>navigate('/packages')}>BOOK NOW</button>

            </div>
            </div>

            
        </>
    )
}
export default Dashboard
