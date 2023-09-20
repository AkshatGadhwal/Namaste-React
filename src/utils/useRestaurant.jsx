import { RESTAURANT_DETAILS_URL } from './constants';
import { useFetchData } from './useFetchData';

export const useRestaurant = (resId) => {
    const {data,loading} = useFetchData(RESTAURANT_DETAILS_URL + resId);
    return {restaurant: data?.data, loading};
}