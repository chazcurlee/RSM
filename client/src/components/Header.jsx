import "../styles/Header.css";
import atl from "../assets/silhouette-of-atlanta-skyline.jpeg";
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
      <img
        src={atl}
        className={`logo head1 flex-display  grid-row-start-1`}
      ></img>
      <div
        className={`title grid-row-start-1 head1 flex-display justify-center underline padding-left`}
        id={`/`}
        onClick={handleClick}
      >
        Atl Brew
      </div>
      <div
        className={`grid-row-start-1 head home flex-display justify-center border-green`}
      >
        {" "}
        <div id={`/`} className={`button border-green`} onClick={handleClick}>
          Home{" "}
        </div>
      </div>
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

      <div
        className={`nav-icon-container border-grey flex-display flex-row justify-center`}
      ></div>
    </div>
  );
};

export default Header;
