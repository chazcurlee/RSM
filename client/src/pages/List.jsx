import "../styles/List.css";

import BrewCard from "../components/BrewCard";

const List = ({ brew }) => {
  // If the axios call happens to take longer than expected, guard ternary to show loading screen
  return brew.length > 1 ? (
    <div
      className={`main-bg-color margin-top list-container grid-display grid-col-full grid-row-auto justify-center align-center`}
    >
      {/* Mapping through Atlanta breweries and passing them through to BrewCard component */}
      {brew.map((beer) => {
        return <BrewCard key={beer.id} beer={beer} />;
      })}
    </div>
  ) : (
    <div>Loading</div>
  );
};

export default List;
