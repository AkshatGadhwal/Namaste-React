import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div style={{display: 'flex'}}> 
        <div>
            <img src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-marilyn-scott-0.png" alt="Spotify Logo" width="50px" height="50px"/>
        </div>
        <div style={{display:'flex'}}>
            <button style={{margin: '10px', border:'none'}}>
                <Link to="/">Home</Link>
            </button>
            <button style={{margin: '10px', border:'none'}}>
                <Link to="/about">About</Link>
            </button>
        </div>
    </div>
  )
}

export default Header