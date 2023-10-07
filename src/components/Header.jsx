import React from 'react'
import { Link } from 'react-router-dom'
import { ActivePageTitle } from './ActivePageTitle'
import { useShowOnlineStatus } from '../utils/useShowOnlineStatus';
import { useTheme } from '../utils/useTheme';   

const Header = () => {
    const activeTabTitle = ActivePageTitle();
    const onlineStatus = useShowOnlineStatus();
    const [theme, toggleTheme] = useTheme();
  return (
    <div className='flex justify-between h-20 py-3 mb-5'>
        <div className='align-middle justify-items-center pt-2'><h1 className='text-4xl ms-4'>{activeTabTitle} Page</h1></div>
        <div className='flex justify-end gap-4'> 
            <div className='m-1.5 '>
                <img src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-marilyn-scott-0.png" alt="Spotify Logo" width="45px" height="45px"/>
            </div>
            <h3 className='mt-4'>{onlineStatus? "Online" : "Offline"}: {onlineStatus? '✅' : '⭕'}</h3>
            <h3 className='mt-4'>
                <button onClick={() => toggleTheme()}>
                    {'💡'}
                </button>
            </h3>
            {/* create a toggle switch for enablinig light dark mode */}
            <div className='flex'>
                <button className='m-2 rounded-md bg-blue-800  dark:bg-green-900 px-2'>
                    <Link to="/" className='no-underline dark:text-black text-white' >Home</Link>
                </button>
                <button className='m-2 rounded-md  bg-blue-800  dark:bg-green-900 px-2'>
                    <Link to="/about" className='no-underline dark:text-black text-white'>About</Link>
                </button>
                <button className='m-2 rounded-md  bg-blue-800  dark:bg-green-900 px-2'>
                    <Link to="/chatgpt" className='no-underline dark:text-black text-white'>ChatGPT</Link>
                </button>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export const HeaderWithOnlineOfflineStatus = (Header) => {
    return (props) => {
        const onlineStatus = useShowOnlineStatus();
        return (
            <div className={onlineStatus ? "dark:bg-green-900 bg-green-50" : "dark:bg-red-900 bg-red-50"}>
                <Header {...props}/>
            </div>
        )
    }
}

export default Header