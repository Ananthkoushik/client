import React from 'react'
import '../../App.css'
import LeftSidebar from '../../Component/LeftSidebar/LeftSidebar'
import RightSidebar from '../../Component/RightSidebar/RightSidebar'
import HomeMainbar from '../../Component/HomeMainbar/HomeMainbar'
 
const Home = () => {
  return (
    <div className='home-container-1'>
      <LeftSidebar/>
      <div className='home-container-2'>
        <HomeMainbar/>
        <RightSidebar/>

      </div>
        
    </div>
  )
}
export default Home