import React from 'react'
import { Link } from 'react-router-dom'
import { ActivePageTitle } from './ActivePageTitle'
import { useShowOnlineStatus } from '../utils/useShowOnlineStatus';

const Header = () => {
    const activeTabTitle = ActivePageTitle();
    const onlineStatus = useShowOnlineStatus();
  return (
    <div style={{display:'flex', justifyContent:"space-between", height:"60px"}}>
        <div><h1>{activeTabTitle}</h1></div>
        <div style={{display: 'flex', justifyContent:"flex-end"}}> 
            <div style={{ margin:'10px'}}>
                <img src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-marilyn-scott-0.png" alt="Spotify Logo" width="45px" height="45px"/>
            </div>
            <h3 >Status: {onlineStatus? '✅' : '⭕'}</h3>
            <div style={{display:'flex',}}>
                <button style={{margin: '15px', border:'none', borderRadius:'3px'}}>
                    <Link to="/" style={{textDecoration:'none', color: 'inherit'}} >Home</Link>
                </button>
                <button style={{margin: '15px', border:'none', borderRadius:'3px'}}>
                    <Link to="/about" style={{textDecoration:'none', color: 'inherit'}}>About</Link>
                </button>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default Header