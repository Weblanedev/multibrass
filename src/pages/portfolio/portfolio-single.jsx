import Seo from "../../components/common/Seo";
import { Link } from "react-router-dom";
import DefaulHeader from "../../components/header/DefaulHeader";
import DefaultFooter from "../../components/footer/DefaultFooter";
import Footer from "../../components/footer/Footer";
import SocialShare from "../../components/portfolio/portfolio-details/SocialShare";
import ProjectDetails from "../../components/portfolio/portfolio-details/ProjectDetails";
import ProjectSlide from "../../components/portfolio/portfolio-details/ProjectSlide";
import CallToAction from "../../components/portfolio/CallToAction";
import PortfolioGallery from "../../components/portfolio/portfolio-details/PortfolioGallery";

import { useEffect, useState } from "react";
import portfolioData from "../../data/portfolio";
import PortfolioDetailsTitle from "../../components/portfolio/portfolio-details/PortfolioDetailsTitle";
import { useParams } from "react-router-dom";

const DynamicPortfolioDetails = () => {
  const [portfolio, setPortfolio] = useState({});
  let params = useParams();
  const id = params.id;

  useEffect(() => {
    if (!id) <h1>Loading...</h1>;
    else setPortfolio(portfolioData.find((item) => item.id == id));

    return () => { };
  }, [id]);

  return (
    <>
      <Seo pageTitle={`${portfolio.name}`} />
      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      <DefaulHeader />

      {/* 
        =============================================
        Feature Section Fifty One
        ============================================== 
        */}
      <PortfolioDetailsTitle portfolio={portfolio} />

      {/* 
			=============================================
				Portfolio Details Two
			============================================== 
			*/}
      <div className="portfolio-details-two pt-70 pb-50 lg-pb-10 md-pt-10">
        <div className="project-desctiption">
          <div className="container">
            <div className="row">
              <div className="col-lg-8" data-aos="fade-right">
                <ProjectSlide slide={portfolio} />
                {/* /#gallery-carousel */}
              </div>
              {/* End .col-lg-8 */}

              <div className="col-lg-4" data-aos="fade-left">
                <div className="sidebar ms-xl-5">
                  <h3 className="mb-20">About</h3>
                  <p className="border-bottom pb-40 mb-35 lg-pb-20">
                    {portfolio.about}
                  </p>
                  <div className="row">
                    <ProjectDetails details={portfolio} />
                  </div>
                  {/* End .row */}

                  {/* <SocialShare /> */}
                  <div className="right-widget ms-auto d-flex align-items-center order-lg-3">
                    {/* <Link
              to="/login"
              className="login-btn-three rounded-circle tran3s me-3"
            >
              <i className="bi bi-person" />
            </Link> */}
                    <Link
                      to="/checkout"
                      className="btn-twentyOne fw-500 tran3s d-none d-lg-block"
                      onClick={() => {
                        localStorage.setItem("name", portfolio.name)
                        localStorage.setItem("price", portfolio.price)
                      
                      }}
                    >
                      Buy Now 
                    </Link>
                  </div>
                </div>

              </div>
              {/* End col-lg-4 */}
            </div>
            {/* End .row */}


            {/* End col-xl-9 */}

            {/* /.project-pagination */}
          </div>
          {/* End .container */}
        </div>
        {/* /.project-desctiption */}
      </div>
      {/* /.project-details */}

      {/*
			=====================================================
				Fancy Short Banner Twelve
			=====================================================
			*/}
      {/* <CallToAction /> */}

      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
      {/* <DefaultFooter /> */}
      <div className="footer-style-ten theme-basic-footer zn2 position-relative">
        <div className="container">
          <div className="inner-wrapper">
            <div className="row justify-content-between">
              <div className="col-lg-3 footer-intro mb-40">
                <div className="logo">
                  <Link to="/">
                    <p className="text-lg text-white hero-heading fw-bold">AmberStream</p>
                  </Link>
                </div>
                <p className="text-white opacity-75 fs-18 mt-15 mb-45 lg-mb-10">
                  Your go-to destination for all things education and child care.
                </p>
                <p className="text-white opacity-50 fs-15 m0 d-none d-lg-block">
                  {/* © {new Date().getFullYear()} - {new Date().getFullYear() + 1}{" "} */}
                  © amberstream inc.
                </p>
              </div>
              <Footer />
            </div>
          </div>
          {/* /.inner-wrapper */}
        </div>
        {/* End .container */}
        <img
          src="/images/assets/ils_13.png"
          alt="illustration"
          className="lazy-img illustration-one"
          data-aos="fade-left"
        />
        <img
          src="/images/assets/ils_14.png"
          alt="illustration"
          className="lazy-img illustration-two"
          data-aos="fade-right"
        />
      </div>
    </>
  );
};

export default DynamicPortfolioDetails;
