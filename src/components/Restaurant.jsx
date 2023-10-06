import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { useRestaurant } from '../utils/useRestaurant';
import { Accordion } from './Accordion';


export const Restaurant = () => {
    const {resId} = useParams();
    const [openIndex, setOpenIndex] = useState(null);
    const [restaurant,loading] = useRestaurant(resId);

    console.log(restaurant);

    if(loading){
        return <div>Loading...</div>
    }

    const { name, cuisines, costForTwoMessage } =
    restaurant?.cards[0]?.card?.card?.info;
    const { itemCards } =
    restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    const categories = restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    return (
        <div className='justify-center text-center'>
            <h2 className='text-3xl'>{name}</h2>
            <p>{cuisines.join(', ') } - { costForTwoMessage}</p>
            <div className='text-center justify-center'>
                <ul className='md:w-10/12 sm:w-11/12 lg:w-9/12 xl:w-6/12 m-auto p-2'>
                    {
                        categories.map((category,index) => (
                            category?.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" && (
                                <li key={index}>
                                    <Accordion data={category?.card?.card} show={openIndex === index} setShow={() => openIndex === index ?setOpenIndex(null) : setOpenIndex(index)}/>
                                </li>
                            )
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
