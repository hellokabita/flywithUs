import axios from "axios"
import { useEffect, useState } from "react"
import('./packages.css')


function Packages(){

    const [data, setData]= useState([])

    useEffect(()=>{
        axios.get('http://localhost:5000/api/services')
        .then(res => {
            console.log(res.data)
            setData(res.data.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[])

    return (
        <div className='flex'>
            {
                data.length > 0 ?
                  data.map((serviceItem, serviceIndex)=> {
                  
                    return (
                      
                        <div className='card'>
                            <div className="title">{serviceItem ?.title}</div>
                            <div className="desc">{serviceItem ?.description}</div>

                        </div>
                        
                    )
                  })
                  : 'No data found'
            }
        </div>
    )
}

export default Packages