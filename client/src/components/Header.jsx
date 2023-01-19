import "../styles/Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate("");

  const handleClick = (e) => {
    let navPoint = e.target.id;
    navigate(`${navPoint}`);
  };
  return (
    <div
      className={`head-container grid-col-auto sticky grid-display height-auto width-full z1`}
    >
      <div
        className={`logo head1 flex-display justify-center grid-row-start-1`}
      ></div>
      <div
        className={`title grid-row-start-1 head1 flex-display justify-center underline`}
        id={`/`}
        onClick={handleClick}
      >
        Atl Brew
      </div>
      {/* <div className={`head-divider divide1`}></div> */}
      <div
        className={`browse grid-row-start-1 head flex-display justify-center`}
      >
        {" "}
        <div
          id={`/list`}
          className={`button border-green`}
          onClick={handleClick}
        >
          Browse{" "}
        </div>
      </div>
      <div
        className={`top-ten grid-row-start-1 head flex-display justify-center`}
      ></div>
      {/* <div className={`head-divider divide2`}></div> */}

      <div
        className={`nav-icon-container border-grey flex-display flex-row justify-center`}
      ></div>
    </div>
  );
};

export default Header;
