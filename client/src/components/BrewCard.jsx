import "../styles/BrewCard.css";
import { useNavigate } from "react-router-dom";

// data-types: brewery_type, city, country, id, name, phone, latitude, longitude, postal_code, state, street, website_url

const BrewCard = ({ beer }) => {
  let navigate = useNavigate("");
  let upType = beer.brewery_type.toUpperCase();
  let address =
    beer.street + " " + beer.city + ", " + beer.state + " " + beer.postal_code;

  let long = beer.longitude;
  let lati = beer.latitude;

  const handleClick = (name) => {
    navigate(`${name}/${lati}/${long}`);
  };

  if (beer.street === null) {
    address = "Not Available";
  }

  return (
    <div className={`brewcard-container`}>
      {
        <h1
          className={`brew-name brew-item`}
          onClick={() => handleClick(beer.name)}
        >
          {beer.name}
        </h1>
      }
      {
        <h4 className={`brew-item`}>
          Type <p className={`under-kill`}>{upType} </p>{" "}
        </h4>
      }
      {
        <h4 className={`brew-item`}>
          Address <p className={`under-kill`}>{address}</p>
        </h4>
      }
      {
        <h4 className={`brew-item`}>
          Website{" "}
          <p className={`under-kill`}>
            {" "}
            <a href={beer.website_url}>{beer.website_url}</a>
          </p>
        </h4>
      }
    </div>
  );
};

export default BrewCard;
