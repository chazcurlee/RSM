import "../styles/Landing.css";
import beer1 from "../assets/Beer-flight.jpeg";
import beer2 from "../assets/beer.jpeg";
import beer3 from "../assets/beer2.jpeg";

const Landing = () => {
  return (
    <div
      className={`landing-container height-100prcnt grid-display grid-col-full grid-row-auto`}
    >
      <div
        className={`grid-col-start-2 grid-display grid-row-2 width-auto margin-bottom`}
      >
        <div className="flex-display flex-col justify-center grid-row-start-1">
          <p
            className={`width-auto welcome text text-size-header height-auto background-white flex-align-start text-align-center marginless split`}
          >
            Welcome to ATL Brew!
          </p>
        </div>
        <div className="grid-row-start-2 grid-display grid-col-2">
          <p
            className={` padding-full height-100prcnt box-shadow background-green grid-row-start-2 text-align-center margin-right`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quisque
            non tellus orci ac. Purus gravida quis blandit turpis. Sit amet
            nulla facilisi morbi tempus iaculis. Vel orci porta non pulvinar
            neque laoreet suspendisse interdum consectetur. In nibh mauris
            cursus mattis molestie a. In nulla posuere sollicitudin aliquam
            ultrices sagittis orci a.
          </p>
          <p
            className={` padding-full height-100prcnt  box-shadow background-blue grid-row-start-2 text-align-center`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quisque
            non tellus orci ac. Purus gravida quis blandit turpis. Sit amet
            nulla facilisi morbi tempus iaculis. Vel orci porta non pulvinar
            neque laoreet suspendisse interdum consectetur. In nibh mauris
            cursus mattis molestie a. In nulla posuere sollicitudin aliquam
            ultrices sagittis orci a.
          </p>
        </div>

        {/* <img src={beer1} className={`right-img img`}></img> */}
      </div>
      <div
        className={`grid-col-start-2 flex-display flex-row justify-center align-center margin-full`}
      >
        {/* <img src={beer2} className={`left-img img`}></img> */}
      </div>
      <div
        className={`grid-col-start-2 flex-display flex-row justify-center align-center margin-bottom`}
      >
        {/* <img src={beer3} className={`right-img img`}></img> */}
      </div>
    </div>
  );
};

export default Landing;
