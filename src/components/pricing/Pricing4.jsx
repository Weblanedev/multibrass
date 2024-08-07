import React from "react";
import { Link } from "react-router-dom";

const pricingData = [
  {
    name: "Basic Support Plan",
    details: "For individuals",
    background: "#FFF7EB",
    price: "110",
    monthlyText: "",
    renewalText: "",
    features: [
      "One 60-minute Counseling Session",
      "Access to Online Resources",
      "Email & Live chat Support",
      "Monthly Group Support Session",
      "Progress Tracking",
    ],
  },
  {
    name: "Comprehensive Support Plan",
    details: "For Teams",
    background: "#E2F2FD",
    price: "280",
    monthlyText: "",
    renewalText: "",
    features: [
        "Three 60-minute Counseling Session",
        "Access to Online Resources",
        "Email & Live chat Support",
        "Monthly Group Support Session",
        "Personalized Action Plan",
        "Progress Tracking",
    ],
  },
  {
    name: "Premium Support Plan",
    details: "For Businesses",
    background: "#FFEBEB",
    price: "625",
    monthlyText: "",
    renewalText: "",
    features: [
        "Six 75-minute Counseling Session",
        "Access to Online Resources",
        "Email & Live chat Support",
        "Monthly Group Support Session",
        "Personalized Action Plan",
        "Progress Tracking",
        "1-on-1 Follow-up Session",
        
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
            style={{textAlign:'center', background: pricing.background}}
              className="top-banner"
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
