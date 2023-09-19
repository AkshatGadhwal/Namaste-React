import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { useRestaurant } from '../utils/useRestaurant';


export const Restaurant = () => {
    const {resId} = useParams();
    const restaurant = useRestaurant(resId);

    if(!restaurant){
        return <div>Loading...</div>
    }

    const { name, cuisines, costForTwoMessage } =
    restaurant?.cards[0]?.card?.card?.info;
    const { itemCards } =
    restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    return (
        <div>
            <h1>{name}</h1>
            <h2>{cuisines.join(', ')}</h2>
            <h2>{costForTwoMessage}</h2>
            <h4>Menu:</h4>
            <ul>
                {
                    itemCards.map((item) => (
                        <li key={item?.card?.info?.id}>
                            <p>{item?.card?.info?.name} - {" Rs."}
                            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
