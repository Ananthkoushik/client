import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assests/img.png'
import search  from '/Users/ananthkoushik/Desktop/stackoverflow/client/src/assests/icons8-search.svg'
import Avatar from '../Avatar/Avatar'
import Button from '../Button/Button'
import './Navbar.css'

const Navbar = () => {

    var User = null
  return (
    <nav>
        <div className = "nav">
            <Link to = "/" className = "nav-item nav-btn">
                <img className='logo' src={logo} alt="" width="180"/>
            </Link>
            <Link to = '/' className = 'nav-item nav-btn'>About</Link>
            <Link to = '/' className = 'nav-item nav-btn'>Products</Link>
            <Link to = '/' className = 'nav-item nav-btn'>For Iteams</Link>
        
            <form>
                <input type="text" placeholder = "search...."/>
                <img src={search} alt="" width="18" className='search-icon' />
            </form>

            {User === null ?
                
                    <Link to='/Auth' className='nav-item nav-links'>log in</Link>:
                    <>  
                        <Avatar backgroundColor="blue" px='10px'py='7px'borderRadius="50%"color="white"><Link to='/User'style={{color:"white",textDecoration:"none"}}>A</Link></Avatar>
                        <button className='nav-item nav-link'>Log out</button>
                    </>
            }
        
        </div>
    </nav>
        )
    }

export default Navbar