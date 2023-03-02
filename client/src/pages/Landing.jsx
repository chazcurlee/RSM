import "../styles/Landing.css";

const Landing = () => {
  return (
    <div
      className={`landing-container height-100prcnt grid-display grid-col-full grid-row-auto`}
    >
      <div
        className={`text-title-container grid-col-start-2 grid-display grid-row-start-2 width-auto margin-bottom`}
      >
        <div className="long-bottom flex-display flex-col justify-center grid-row-start-1">
          <p
            className={`width-auto welcome text text-size-header height-auto background-white flex-align-start text-align-center marginless split `}
          >
            Welcome to ATL Brew!
          </p>
        </div>
      </div>
      <div
        className={`grid-col-start-2 flex-display flex-row justify-center align-center margin-full space`}
      ></div>
      <div
        className={`grid-col-start-2 flex-display flex-row justify-center align-center margin-bottom`}
      ></div>
    </div>
  );
};

export default Landing;
