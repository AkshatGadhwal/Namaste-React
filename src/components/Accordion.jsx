import React from 'react';
import { Restaurant } from './Restaurant';
import { RestaurantItemCard } from './RestaurantItemCard';
export const Accordion = ({data, show, setShow}) => {
    return (
        <div >
            <div onClick={setShow} className='dark:bg-gray-600 bg-gray-600 mb-4 shadow-sm rounded-sm p-3 justify-between dark:text-white flex'>
                <p>{data?.title}</p>
                <p>{show ? '-' : '+'}</p>
            </div>
            {show && <div className='dark:bg-gray-900 bg-gray-100 pb-1'>
                {
                    data?.itemCards.map((itemCard,index) => (
                        <RestaurantItemCard key={index} data={itemCard}/>
                    ))
                }
            </div>}
        </div>
    )
}

