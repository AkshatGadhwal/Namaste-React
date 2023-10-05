import React from 'react'
import { Link } from 'react-router-dom'
import { ActivePageTitle } from './ActivePageTitle'
import { useShowOnlineStatus } from '../utils/useShowOnlineStatus';

const Header = () => {
    const activeTabTitle = ActivePageTitle();
    const onlineStatus = useShowOnlineStatus();
  return (
    <div className='flex justify-between h-14'>
        <div><h1 className='text-4xl '>{activeTabTitle}</h1></div>
        <div className='flex justify-end gap-4'> 
            <div className='m-1.5 '>
                <img src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-marilyn-scott-0.png" alt="Spotify Logo" width="45px" height="45px"/>
            </div>
            <h3 className='mt-4'>Online: {onlineStatus? '✅' : '⭕'}</h3>
            {/* create a toggle switch for enablinig light dark mode */}
            <div className='flex'>
                <button className='m-2 rounded-md   bg-green-900 px-2'>
                    <Link to="/" className='no-underline' >Home</Link>
                </button>
                <button className='m-2 rounded-md bg-green-900 px-2'>
                    <Link to="/about" className='no-underline text-inherit'>About</Link>
                </button>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default Header