import "../styles/BrewCard.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BrewCard = ({ beer }) => {
  let navigate = useNavigate("");
  // State used to provided functionality to the onMouseEnter animation event
  let [hidden, setHidden] = useState("hidden");
  // Helps page rerender
  let [mouseOn, setMouseOn] = useState(false);
  //Capitalize type. This may be removed in the future
  let upType = beer.brewery_type.toUpperCase();
  // Put together address from OpenBrewery API data
  let address =
    beer.street + " " + beer.city + ", " + beer.state + " " + beer.postal_code;

  let long = beer.longitude;
  let lati = beer.latitude;
  let id = beer.id;

  const handleClick = (name) => {
    navigate(`${name}/${id}/${lati}/${long}`);
  };

  useEffect(() => {
    // Currently non-operational as the rerenders happen too far apart. Looks tacky
    if (!mouseOn) {
      setHidden("hidden");
    }
  }, [mouseOn]);

  // If no address is present, state as such
  if (beer.street === null) {
    address = "Not Available";
  }

  // Attempts made to have smooth fade in of body text but may need to consider purely CSS option. Non-functional
  const handleMouseAway = () => {
    setHidden("hidden");
    setMouseOn(false);
  };

  const handleMouseOver = () => {
    setHidden("");
    setMouseOn(true);
  };

  return (
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
