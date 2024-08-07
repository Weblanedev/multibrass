import { useEffect, useState } from "react";
import MainMenu from "./MainMenu";
import { Link } from "react-router-dom";
import PortfolioMenu from "./PortfolioMenu";

const DefaulHeader = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <header
      className={`theme-main-menu sticky-menu theme-menu-eight border-bottom ${navbar ? "fixed" : ""
        }`}
    >
      <div className="inner-content position-relative">
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo order-lg-0">
            <Link to="/" className="d-block">
              <p className="text-lg tx-dark hero-heading fw-bold">AmberStream</p>
              {/* <img src="/images/logo/logo_01.png" alt="logo" /> */}
            </Link>
          </div>
          <div className="right-widget ms-auto d-flex align-items-center order-lg-3">
            {/* <Link
              to="/login"
              className="login-btn-three rounded-circle tran3s me-3"
            >
              <i className="bi bi-person" />
            </Link> */}
            <Link
              to="/contact/contact-v3"
              className="start-btn-one fs-18 fw-500 tran3s position-relative d-none d-lg-block"
            >
              Get Started
            </Link>
          </div>{" "}
          {/* /.right-widget */}
          {/* <MainMenu /> */}
          <PortfolioMenu />
        </div>
      </div>
      {/* /.inner-content */}
    </header>
  );
};

export default DefaulHeader;
