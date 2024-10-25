import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div>
        <h1>Page Not Found</h1>
       <Link to="/">Go to Login</Link>
    </div>
  )
}

export default PageNotFound