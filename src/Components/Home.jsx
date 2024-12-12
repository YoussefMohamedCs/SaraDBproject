import React, { useContext, useEffect, useState } from 'react'
import { IoClose } from "react-icons/io5";
import  { useRef } from 'react';
// Import Swiper React components
// Import Swiper styles
import 'swiper/css';
import { Swiper, SwiperSlide , useSwiper } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';

import "./Home.css"
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
import { userContext } from '../Context/UserName'
import { AuthContext } from '../Context/AuthContext'
import ReactPlayer from 'react-player'
export default function Home() {

    const swiper = useSwiper();
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
    <IoClose size={"50px"}  className='buttonClose' onClick={()=> setVideOpen((e)=>!e)}/>
        <div className="container-lg">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <div className="row">
            <SwiperSlide className='d-flex'>
                <div className="col-lg-10 d-flex align-items-center p-2">
                <ReactPlayer url={courseURL} width={"100%"} height={"570px"}  controls={"true"}/>
                </div>
                <div className="col-lg-2 d-flex align-items-center justify-content-center ">
                    <button className='watchCourse'>Go To Quiz !</button>
                </div>
                </SwiperSlide>
                <SwiperSlide className='d-flex'>
                <div className="col-lg-10 d-flex flex-column align-items-start p-2 justify-content-center" style={{height:"550px"}}>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam aut tempore impedit sed porro consectetur rem id delectus vel commodi!</p>
                <form className='d-flex flex-column' >
                    <div className='d-flex mb-3' style={{gap:"10px"}}>
                    <label htmlFor="">input 1</label>
                    <input type="radio" value={"input 1"} />
                    </div>
                    <div className='d-flex mb-3' style={{gap:"10px"}}>
                    <label htmlFor="">input 1</label>
                    <input type="radio" value={"input 1"} />
                    </div>
                    <div className='d-flex mb-3' style={{gap:"10px"}}>
                    <label htmlFor="">input 1</label>
                    <input type="radio" value={"input 1"} />
                    </div>
                    <div className='d-flex mb-3' style={{gap:"10px"}}>
                    <label htmlFor="">input 1</label>
                    <input type="radio" value={"input 1"} />
                    </div>
                    
                  
                </form>
                </div>
                <div className="col-lg-2 d-flex align-items-center justify-content-center ">
                    <button className='watchCourse' >Next !</button>
                </div>
                </SwiperSlide>
                <SwiperSlide className='d-flex'>
                <div className="col-lg-10 d-flex flex-column align-items-start p-2 justify-content-center" style={{height:"550px"}}>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam aut tempore impedit sed porro consectetur rem id delectus vel commodi!</p>
                <form className='d-flex flex-column' >
                    <div className='d-flex mb-3' style={{gap:"10px"}}>
                    <label htmlFor="">input 1</label>
                    <input type="radio" value={"input 1"} />
                    </div>
                    <div className='d-flex mb-3' style={{gap:"10px"}}>
                    <label htmlFor="">input 1</label>
                    <input type="radio" value={"input 1"} />
                    </div>
                    <div className='d-flex mb-3' style={{gap:"10px"}}>
                    <label htmlFor="">input 1</label>
                    <input type="radio" value={"input 1"} />
                    </div>
                    <div className='d-flex mb-3' style={{gap:"10px"}}>
                    <label htmlFor="">input 1</label>
                    <input type="radio" value={"input 1"} />
                    </div>
                    
                  
                </form>
                </div>
                <div className="col-lg-2 d-flex align-items-center justify-content-center ">
                    <button className='watchCourse' >Next !</button>
                </div>
                </SwiperSlide>
                </div>
                </Swiper>
            
        </div>

    </div>
</div>  
: null }


<footer class="footer_section">
    <div class="container">
      <div class="row">
        <div class="col-md-4 footer-col">
          <div class="footer_contact">
            <h4>
              Contact Us
            </h4>
            <div class="contact_link_box">
              <a href="">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                <span>
                  Location
                </span>
              </a>
              <a href="">
                <i class="fa fa-phone" aria-hidden="true"></i>
                <span>
                  Call +01 1234567890
                </span>
              </a>
              <a href="">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <span>
                  demo@gmail.com
                </span>
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-4 footer-col">
          <div class="footer_detail">
            <a href="" class="footer-logo">
              Feane
            </a>
            <p>
              Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with
            </p>
            <div class="footer_social">
              <a href="">
                <i class="fa fa-facebook" aria-hidden="true"></i>
              </a>
              <a href="">
                <i class="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="">
                <i class="fa fa-linkedin" aria-hidden="true"></i>
              </a>
              <a href="">
                <i class="fa fa-instagram" aria-hidden="true"></i>
              </a>
              <a href="">
                <i class="fa fa-pinterest" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-4 footer-col">
          <h4>
            Opening Hours
          </h4>
          <p>
            Everyday
          </p>
          <p>
            10.00 Am -10.00 Pm
          </p>
        </div>
      </div>
      <div class="footer-info">
        <p>
          &copy; <span id="displayYear"></span> All Rights Reserved By
          <a href="https://html.design/">Free Html Templates</a><br /><br />
          &copy; <span id="displayYear"></span> Distributed By
          <a href="https://themewagon.com/" target="_blank">ThemeWagon</a>
        </p>
      </div>
    </div>
  </footer>
  
    

    </>
  )
}
