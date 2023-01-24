import {useEffect, useState} from "react"
import axios from "axios"


const Carousel =()=>{
    const [data, setData]= useState([])
    const [index, setIndex]= useState(0)

    useEffect(()=>{
        setTimeout(()=>{
            setIndex=(index< data.length-1 ? index + 1 : 0)
        },2000)
    },[])


    useEffect(()=>{
        axios.get('http://localhost:5000/api/slider')
        .then(res => {
            console.log(res.data)
            setData(res.data.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[])

    return (
        <div>
            <img src={data[index]} width='100%' height={50} />
            {/* {
                data.length > 0 &&
                data.map((imgItem, imgIndex)=>{
                    return(
                        <img src={imgItem} width={10}/>
                    )
                })
            } */}
        </div>
    )
}

export default Carousel