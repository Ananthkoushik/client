import React from 'react'
import './RightSidebar.css'
import comment from '../../assests/comments.png'
import pen from '../../assests/pen.png' 
import blacklogo from '../../assests/blacklogo.png'
const Widget = () => {
  return (
    <div className='widget'>
        <h4>The Overflow Blog</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <img src={pen} alt="pen" width='18'/> 
                <p>Observability is key to the future of software (and vour DevOps career)</p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={pen} alt="pen" width='18'/> 
                <p>Podcast 374: How valuable is your screen names</p>
            </div>
        </div>
        <h4>Featured of Mate</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <img src={comment} alt="coments" width='18'/> 
                <p>Review queue workflow - Final release.... </p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={comment} alt="logo" width='18'/> 
                <p>Please welcome Valued Associates: #959 - V2Blast #959 - SpencerG</p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={blacklogo} alt="logo" width='18'/> 
                <p>Outdated Answers: accepted answer is now unpinned on Stack Overflow</p>
            </div>
        </div>
        <h4>Hot Meta Posts</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <p>38</p> 
                <p> Why was this snam flag declined. vet the guestion marked as snam</p>
            </div>
            <div className='right-sidebar-div-2'>
                <p>20</p> 
                <p> What is the best course of action when a user has high enough rep to...</p>
            </div>
            <div className='right-sidebar-div-2'>
                <p>14</p> 
                <p>Is a ink to the How to ask" helo nage a useful comment?</p>
            </div>
        </div>
        
    </div>    
  )
}

export default Widget