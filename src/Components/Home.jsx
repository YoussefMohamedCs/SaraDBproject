import React, { useContext, useEffect, useState } from 'react'
import { IoClose } from "react-icons/io5";

import "./Home.css"
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
import { userContext } from '../Context/UserName'
import { AuthContext } from '../Context/AuthContext'
import ReactPlayer from 'react-player'
export default function Home() {
    const {setToken} = useContext(AuthContext)
    const [vidOpen , setVideOpen] = useState(false)
    const navigate = useNavigate()
    const [isOpen , setOpen] = useState(false)
    const [courseURL , setURL] = useState("")
    const handleLogout = ()=>{
localStorage.removeItem("token");
localStorage.removeItem("userName");
setToken("")
navigate('/signin')
    }
    const {userName} = useContext(userContext)
    const [products , setProducts] = useState([])
useEffect(()=>{
    axios.get("./Courses.json")
    .then((res)=> setProducts(res?.data))


} , [])
const {addToProduct} = useContext(CartContext)
  return (
    <>
    <div className='w-100 p-2 '>
        <div className="container-lg">
            <div className="row">
            <div className=" col-4 col-lg-4  d-flex align-items-center justify-content-center ">
                    <h2 className='name'>hello {userName}</h2>
            </div>
            <div className="col-4 col-lg-4  d-flex align-items-center justify-content-center ">
            <Link to={"/"} style={{textDecoration:"none" , color:"#000" , fontSize:"40px"}}>Home</Link>

            </div>
            <div className="col-4 col-lg-4 d-flex align-items-center justify-content-center ">
            <h2 onClick={handleLogout} style={{cursor:"pointer"}} className='m-0 '> log out</h2>
            </div>
        </div>
        </div>
    
{/* <Link to={"cart"} style={{textDecoration:"none" , color:"#000" , fontSize:"40px"}}>cart</Link> */}

    </div>
    <div className="mainSection">
        <div className="container-lg">
            <div className="row">
                {products.map((e)=>{
                    return(
                        <div className='col-lg-4 mb-4'>
                            <div className="card">
                                <div className="card-body">
                                  <ReactPlayer url={e.courseURL} width={"100%"} light={e.coursePHOTO} onReady={()=> {setURL(e.courseURL);  setVideOpen((e)=> !e)}} />
                                </div>
                                <div className="card-text p-2 d-flex justify-content-center ">
<button className='watchCourse' onClick={()=> {setURL(e.courseURL);  setVideOpen((e)=> !e)}}>watch course</button>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>







    </div>

{ vidOpen  ? 
  <div className='lightBox'>
    <div className='Box'>
    <IoClose size={"50px"}  className='buttonClose' onClick={()=> setVideOpen((e)=> !e)}/>
        <div className="container-lg">
            <div className="row">
                <div className="col-lg-10 d-flex align-items-center p-2">
                <ReactPlayer url={courseURL} width={"100%"} height={"570px"}  controls={"true"}/>
                </div>
                <div className="col-lg-2 d-flex align-items-center justify-content-center ">
                    <button className='watchCourse'>Go To Quiz !</button>
                </div>
            </div>
        </div>

    </div>
</div>  
: null }
  
    

    </>
  )
}
