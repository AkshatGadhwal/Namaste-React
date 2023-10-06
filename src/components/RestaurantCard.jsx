import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData?.data;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>₹{costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export const GoodRestaurantCard = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="dark:bg-orange-400 dark:text-white bg-black text-white absolute mx-1 p-1">Good</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
} 

export default RestaurantCard;