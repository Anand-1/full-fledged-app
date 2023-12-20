import Footer from "../Common/Footer/Footer";
import "./LandingPage.css";
import { useNavigate } from "react-router-dom";
import useWindowResize from "../../Hooks/useWindowSize";
import MainNavigation from "../MainNavigation/MainNavigation";

const LandingPage = () => {
  const navigate = useNavigate();
  const { width, height } = useWindowResize();
  return (
    <>
      <MainNavigation />
      <div className="window-size">
        <span>
          {width} * {height}
        </span>
      </div>
      <div className="main-section">
        <div className="heading-section">
          <h5>Hi Anand , Welcome to the project !</h5>
          <div className="action-section">
            <button type="button" onClick={() => navigate("/login")}>
              Login Now !
            </button>
            <button type="button" onClick={() => navigate("/registration")}>
              Register Now !
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
