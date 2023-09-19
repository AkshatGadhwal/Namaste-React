import {useEffect, useState} from 'react';
import { RESTAURANT_DETAILS_URL } from './constants';

export const useRestaurant = (resId) => {
    const [restInfo, setRestInfo] = useState(null);
    useEffect(() => {
        fetchData();
    },[]);
    const fetchData = async () => {
        try {
            const res = await fetch(RESTAURANT_DETAILS_URL + resId);
            const data = await res.json();
            setRestInfo(data?.data);
        } catch (error) {
            console.log(error);
        }
    }
    return restInfo;
}