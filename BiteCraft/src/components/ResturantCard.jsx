import { CDN_URL } from "../utils/constants";

const RestaturantCard = (props) => {
  const { resData } = props;
  console.log(resData);
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo } = resData;

  return (
    <div className="res-container">
      <div className="res-card">
        <img
          className="res-logo"
          src={CDN_URL + cloudinaryImageId}
          alt="image loading"
        ></img>

        <h3>{name}</h3>
        <h3>Rating{avgRating}⭐</h3>
        <h3 className="cuisines">{cuisines?.join(",")}</h3>
        <h3 className="cuisines">{costForTwo}</h3>
      </div>
    </div>
  );
};
export default RestaturantCard;
