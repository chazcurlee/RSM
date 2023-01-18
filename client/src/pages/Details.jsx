import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import GoogleMapReact from "google-map-react";
import "../styles/Details.css";
import Brewery from "../components/Brewery";
import Reviews from "../components/Reviews";

const Details = () => {
  let [brewery, setBrewery] = useState([]);
  let [reviews, setReviews] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [rerend, setRerend] = useState(false);

  let { name, lati, long } = useParams();
  const API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY;
  let longi = parseFloat(long);
  let ltit = parseFloat(lati);
  let address =
    brewery.street +
    " " +
    brewery.city +
    ", " +
    brewery.state +
    " " +
    brewery.postal_code;

  const defaultProps = {
    center: {
      lat: ltit,
      lng: longi,
    },
    zoom: 11,
  };

  if (brewery.street === null) {
    address = "Not Available";
  }

  useEffect(() => {
    const getBrewery = async () => {
      let select = await axios.get(
        `https://api.openbrewerydb.org/breweries?by_name=${name}`
      );
      setBrewery(select.data[0]);
    };
    getBrewery();

    const getReviews = async () => {
      let rev = await axios.get(`http://localhost:3001/review/${brewery.id}`);
      setReviews(rev.data);
    };
    getReviews();
  }, [toggle, rerend]);

  console.log(reviews);

  return lati === "null" ? (
    <div>
      <div className={`main-bg-color details-container-no-map`}>
        <h1 className="details-item-no-map">{brewery.name}</h1>
        <h3 className="details-item-no-map">{address}</h3>
        <h3 className="details-item-no-map">{brewery.phone}</h3>
        <h3 className="details-item-no-map">{brewery.website_url}</h3>
        <div>
          <Reviews
            brewery={brewery}
            reviews={reviews}
            toggle={toggle}
            setToggle={setToggle}
            rerend={rerend}
            setRerend={setRerend}
          />
        </div>
      </div>
    </div>
  ) : (
    <div>
      <div className={`main-bg-color details-container`}>
        <div>
          <h1 className="details-item">{brewery.name}</h1>
          <h3 className="details-item">{address}</h3>
          <h3 className="details-item">{brewery.phone}</h3>
          <h3 className="details-item">{brewery.website_url}</h3>
        </div>
        <div className={`map-container`}>
          <GoogleMapReact
            options={{
              gestureHandling: "greedy",
            }}
            bootstrapURLKeys={{
              key: `${API_KEY}`,
            }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <Brewery
              lat={defaultProps.center.lat}
              lng={defaultProps.center.lng}
              name={`${brewery.name}`}
            />
          </GoogleMapReact>
        </div>
      </div>
      <div>
        <Reviews
          className="reviews"
          brewery={brewery}
          reviews={reviews}
          toggle={toggle}
          setToggle={setToggle}
          rerend={rerend}
          setRerend={setRerend}
        />
      </div>
    </div>
  );
};

export default Details;
