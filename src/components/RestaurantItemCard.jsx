import React from "react";
import { CDN_URL } from "../utils/constants";

export const RestaurantItemCard = ({data}) => {
    console.log(data);
    const {name, imageId, price, defaultPrice, description} = data?.card?.info;
    return (
        <div className="flex m-5 border-solid dark:border-gray-500 border-gray-400  border-b">
            <div className="text-left">
                <div className="flex">
                    <h3>{name}</h3>
                    <h5>- ₹ {price/100 || defaultPrice/100}</h5>
                </div>
                <h5 className="text-sm">{description}</h5>
            </div>
            <div className="justify-center justify-items-center items-center pb-1">
                <div className="absolute bg-black px-1 rounded-sm">
                    <button className=" text-white">+ Add</button>
                </div>
                <img src={CDN_URL + imageId} c alt={name} />
            </div>
        </div>
    )
}