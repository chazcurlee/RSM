import "../styles/Header.css";
import { RxCaretDown } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate("");

  const handleClick = (e) => {
    let navPoint = e.target.id;
    navigate(`${navPoint}`);
  };
  return (
    <div className={`head-container`}>
      <div className={`logo head1`}></div>
      <div className={`title head1`} id={`/`} onClick={handleClick}>
        ATL Brew
      </div>
      {/* <div className={`head-divider divide1`}></div> */}
      <div className={`browse head `}>
        {" "}
        <div
          id={`/list`}
          className={`button ghost-button`}
          onClick={handleClick}
        >
          Browse{" "}
        </div>
      </div>
      <div className={`top-ten head `}>
        <div
          id={`/top10`}
          className={`button filled-button`}
          onClick={handleClick}
        >
          Top Picks
        </div>
      </div>
      {/* <div className={`head-divider divide2`}></div> */}
      <div className={`sign-up head`}>
        <div
          id={`/signup`}
          className={`button ghost-button2`}
          onClick={handleClick}
        >
          Sign Up
        </div>
      </div>
      <div className={`sign-in head`}>
        <div
          id={`/login`}
          className={`button filled-button2`}
          onClick={handleClick}
        >
          Sign In
        </div>
      </div>
      <div className={`nav-icon-container`}></div>
    </div>
  );
};

export default Header;
