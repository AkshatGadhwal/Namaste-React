import React from 'react';
import RestaurantList from './RestaurantList';
import { useShowOnlineStatus } from '../utils/useShowOnlineStatus';

export const Home = () => {
    const onlineStatus = useShowOnlineStatus();
    return (
        <div className='dark:bg-black dark:text-white bg-white text-black'>
            {onlineStatus ? <RestaurantList/> : <h3>Seems like you're offline, please check your internet connection!!!</h3>}
        </div>
    );
}