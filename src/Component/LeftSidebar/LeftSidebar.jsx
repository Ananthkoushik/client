import React from 'react'
import "/Users/ananthkoushik/Desktop/stackoverflow/client/src/Component/LeftSidebar/LeftSidebar.css"
import { NavLink } from 'react-router-dom'
import Globe from '/Users/ananthkoushik/Desktop/stackoverflow/client/src/assests/globe.png'

const LeftSidebar = () => {
  return (
    <div className='left-sidebar'>
      <nav className='side-nav'>
        <NavLink to='/' className='side-nav-links' activeClass='active'>
          <p>Home</p>
        </NavLink>

        <div className='side-nav-div'>
          <div><p>PUBLIC</p></div>
          <NavLink to='/Questions'className='side-nav-links' activeClass='active' style={{paddingLeft: '20px'}}>
            <img src={Globe} alt="" style={{width: '9%'}}/>
            <p style={{paddingLeft: "10px" }}>Questions </p>
          </NavLink>

          <NavLink to='/Tags' className='side-nav-links' style={{paddingLeft: '40px'}}>
            <p>Tags</p>
          </NavLink>
          
          <NavLink to='/Tags' className='side-nav-links' style={{paddingLeft: '40px'}}>
            <p>Users</p>
          </NavLink>

        </div>
        </nav>

    </div>
  )
}
export default LeftSidebar