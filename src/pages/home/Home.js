
import React from 'react'
import Sidebar from '../../component/sidebar/Sidebar'
import "./home.scss";
import Navbar from "../../component/navbar/Navbar"



export default function Home() {
  return (
    <div className='home'>
    <Sidebar/>
   <div className='homeContainer'>
    <Navbar/>
    home container
    </div> 
    </div>
  )
}
