import { Link } from "react-router-dom";
import Seo from "../../components/common/Seo";
import CopyrightFooter2 from "../../components/footer/CopyrightFooter2";
import Footer2 from "../../components/footer/Footer2";
import NewsLetter from "../../components/footer/NewsLetter";
import Header2 from "../../components/header/Header2";
import CallToActions from "../../components/feature-web-hosting/CallToActions";

import Pricing3 from "../../components/pricing/Pricing3";
import CompareTable from "../../components/pricing/CompareTable";
import Faq3 from "../../components/faqs/Faq3";

const PricingV31 = () => {
  return (
    <>
      <Seo pageTitle="Workshops" />

      {/* <!--  =============================================
      Theme Header2 Menu
      ============================================== 	--> */}
      <Header2 />

      {/* 
        =============================================
        Pricing Section Four
        ============================================== 
        */}
      <div className="pricing-section-four pt-225 lg-pt-150">
        <div className="container">
          <div className="row">
            <div className="col-xxl-10 col-md-9 m-auto">
              <div className="title-style-seven text-center" data-aos="fade-up">
                <h2 className="main-title fw-bold tx-dark">
                  Solo, Team or Business? We’ve got you{" "}
                  <span className="position-relative d-inline-block">
                    covered <img src="/images/shape/shape_96.svg" alt="shape" />
                  </span>
                </h2>
                <p className="text-lg mb-70 pt-35 pe-xxl-5 md-pt-30 lg-mb-40">
                These plans are designed to provide comprehensive training solutions to meet the varying needs of our participants. 
                Whether you're an individual looking to expand your knowledge or a team seeking intensive training, our workshop pricing plans offer a range of options to suit your needs. 
              </p>
              </div>
              {/* /.title-style-seven */}
            </div>
          </div>
        </div>
        {/* End container */}
        <div className="container pricing-table-area-four pt-60 lg-pt-30">
          <div className="row">
            <Pricing3 />
          </div>
        </div>{" "}
        {/* /.pricing-table-area-four */}
        <div className="container">
          <div className="text-center mt-70 lg-mt-40" data-aos="fade-up">
            <div className="d-inline-block consult-text fs-18 fw-500 tx-dark">
              Not sure which workshop plan is right for you? We can help.{" "}
              <Link
                to="/contact"
                className="fw-normal text-decoration-underline"
              >
                Talk to us
              </Link>
            </div>
          </div>
        </div>{" "}
        {/* /.container */}
      </div>
      {/* /.pricing-section-four */}

      {/* 
			=============================================
				Hosting Compare Table
			============================================== 
			*/}
      
      {/* /.hosting-compare-table */}

      {/* 
			=============================================
				Feature Section Twenty Five
			============================================== 
			*/}
      {/* /.fancy-feature-twentyFive */}

      {/*
        =====================================================
        Fancy Short Banner Ten
        =====================================================
        */}
      {/* <CallToActions /> */}
      {/* /.fancy-short-banner-ten */}

      {/*
		=====================================================
		Footer
		=====================================================
		*/}
      <div className="footer-style-seven p-30 theme-basic-footer">
        <div className="bg-wrapper position-relative">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xl-2 footer-intro mb-40">
                <div className="logo">
                  <Link to="/">
                    <img src="/images/logo/logo_01.png" alt="brand" />
                  </Link>
                </div>
              </div>
              {/* End .col */}

              <Footer2 />
{/* 
              <div className="col-xl-4 col-lg-5 mb-30 form-widget">
                <h5 className="footer-title tx-dark fw-normal">Newslettert</h5>
                <h6 className="pt-15 pb-20 md-pt-10">Join our newsletter</h6>
                <NewsLetter />
                <div className="fs-14 mt-10">
                  We only send interesting and relevant emails.
                </div>
              </div> */}
              {/* End .col-xl-4 */}
            </div>
            {/* End .row */}
          </div>
          {/* /.container */}
        </div>
        {/* /.bg-wrapper */}
        <CopyrightFooter2 />
        {/* /.bottom-footer */}
      </div>
      {/* /.footer-style-seven */}
    </>
  );
};

export default PricingV31;
