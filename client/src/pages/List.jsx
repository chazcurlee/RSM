import axios from "axios";
import "../styles/List.css";
import { useState, useEffect } from "react";
import BrewCard from "../components/BrewCard";

// data-types: brewery_type, city, country, id, name, phone, latitude, longitude, postal_code, state, street, website_url

const List = ({ brew }) => {
  return brew.length > 1 ? (
    <div
      className={`main-bg-color margin-top list-container grid-display grid-col-full grid-row-auto justify-center align-center`}
    >
      {brew.map((beer) => {
        return <BrewCard key={beer.id} beer={beer} />;
      })}
    </div>
  ) : (
    <div>Loading</div>
  );
};

export default List;
