import "../styles/BrewCard.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// data-types: brewery_type, city, country, id, name, phone, latitude, longitude, postal_code, state, street, website_url

const BrewCard = ({ beer }) => {
  let navigate = useNavigate("");
  let [hidden, setHidden] = useState("hidden");
  let [mouseOn, setMouseOn] = useState(false);
  let upType = beer.brewery_type.toUpperCase();
  let address =
    beer.street + " " + beer.city + ", " + beer.state + " " + beer.postal_code;

  let long = beer.longitude;
  let lati = beer.latitude;
  let id = beer.id;

  const handleClick = (name) => {
    navigate(`${name}/${id}/${lati}/${long}`);
  };

  useEffect(() => {
    if (!mouseOn) {
      setHidden("hidden");
    }
  }, [mouseOn]);

  if (beer.street === null) {
    address = "Not Available";
  }

  const handleMouseAway = () => {
    // const unhide = () => {
    setHidden("hidden");
    setMouseOn(false);
    // };

    // setTimeout(unhide, 800);
  };

  const handleMouseBg = () => {
    setHidden("hidden");
  };

  const handleMouseOver = () => {
    // const unhide = () => {
    setHidden("");
    setMouseOn(true);
    // };

    // setTimeout(unhide, 800);
  };

  return (
    // <div className="brew-con-over">
    <div
      className={`brewcard-container grid-display  justify-center align-center justify-center-self align-center-self box-shadow background-beer`}
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseAway}
    >
      {
        <div
          className={`brew-name flex-display flex-row background-grey-clear brew-item marginless grid-row-start-1 flex-center `}
        >
          <h6
            className="marginless background-grey pointer title-divide"
            onClick={() => handleClick(beer.name)}
          >
            {beer.name}
          </h6>
          {
            <div className={`brew-item1  ${hidden} flex-center  marginless`}>
              <p className={`under-kill `}>{upType} </p>{" "}
            </div>
          }
          {
            <div className={`brew-item2  ${hidden}  flex-center  marginless`}>
              <p className={`under-kill`}>{address}</p>
            </div>
          }
          {
            <div className={`brew-item3  ${hidden}  flex-center  marginless`}>
              {" "}
              <p className={`under-kill span`}>
                {" "}
                <a
                  className="under-kill"
                  href={beer.website_url}
                  target="_blank"
                >
                  {beer.website_url}
                </a>
              </p>
            </div>
          }
        </div>
      }
    </div>
  );
};

export default BrewCard;
