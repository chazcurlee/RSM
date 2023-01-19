import "../styles/Brewery.css";

const Brewery = (props) => {
  // This once provided a text box to indicate the brewery location. Now just a red mark. Keeping in case I want to expand into something with more functionality
  return (
    <div>
      <div className="indicator-container">
        {/* <div className="brew-name">{props.name}</div> */}
      </div>
    </div>
  );
};

export default Brewery;
