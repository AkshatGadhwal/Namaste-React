import React from 'react'
import { useState, useEffect } from 'react';

const RestaurantList = () => {

    const [restaurants, setRestaurants] = useState([]);

    const fetchData = async () => {
        try {
            const res = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
            const data = await res.json();
            const data1 = data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            const data2 = data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            
            const data3 = data1 && data2? data1.concat(data2) : data1? data1 : data2;
            console.log("data3",data3);
            console.log("data1", data1);
            setRestaurants(data1);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <h1>Restaurant List</h1>
            {
                restaurants.length > 0 ? (
                    <ul>
                        {
                            restaurants.map((restaurant) => (
                                <li key={restaurant["info"]?.id}>
                                    <h2>name: {restaurant["info"]?.name}</h2>
                                    <p>rating:{restaurant["info"]?.avgRating}</p>
                                </li>
                            ))
                        }
                    </ul>
                ) : (
                    <div>No Restaurants</div>
                )
            }
        </div>
    )
}

export default RestaurantList