import React from 'react'
import Sidebar from '../../component/sidebar/Sidebar'
import "./home.scss"
export default function Home() {
  return (
    <div className='home'>
    <Sidebar/>
   <div className='homeContainer'>Container</div> 
    </div>
  )
}
