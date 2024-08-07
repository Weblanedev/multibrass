import React from "react";

const OurMission = () => {
  return (
    <>
      <div className="row align-items-end">
        <div className="col-lg-5 col-md-6 order-md-last ms-auto">
          <div className="feedback-block-thirteen mb-50" data-aos="fade-left">
            <div className="icon rounded-circle d-flex align-items-center justify-content-center">
              <img src="/images/icon/icon_42.svg" alt="icon" />
            </div>
            <p className="tx-dark mt-35 lg-mt-30 mb-45 lg-mb-30">
            At Multibrass, our mission is to empower individuals and communities through a diverse range of services and solutions.
            </p>
          </div>
          {/* /.feedback-block-thirteen */}
        </div>
        {/* End .col */}

        <div className="col-md-6 order-md-first" data-aos="fade-right">
          <div className="row align-items-end">
            <div className="col-sm-6">
              <div className="img-meta mb-50 lg-mb-40">
                <img
                  style={{ objectFit: "cover" }}
                  src="https://images.pexels.com/photos/6237898/pexels-photo-6237898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="media"
                  className="lazy-img w-100"
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="img-meta position-relative mb-50 lg-mb-40">
                <img
                  style={{ objectFit: "cover" }}
                  src="/images/media/img_98.jpg"
                  alt="media"
                  className="lazy-img w-100"
                />
                
                {/* /.rating */}
              </div>{" "}
              {/* /.img-meta */}
            </div>
          </div>
        </div>
        {/* End .col */}
      </div>
      {/* End .row */}
      <div className="row justify-content-end" data-aos="fade-up">
        <div className="col-sm-4">
          <div className="img-meta mb-50 lg-mb-40">
            <img
              style={{ objectFit: "cover" }}
              src="/images/media/img_99.jpg"
              alt="media"
              className="lazy-img w-100"
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="img-meta position-relative">
            <img
              style={{ objectFit: "cover" }}
              src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="media"
              className="lazy-img w-100"
            />
            {/* <div
              className="customer-data d-flex flex-column align-items-center justify-content-center"
              data-aos="fade-up"
            >
              <div className="fw-500 tx-dark amount">32k</div>
              <div className="fs-18 tx-dark">Customer</div>
            </div>{" "} */}
            {/* /.customer-data */}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurMission;
