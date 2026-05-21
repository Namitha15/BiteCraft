import React, { useEffect, useState } from "react";
import resObj from "../utils/mockData.js";
import RestaturantCard from "./ResturantCard";

const Body = () => {
  // Master copy of all restaurants (never mutated directly)
  const [listOfRestaurants, setListOfRestaurants] = useState(
    resObj.restaurants,
  );

  // The actual list rendered on screen
  const [filteredResturant, setFilteredResturant] = useState(
    resObj.restaurants,
  );

  return (
    <div className="body">
      <div className="filter-search">
        <div
          className="filter-btn"
          onClick={() => {
            // Filter using the master copy, but update the filtered state.
            // Using > 4.5 because all restaurants in mock data are > 4.0.
            const filtered = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5,
            );
            setFilteredResturant(filtered);
          }}
        >
          Top Rated Restaurant
        </div>
      </div>
      <div className="res-container">
        {filteredResturant.map((resturant) => (
          <RestaturantCard key={resturant.info.id} resData={resturant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
