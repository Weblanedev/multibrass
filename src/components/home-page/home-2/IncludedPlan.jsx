const cards = [
  {
    id: 1,
    icon: "/images/icon/icon_63.svg",
    title: "No. 1 Platform for Personal and Professional Growth",
    description:
      "At Multibrass, we pride ourselves on being the leading choice for guidance and counseling, symposiums, and workshops.",
    delayAnim: "100",
  },
  {
    id: 2,
    icon: "/images/icon/icon_64.svg",
    title: "Expertise and Experience",
    description:
      "Our team of experienced professionals is committed to delivering high-quality services that meet your unique needs.",
    delayAnim: "200",
  },
  {
    id: 3,
    icon: "/images/icon/icon_65.svg",
    title: "Comprehensive Support",
    description: "We offer a holistic approach to personal and professional development, combining counseling, educational events, and e-trade solutions.",
    delayAnim: "300",
  },
  {
    id: 4,
    icon: "/images/icon/icon_66.svg",
    title: "Proven Track Record of Success",
    description:
      "By choosing Multibrass, you become part of a vibrant community of professionals, experts, and like-minded individuals.",
    delayAnim: "100",
  },
  {
    id: 5,
    icon: "/images/icon/icon_67.svg",
    title: "Engaging and Interactive Learning Experiences",
    description:
      "We focus on creating engaging and dynamic sessions that provide valuable insights, foster networking opportunities, and encourage active participation.",
    delayAnim: "200",
  },
  {
    id: 6,
    icon: "/images/icon/icon_68.svg",
    title: "Personalized and Client-Centric Approach",
    description:
      "At Multibrass, you are not just a client; you are a valued partner. We take a personalized approach to every service, focusing on your individual needs and preferences.",
    delayAnim: "300",
  },
];

const IncludedPlan = () => {
  return (
    <>
      {cards.map((card) => (
        <div
          className="col-lg-4 col-sm-6 d-flex"
          key={card.id}
          data-aos="fade-up"
          data-aos-delay={card.delayAnim}
        >
          <div className="card-style-eleven text-center text-lg-start w-100 mt-110 lg-mt-50 xs-mt-40">
            <div className="icon d-flex align-items-center justify-content-center position-relative rounded-circle">
              <img src={card.icon} alt="illustration" className="lazy-img" />
            </div>
            <h4 className="mt-30 mb-20 lg-mb-10">{card.title}</h4>
            <p>{card.description}</p>
          </div>
          {/* /.card-style-eleven */}
        </div>
      ))}
    </>
  );
};

export default IncludedPlan;
