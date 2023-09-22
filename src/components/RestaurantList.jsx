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
        <div>
            <h1>Restaurant List</h1>
            {
                restaurants && restaurants.length > 0 ? (
                    <ul>
                        {
                            restaurants.map((restaurant) => (
                                <li key={restaurant["info"]?.id}>
                                    <Link to={'/restaurant/'+restaurant["info"]?.id} style={{textDecoration:'none', }}>
                                        <div style={{border:'1px solid black', marginBottom:'10px', padding:'5px'}}>
                                            <h2>Name: {restaurant["info"]?.name}</h2>
                                            <p>Rating: {restaurant["info"]?.avgRating}</p>
                                        </div>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                ) : (
                    <div>Loading...</div>
                )
            }
        </div>
    )
}

export default RestaurantList