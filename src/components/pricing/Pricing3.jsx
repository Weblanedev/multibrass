import React from "react";
import { Link } from "react-router-dom";

const pricingData = [
  {
    name: "Basic Plan",
    details: "For individuals",
    background: "#FFF7EB",
    price: "120",
    monthlyText: "Single paticipant",
    renewalText: "",
    features: [
      "Access to All Basic Workshops",
      "5 Hours of Online Sessions",
      "Certificate of Participation",
      "Email & Live chat Support",
      "Workshop Materials",
      "Discount on Future Workshops",
    ],
  },
  {
    name: "Advanced Plan",
    details: "For Teams",
    background: "#E2F2FD",
    price: "350",
    monthlyText: "For team of 4",
    renewalText: "",
    features: [
      "Access to All Workshops",
      "10 Hours of Online Sessions",
      "Certificate of Excellence",
      "Email & Live Chat Support",
      "Workshop Materials",
      "1-on-1 Mentoring Session",
      "Discount on Future Workshops"
    ],
  },
  {
    name: "Premium Plan",
    details: "For Businesses",
    background: "#FFEBEB",
    price: "975",
    monthlyText: "",
    renewalText: "",
    features: [
      "Access to All Workshops",
      "16 Hours of Online Sessions",
      "Certificate of Excellence",
      "Email & Live Chat Support",
      "Workshop Materials",
      "1-on-1 Mentoring Session",
      "Discount on Future Workshops"
    ],
  },
];

const Pricing3 = () => {
  return (
    <>
      {pricingData.map((pricing, index) => (
        <div key={index} className={`col-lg-4 col-md-6 `}>
          <div
            className="pr-table-wrapper mt-40"
            data-aos="fade-up"
            data-aos-delay={`0.${index + 1}s`}
          >
            <div className="pack-name fw-500 tx-dark">{pricing.name}</div>
            <div className="pack-details text-uppercase fs-14">
              {pricing.details}
            </div>
            <div
              className="top-banner align-items-center d-md-flex"
              style={{ background: pricing.background }}
            >
              <div className="price fw-500">
                <sup>$</sup>
                {pricing.price}
              </div>
              <div>
                <span>{pricing.monthlyText}</span>
                <em className="d-block">{pricing.renewalText}</em>
              </div>
            </div>
            <ul className="pr-feature style-none">
              {pricing.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <Link to="/checkout" className="trial-button" onClick={() => {
              localStorage.setItem("name", pricing.name)
              localStorage.setItem("price", pricing.price)
            }}>
              Register
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default Pricing3;
