import React, { useEffect, useState } from "react";
import resObj from "../utils/mockData.js";
import RestaturantCard from "./ResturantCard";

const Body = () => {
  // Master copy of all restaurants (never mutated directly)
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  // The actual list rendered on screen
  const [filteredResturant, setFilteredResturant] = useState([]);

  useEffect(() => {
    featchData();
  }, []);

  const featchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.97530&lng=77.59100&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await data.json();
    console.log(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants,
    );

    setListOfRestaurants(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants,
    );
    setFilteredResturant(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants,
    );
  };

  return (
    <div className="body">
      <div className="filter-search">
        <div
          className="filter-btn"
          onClick={() => {
            // Filter using the master copy, but update the filtered state.
            // Using > 4.5 because all restaurants in mock data are > 4.0.
            const filtered = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4,
            );
            console.log(filtered);

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
