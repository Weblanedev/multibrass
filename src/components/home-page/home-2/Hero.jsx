import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero-banner-seven p-30">
      <div className="bg-wrapper position-relative pt-200 pb-20 md-pt-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-7" data-aos="fade-right">
              {/* <Link to="/pages-menu/pricing" className="slogan d-inline-block">
                <strong className="fw-500">Offer</strong>
                is going on till friday, $1.99/mo.
                <i className="fas fa-chevron-right" />
              </Link> */}
              <h1 className="hero-heading fw-bold tx-dark mt-25">
                Discover Why We are the
                <span className="position-relative ms-3 d-inline-block">
                  no. 1 <img src="/images/shape/shape_95.svg" alt="shape" />
                </span>
                choice for Workshops and Counseling
              </h1>
              <p className="text-lg mb-70 pt-35 pe-xxl-5 md-pt-30 lg-mb-40">
              Discover a Path to Success with Our Expert-Led Symposiums and Personalized Counseling
              </p>
              <Link
                to="/our-workshops"
                className="btn-fourteen fw-500 tran3s"
              >
                Get Started
              </Link>
            </div>
          </div>
          {/* End .container */}

          <div className="illustration-holder" data-aos="fade-left">
            <img
              src="/images/assets/ils_05.svg"
              alt="illustration"
              className="lazy-img main-illustration"
            />
          </div>
          {/* /.illustration-holder */}
        </div>
        {/* /.container */}
      </div>
    </div>
  );
};

export default Hero;
