import React, { useState, useEffect} from 'react'
import { RESTAURANT_LIST_URL } from '../utils/constants';
import {Link} from 'react-router-dom';

const RestaurantList = () => {

    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const res = await fetch(RESTAURANT_LIST_URL);
            const data = await res.json();
            const data1 = await data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            const data2 = data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            const data3 = data1 && data2? data1.concat(data2) : data1? data1 : data2;
            setRestaurants(data1);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='dark:bg-black dark:text-white'>
            <h1 className='text-3xl ms-4'>Restaurant List</h1>
            {
                restaurants && restaurants.length > 0 ? (
                    <ul className='mx-2 mt-6 w-11/12 ms-5'>
                        {
                            restaurants.map((restaurant) => (
                                <li className='h-26' key={restaurant["info"]?.id}>
                                    <Link to={'/restaurant/'+restaurant["info"]?.id} >
                                        <div className='border-black dark:border-gray-500   rounded-sm border-solid h-20 border-2 m-4 p-3'>
                                            <h2 className='text-blue-600'>Name: {restaurant["info"]?.name}</h2>
                                            <p>Rating: {restaurant["info"]?.avgRating}</p>
                                        </div>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                ) : (
                    <div className='dark:bg-black dark:text-white ms-8 mt-8 text-2xl justify-center align-middle items-center justify-items-center'>Loading...</div>
                )
            }
        </div>
    )
}

export default RestaurantList