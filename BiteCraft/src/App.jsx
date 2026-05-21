import { useState } from "react";
import "./index.css";

const Header = () => {
  return (
    <div className="container">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.magnific.com/free-vector/restaurant-tasty-food-logo-design_460848-10307.jpg?semt=ais_hybrid&w=740&q=80"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

const resObj = {
  restaurants: [
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "187384",
        name: "Blue Tokai Coffee Roasters",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/24/6caf096b-b568-4441-9562-73edd546bb57_187384.JPG",
        locality: "Infantry Road",
        areaName: "Central Bangalore",
        costForTwo: "₹600 for two",
        cuisines: ["Cafe", "Coffee", "Beverages"],
        avgRating: 4.6,
        parentId: "2682",
        avgRatingString: "4.6",
        totalRatingsString: "1.4K+",
        sla: {
          deliveryTime: 29,
          lastMileTravel: 2.2,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "2.2 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-05-21 20:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "Health%20Hub/RX%20BADGE/BADGE2.png",
              description: "EatRight",
            },
            {
              imageId: "newg.png",
              description: "Gourmet",
            },
          ],
        },
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "EatRight",
                    imageId: "Health%20Hub/RX%20BADGE/BADGE2.png",
                    theme: "",
                  },
                },
                {
                  attributes: {
                    description: "Gourmet",
                    imageId: "newg.png",
                    theme: "",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},

        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
    },
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "448012",
        name: "Third Wave Coffee",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/15/19d82b97-333b-4c9c-acf7-6b815e9c7cb2_448012.JPG",
        locality: "Vasanth Nagar",
        areaName: "Vasanth Nagar",
        costForTwo: "₹400 for two",
        cuisines: ["Beverages", "Bakery", "Continental"],
        avgRating: 4.6,
        parentId: "274773",
        avgRatingString: "4.6",
        totalRatingsString: "1.3K+",
        sla: {
          deliveryTime: 23,
          lastMileTravel: 2.1,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "2.1 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-05-22 00:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId:
                "brand_cards/Badges%202026/110_Best%20in%20Coffee%20&%20Tea2026.png",
              description: "Best in Coffee & Tea",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Best in Coffee & Tea",
                    imageId:
                      "brand_cards/Badges%202026/110_Best%20in%20Coffee%20&%20Tea2026.png",
                    theme: "",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹169",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "4.6",
            ratingCount: "764",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-8e46bd75-09fc-4dee-a439-9f96184aae49",
      },
      cta: {
        link: "https://www.swiggy.com/city/bangalore/third-wave-coffee-vasanth-nagar-rest448012",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "920944",
        name: "Bangalore Bagel Shop",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/1/17f155d2-fd98-45aa-ae3e-884096b6c068_920944.jpg",
        locality: "Sivanchetti Gardens ",
        areaName: "Central Bangalore",
        costForTwo: "₹700 for two",
        cuisines: ["sandwich", "Burger", "Fast Food", "Snacks"],
        avgRating: 4.7,
        parentId: "527884",
        avgRatingString: "4.7",
        totalRatingsString: "629",
        sla: {
          deliveryTime: 30,
          lastMileTravel: 3.7,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "3.7 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-05-21 19:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹125 OFF",
          subHeader: "ABOVE ₹799",
          discountTag: "FLAT DEAL",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-8e46bd75-09fc-4dee-a439-9f96184aae49",
      },
      cta: {
        link: "https://www.swiggy.com/city/bangalore/bangalore-bagel-shop-sivanchetti-gardens-central-bangalore-rest920944",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "303283",
        name: "Parijata pure veg",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/21/2a8aae89-cf1b-4025-8d1d-0b8fe863bc2f_303283.jpg",
        locality: "Richmond Town",
        areaName: "Richmond Town",
        costForTwo: "₹200 for two",
        cuisines: ["South Indian"],
        avgRating: 4.4,
        veg: true,
        parentId: "155619",
        avgRatingString: "4.4",
        totalRatingsString: "1.5K+",
        sla: {
          deliveryTime: 36,
          lastMileTravel: 4,
          serviceability: "SERVICEABLE",
          slaString: "35-40 mins",
          lastMileTravelString: "4.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-05-21 22:30:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹39",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "4.1",
            ratingCount: "405",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-8e46bd75-09fc-4dee-a439-9f96184aae49",
      },
      cta: {
        link: "https://www.swiggy.com/city/bangalore/parijata-pure-veg-richmond-town-rest303283",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "418859",
        name: "Udupi Shanthi Sagar",
        cloudinaryImageId: "rlfcmogwwbrgi1xa4owk",
        locality: "Frazer Town",
        areaName: "Frazer Town",
        costForTwo: "₹200 for two",
        cuisines: ["South Indian", "Beverages"],
        avgRating: 4.5,
        veg: true,
        parentId: "233016",
        avgRatingString: "4.5",
        totalRatingsString: "9.5K+",
        sla: {
          deliveryTime: 33,
          lastMileTravel: 3.8,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "3.8 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-05-21 22:55:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "v1695133679/badges/Pure_Veg111.png",
              description: "pureveg",
            },
          ],
        },
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "pureveg",
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                    theme: "",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "3.9",
            ratingCount: "806",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-8e46bd75-09fc-4dee-a439-9f96184aae49",
      },
      cta: {
        link: "https://www.swiggy.com/city/bangalore/udupi-shanthi-sagar-frazer-town-rest418859",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "1208881",
        name: "Thirtha",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/27/b4cf8af1-5763-4919-bca2-cd99c5e75057_1208881 (1).jpg",
        locality: "Central banglore ",
        areaName: "Central Bangalore",
        costForTwo: "₹350 for two",
        cuisines: [
          "North Indian",
          "South Indian",
          "Chinese",
          "Snacks",
          "Desserts",
          "Beverages",
        ],
        avgRating: 4.6,
        veg: true,
        parentId: "691336",
        avgRatingString: "4.6",
        totalRatingsString: "983",
        sla: {
          deliveryTime: 28,
          lastMileTravel: 2.2,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "2.2 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-05-21 23:59:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
              description: "OnlyOnSwiggy",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "OnlyOnSwiggy",
                    imageId:
                      "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                    theme: "",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹70",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-8e46bd75-09fc-4dee-a439-9f96184aae49",
      },
      cta: {
        link: "https://www.swiggy.com/city/bangalore/thirtha-central-banglore-central-bangalore-rest1208881",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "79234",
        name: "Airlines Hotel",
        cloudinaryImageId: "b1iffaxblxghqqyrmbkp",
        locality: "Lavelle Road",
        areaName: "Central Bangalore",
        costForTwo: "₹400 for two",
        cuisines: ["South Indian", "North Indian"],
        avgRating: 4.5,
        veg: true,
        parentId: "28130",
        avgRatingString: "4.5",
        totalRatingsString: "4.1K+",
        sla: {
          deliveryTime: 30,
          lastMileTravel: 2.3,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "2.3 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-05-21 21:30:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
              description: "OnlyOnSwiggy",
            },
          ],
        },
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "OnlyOnSwiggy",
                    imageId:
                      "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                    theme: "",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "3.7",
            ratingCount: "45",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-8e46bd75-09fc-4dee-a439-9f96184aae49",
      },
      cta: {
        link: "https://www.swiggy.com/city/bangalore/airlines-hotel-lavelle-road-central-bangalore-rest79234",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "391410",
        name: "Swathi Grand",
        cloudinaryImageId: "k8axli85xm4p8j0jgzhd",
        locality: "Millars Road",
        areaName: "Central Bangalore",
        costForTwo: "₹200 for two",
        cuisines: ["South Indian", "Chinese"],
        avgRating: 4.6,
        parentId: "256606",
        avgRatingString: "4.6",
        totalRatingsString: "805",
        sla: {
          deliveryTime: 28,
          lastMileTravel: 2.4,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "2.4 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-05-21 22:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "android/static-assets/icons/big_rx.png",
              description: "bolt!",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "bolt!",
                    imageId: "android/static-assets/icons/big_rx.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹30",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-8e46bd75-09fc-4dee-a439-9f96184aae49",
      },
      cta: {
        link: "https://www.swiggy.com/city/bangalore/swathi-grand-millars-road-central-bangalore-rest391410",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
  ],
};
const RestaturantCard = (props) => {
  const { resData } = props;
  console.log(resData);
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo } =
    resData.info;

  return (
    <div className="res-container">
      <div className="res-card">
        {
          <img
            className="res-logo"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2026/2/24/6caf096b-b568-4441-9562-73edd546bb57_187384.JPG"
          />
        }
        <h3>{name}</h3>
        <h3>Rating{avgRating}⭐</h3>
        <h3 className="cuisines">{cuisines.join(",")}</h3>
        <h3 className="cuisines">{costForTwo}</h3>
      </div>

      <div className="res-card">
        <img
          className="res-logo"
          src="https://www.hatchwise.com/wp-content/uploads/2023/07/image-18.png"
        />
        <h3>Dominos</h3>
        <h3>Pizza</h3>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <RestaturantCard resData={resObj.restaurants[0]} />
      <RestaturantCard resData={resObj.restaurants[1]} />
      <RestaturantCard resData={resObj.restaurants[2]} />
      <RestaturantCard resData={resObj.restaurants[3]} />
      <RestaturantCard resData={resObj.restaurants[4]} />
    </div>
  );
};
function App() {
  return (
    <>
      <Header />
      <Body />
    </>
  );
}
export default App;
