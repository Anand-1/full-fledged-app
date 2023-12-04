import { Link } from "react-router-dom";
import "./MainNavigation.css";
const MainNavigation = () => {
  return (
    <>
      <div className="main-navigation">
        <div className="main-items">
          <Link to="/users">Users</Link>
        </div>
        <div className="main-items">
          <Link to="/admin">Admin</Link>
        </div>
        <div className="main-items">
          <Link to="/">Home</Link>
        </div>
        <div className="main-items">
          <Link to="/hooks/grandparent">Hooks Usage</Link>
        </div>
      </div>
    </>
  );
};

export default MainNavigation;
