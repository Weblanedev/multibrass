import React from "react";
import Seo from "../../components/common/Seo";
import Header2 from "../../components/header/Header2";
import Testimonial from "../../components/home-page/home-13/Testimonial";
import Faq from "../../components/home-page/home-13/Faq";
import { Link } from "react-router-dom";
import Footer2 from "../../components/footer/Footer2";
import CopyrightFooter2 from "../../components/footer/CopyrightFooter2";
import FooterContent from "../../components/home-page/home-13/FooterContent";
import Subscribe from "../../components/home-page/home-13/Subscribe";
import CopyrightFooter from "../../components/home-page/home-13/CopyrightFooter";

import OurMission from "../../components/about/OurMission";
import Block2 from "../../components/about/Block2";
import CounterSection from "../../components/home-page/home-13/Counter";

const AboutUsV4 = () => {
  return (
    <>
      <Seo pageTitle="About Us" />
      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      {/* <DefaulHeader /> */}
      <Header2 />
      {/* 
        =============================================
        Feature Section Fifty Eight
        ============================================== 
        */}
      <div className="fancy-feature-fiftyEight position-relative zn2 pt-180 md-pt-150">
        <div className="container position-relative">
          <div className="row">
            <div className="col-xl-9 col-lg-7 col-md-8 m-auto">
              <div
                className="title-style-fourteen text-center mb-100 lg-mb-70"
                data-aos="fade-up"
              >
                <div className="sc-title">Our Story</div>
                <h2 className="main-title font-recoleta fw-normal tx-dark">
                  Our mission to make your business{" "}
                  <span className="position-relative">
                    valuable{" "}
                  </span>
                </h2>
              </div>
              {/* /.title-style-fourteen */}
            </div>
          </div>
          <OurMission />
          {/* End .row */}

          <img
            src="/images/shape/shape_187.svg"
            alt="shape"
            className="lazy-img shapes shape-one"
          />
        </div>
      </div>
      {/* /.fancy-feature-fiftyEight */}
      {/*
        =====================================================
        Feature Section Fifty Nine
        =====================================================
        */}
      <div
        className="fancy-feature-fiftyNine position-relative mt-140 "
        data-aos="fade-up"
      >
        <div className="container">
          <div className="title-style-ten text-center" data-aos="fade-up">

          </div>
          {/* End title */}
          <div className="row">
            <div className="col-xl-9 m-auto">
              <p
                className="text-lg tx-dark text-center lh-lg mt-25 md-mt-20"
                data-aos="fade-up"
              >
                Multibrass.ng is dedicated to providing exceptional services in guidance and counseling,
                Our mission is to support individuals and businesses in achieving their goals through expert advice and a seamless online shopping experience.
              </p>
              <p
                className="text-lg tx-dark text-center lh-lg mt-25 md-mt-20"
                data-aos="fade-up"
              >
Our vision is to be a beacon of support and innovation, transforming lives and businesses by addressing challenges with empathy and technology. We aspire to be the leading platform for guidance and counseling services, while also revolutionizing the e-commerce landscape with our seamless and user-friendly trading solutions.
              </p>
            </div>
          </div>
          {/* End .row */}
          <div className="card-wrapper pt-45 lg-pt-20 pb-55 lg-pb-30 mt-85 lg-mt-50">
            <div className="row justify-content-center">
              <Block2 />
            </div>
          </div>{" "}
          {/* /.card-wrapper */}
        </div>{" "}
        {/* /.container */}
        {/* <div className="wrapper mt-50 lg-mt-10">
          <div className="container">
            <div className="row">
              <CounterSection />
            </div>
          </div>
        </div>{" "} */}
        {/* /.wrapper */}
        <img
          src="/images/shape/shape_189.svg"
          alt="shape"
          className="lazy-img shapes shape-one"
        />
      </div>
      {/* /.fancy-feature-fiftyNine */}
      {/* 
        =============================================
        Feedback Section Ten
        ============================================== 
        */}

      {/* /.feedback-section-ten */}
      {/* 
        =============================================
        Feature Section Thirty Three
        ============================================== 
        */}
      {/* /.fancy-feature-thirtyThree */}

      {/*
        =====================================================
        Fancy Short Banner Twelve
        =====================================================
        */}
      <div className="fancy-short-banner-twelve position-relative zn2 pt-160 pb-150 lg-pt-120 lg-pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 m-auto text-center">
              <div className="title-style-ten" aos="fade-up">
                <h2 className="main-title font-recoleta fw-normal tx-dark">
                  Have Any Project? <br />
                  <span className="position-relative">
                    Let’s Talk <img src="/images/shape/shape_132.svg" alt="" />
                  </span>
                  &amp; Grow your Business
                </h2>
              </div>
              {/* /.title-style-ten */}
              <p
                className="text-lg mt-45 mb-55 lg-mb-30 lg-mt-40"
                aos="fade-up"
                aos-delay="200"
              >
                We’r ready to help you. Our expert is here, just send a message.
              </p>
              <Link
                to="/contact"
                className="btn-twenty fw-500 tran3s"
                aos-delay="300"
                aos="fade-up"
              >
                Send Message
              </Link>
            </div>
          </div>
        </div>
        <div className="shapes shape-one" />
      </div>
      {/* /.fancy-short-banner-twelve */}
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
                    <p className="text-lg tx-dark hero-heading fw-bold">Multibrass.</p>
                  </Link>
                </div>
              </div>
              {/* End .col */}

              <Footer2 />

              {/* <div className="col-xl-4 col-lg-5 mb-30 form-widget">
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
      {/* /.footer-style-nine */}
    </>
  );
};

export default AboutUsV4;
