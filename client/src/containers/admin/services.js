import axios from 'axios';
import { setNestedObjectValues } from 'formik';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './services.css'




function Services(){
//     const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const[desc, setDesc] = useState('')
//     // const [image, setImage]=useState('')



// useEffect(()=>{
//     // if(!localStorage.getItem('token')){
//     //     navigate('/home')
//     // }
// },[])

const handleChange=(e)=>{
    setTitle(e.target.value)
}
const handleChangeDesc =(e)=>{
    setDesc(e.target.value)
}

const handleClick=()=>{
    // const formData =new FormData()
    // formData.append('title', title)
    // formData.append('discription', desc)
    // formData.append('image', image)

    console.log(title,desc,19)


    axios.post('http://localhost:5000/api/services',
        // formData,
    
    {
        // headers:{'Authorization': localstorage.getItem('token')}

        title:title,
        description:desc,
    })
    .then((res)=>{
        console.log(res.data)

        // if(res.data.code === 403 && res.data.massage ==='Token Expire'){
        //     localStorage.setItem('token',null)
        // }
    })
    .catch(err=>{
        console.log(err,  'err')
    })
}
 
return(

    <div className='admin-card'>
        <input value={title} onChange={handleChange} placeholder='title' className='input-admin'/>  <br/>
        <input value={desc} onChange={handleChangeDesc} placeholder='description' className='input-admin'/>  <br/>
        {/* <input onChange={(e)=>setImage(e.target.files)}  type='file'/> */}
        
        <button
        onClick={handleClick}
        className='add-btn'>
            ADD SERVICES</button>    
    </div>
)
}

export default Services
