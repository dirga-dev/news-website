import React from 'react'
import { Link } from 'react-router-dom'

function SidebarLeft() {
  return (
      <div className='sidebar-left'>
        <div className='sidebar-content'>
          <div className='sidebar-content-first-row'>
            <Link to="/all" className='page-content'>All</Link>
            <Link to="/" className='page-content'>Indonesia</Link>
          </div>
          <div className='sidebar-content-second-row'>
            <Link to="/programming" className='page-content'>Programming</Link>
            <Link to="/covid19" className='page-content'>Covid-19</Link>
          </div>
        </div>
    </div>
  )
}

export default SidebarLeft