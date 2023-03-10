import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import GoogleMapReact from "google-map-react";
import "../styles/Details.css";
import Brewery from "../components/Brewery";
import Reviews from "../components/Reviews";

const Details = () => {
  // Atlanta Breweries Object State
  let [brewery, setBrewery] = useState([]);
  // Mongodb Reviews Object State
  let [reviews, setReviews] = useState([]);
  // Used through out the application to ensure rerenders happen
  const [toggle, setToggle] = useState(false);
  // Used through out the application to ensure rerenders happen
  const [rerend, setRerend] = useState(false);

  let { name, id, lati, long } = useParams();
  const API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

  // Ensuring that longitude and latitude are Numbers so Google Maps API can use them appropriately
  let longi = parseFloat(long);
  let ltit = parseFloat(lati);

  // Building full address from OpenBrewery API data
  let address =
    brewery.street +
    " " +
    brewery.city +
    ", " +
    brewery.state +
    " " +
    brewery.postal_code;

  // giving default settings and passing lat/lng for Google Maps API
  const defaultProps = {
    center: {
      lat: ltit,
      lng: longi,
    },
    zoom: 11,
  };

  // If no address available, indicate as such
  if (brewery.street === null) {
    address = "Not Available";
  }

  useEffect(() => {
    // Get info from OpenBrewery API
    const getBrewery = async () => {
      let select = await axios.get(
        `https://api.openbrewerydb.org/breweries?by_name=${name}`
      );
      setBrewery(select.data[0]);
    };
    getBrewery();

    // Pull reviews from mongodb
    const getReviews = async () => {
      let rev = await axios.get(`/api/review/${id}`);
      setReviews(rev.data);
    };
    getReviews();
  }, [toggle, rerend]);

  // Ensuring that the window is scrolled to the top when navigating. Looking to create a better way to do this as this gets tedious on rerenders
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  //If coordinates are not available, guard ternary to show page without Google Maps
  return lati === "null" ? (
    <div>
      <div
        className={`main-bg-color details-container-no-map grid-display grid-col-full justify-center align-center height-100vh`}
      >
        <h1 className="grid-col-start-2 grid-row-start-auto">{brewery.name}</h1>
        <h3 className="grid-col-start-2 grid-row-start-auto">{address}</h3>
        <h3 className="grid-col-start-2 grid-row-start-auto">
          Phone: {brewery.phone}
        </h3>
        <h3 className="grid-col-start-2 grid-row-start-auto">
          <a href={`${brewery.website_url}`} target="_blank">
            {brewery.website_url}
          </a>
        </h3>
        <div className="grid-col-start-2 flex-display flex-column   border-top ">
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
      <div
        className={`main-bg-color details-container grid-display grid-col-2 justify-center align-center height-100prcnt`}
      >
        <div className="justify-center-self justify-center align-center-self align-center ">
          <h1 className=" grid-col-start-1 grid-row-start-1 underline ">
            {brewery.name}
          </h1>
          <h3 className="grid-col-start-1 grid-row-start-1">{address}</h3>
          <h3 className="grid-col-start-1 grid-row-start-1">
            Phone: {brewery.phone}
          </h3>
          <h3 className="grid-col-start-1 grid-row-start-1">
            <a href={`${brewery.website_url}`} target="_blank">
              {brewery.website_url}
            </a>
          </h3>
        </div>
        <div
          className={`map-container grid-row-start-1 grid-col-start-2 align-center-self justify-center-self margin-bottom margin-top `}
        >
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
