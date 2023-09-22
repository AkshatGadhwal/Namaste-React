import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { useRestaurant } from '../utils/useRestaurant';


export const Restaurant = () => {
    const {resId} = useParams();
    const {restaurant,loading} = useRestaurant(resId);

    if(loading){
        return <div>Loading...</div>
    }

    const { name, cuisines, costForTwoMessage } =
    restaurant?.cards[0]?.card?.card?.info;
    const { itemCards } =
    restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    return (
        <div>
            <h2 style={{color:'blue'}}>{name}</h2>
            <h3>{cuisines.join(', ')}</h3>
            <h3>{costForTwoMessage}</h3>
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
