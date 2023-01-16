import axios from "axios";
import "../styles/List.css";
import { useState, useEffect } from "react";
import BrewCard from "../components/BrewCard";

// data-types: brewery_type, city, country, id, name, phone, latitude, longitude, postal_code, state, street, website_url

const List = () => {
  const [brew, setBrew] = useState([]);

  useEffect(() => {
    const getBrew = async () => {
      let newBrew = await axios.get(
        "https://api.openbrewerydb.org/breweries?by_city=atlanta"
      );

      setBrew(newBrew.data);
    };
    getBrew();
  }, []);

  return brew.length > 1 ? (
    <div className={`main-bg-color list-container`}>
      {brew.map((beer) => {
        return <BrewCard key={beer.id} beer={beer} />;
      })}
    </div>
  ) : (
    <div>Loading</div>
  );
};

export default List;
