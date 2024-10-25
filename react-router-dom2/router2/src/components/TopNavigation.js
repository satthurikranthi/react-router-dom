import React from 'react'
import { Link } from 'react-router-dom'

function TopNavigation() {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/tasks">Tasks</Link>
        <Link to="/leaves">Leaves</Link>
        <Link to="/editprofile">Editprofile</Link>
        <Link to="/signup">Signup</Link>
       
       
        
        
      
      

    </nav>
  )
}

export default TopNavigation