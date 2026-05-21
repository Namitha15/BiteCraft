import React from "react";
import resObj from "../utils/mockData.js";
import RestaturantCard from "./ResturantCard";

const Body = () => {
  return (
    <div className="res-container">
      {resObj.restaurants.map((resturant) => (
        <RestaturantCard key={resturant.id} resData={resturant.info} />
      ))}
    </div>
  );
};
export default Body;
