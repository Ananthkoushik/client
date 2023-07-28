import React from 'react'
import './RightSidebar.css'
import Widget from './Widget'
import WidgetTages from './WidgetTages'

const RightSidebar = () => {
  return (
    <aside className='right-sidebar'>
        <Widget/>
        <WidgetTages/>
    </aside>
  )
}

export default RightSidebar