import { Link } from "react-router-dom";

const FancyBanner = () => {
  const bannerData = [
    {
      title: "Guidance and Counseling",
      mainTitle: "Empower Your Journey with Expert Guidance.",
      description:
        "At Multibrass, we understand that life can present a myriad of challenges and decisions. Our comprehensive guidance and counseling services are designed to support you through every step of your journey. Whether you are seeking personal growth, career advice, or emotional support, our team of experienced counselors is here to provide you with the tools and insights you need to navigate life's complexities.",
      buttonLabel: "Click here to learn more",
      link: "/our-counseling",
      illustration: "/images/assets/ils_06.png",
      illustrationAlt: "illustration",
      illustrationPosition: "right",
      aos: "fade-right",
    },
    {
      title: "Workshops",
      mainTitle: "Unlock New Skills and Insights with Our Expert-Led Workshops",
      description:
        "At Multibrass, we are committed to fostering personal and professional growth through our engaging and informative workshops. Our workshops cover a wide range of topics, from career development and leadership skills to personal wellness and creative pursuits. Led by industry experts and seasoned professionals, these sessions are designed to provide you with practical knowledge and hands-on experience.",
      buttonLabel: "Click here to learn more",
      link: "/our-workshops",
      illustration: "/images/assets/ils_07.png",
      illustrationAlt: "illustration",
      illustrationPosition: "left",
      aos: "fade-left",
    },
  ];

  return (
    <div className="fancy-feature-twentyFour mt-225 lg-mt-130">
      <div className="container">
        {bannerData.map((data, index) => (
          <div className="block-style-four mt-200 lg-mt-100" key={index}>
            <div className="row align-items-center">
              <div
                className={`col-xl-5 col-lg-6 order-lg-${
                  data.illustrationPosition === "left" ? "first" : "last"
                }`}
                data-aos={data.aos}
              >
                <div className="title-style-eight">
                  <div className="sc-title text-uppercase">{data.title}</div>
                  <h2 className="main-title tx-dark fw-bold">
                    {data.mainTitle}
                  </h2>
                </div>
                <p className="fs-20 lh-lg mt-35 lg-mt-20">{data.description}</p>
                {data.buttonLabel !== "" && (
                  <Link
                    to={`${data.link}`}
                    className="btn-fifteen fw-500 position-relative d-inline-flex align-items-center"
                  >
                    <span>{data.buttonLabel}</span>
                    <img
                      src="/images/icon/icon_69.svg"
                      alt={data.illustrationAlt}
                      className="ms-2"
                    />
                  </Link>
                )}
              </div>
              <div
                className={`col-xl-7 col-lg-6 col-md-8 m-auto order-lg-${
                  data.illustrationPosition === "left" ? "last" : "first"
                }`}
                data-aos={data.aos}
              >
                <div className="illustration-holder md-mt-60">
                  <img
                    src={data.illustration}
                    alt={data.illustrationAlt}
                    className="lazy-img"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FancyBanner;
