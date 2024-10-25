import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className="App">
        <form>
            <h2>Login</h2>
            <div>
                <label>Email</label>
                <input></input>
            </div>
            <div>
                <label>Password</label>
                <input></input>
            </div>
            <div>
                <button>Login</button>
                <Link to="/home">Home</Link>
            </div>
        </form>
        <br></br>
        <br></br>
        <Link to="/Signup">Signup</Link>
    </div>
  )
}

export default Login