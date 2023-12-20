import { Link } from "react-router-dom";
import "./MainNavigation.css";
const MainNavigation = () => {
  return (
    <>
      <div className="main-navigation">
        <div className="main-items">
          <Link className="link-items" to="/users">
            Users
          </Link>
        </div>
        <div className="main-items">
          <Link to="/admin" className="link-items">
            Admin
          </Link>
        </div>
        <div className="main-items">
          <Link className="link-items" to="/">
            Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default MainNavigation;
