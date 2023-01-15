import "../styles/Landing.css";
import beer1 from "../assets/Beer-flight.jpeg";
import beer2 from "../assets/beer.jpeg";
import beer3 from "../assets/beer2.jpeg";

const Landing = () => {
  return (
    <div className={`landing-container main-bg-color`}>
      <div className={`hero split`}>
        <p className={`left-text text`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quisque
          non tellus orci ac. Purus gravida quis blandit turpis. Sit amet nulla
          facilisi morbi tempus iaculis. Vel orci porta non pulvinar neque
          laoreet suspendisse interdum consectetur. In nibh mauris cursus mattis
          molestie a. In nulla posuere sollicitudin aliquam ultrices sagittis
          orci a.
        </p>
        {/* <img src={beer1} className={`right-img img`}></img> */}
      </div>
      <div className={`testimonial split`}>
        {/* <img src={beer2} className={`left-img img`}></img> */}
        <p className={`right-text text`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quisque
          non tellus orci ac. Purus gravida quis blandit turpis. Sit amet nulla
          facilisi morbi tempus iaculis. Vel orci porta non pulvinar neque
          laoreet suspendisse interdum consectetur. In nibh mauris cursus mattis
          molestie a. In nulla posuere sollicitudin aliquam ultrices sagittis
          orci a.
        </p>
      </div>
      <div className={`call split`}>
        <p className={`left-text text`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quisque
          non tellus orci ac. Purus gravida quis blandit turpis. Sit amet nulla
          facilisi morbi tempus iaculis. Vel orci porta non pulvinar neque
          laoreet suspendisse interdum consectetur. In nibh mauris cursus mattis
          molestie a. In nulla posuere sollicitudin aliquam ultrices sagittis
          orci a.
        </p>
        {/* <img src={beer3} className={`right-img img`}></img> */}
      </div>
    </div>
  );
};

export default Landing;
