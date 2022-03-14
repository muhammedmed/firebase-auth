import React from 'react'
import {Link} from 'react-router-dom'
const Home = (props) => {
  return (
    <div>
        <div className="home">
            <h1>
                <Link to="/login" style={{textDecoration:"none", color:"red"}} >Logout</Link>
            </h1>
            <h2>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2>
        </div>
        
    </div>
  )
}

export default Home