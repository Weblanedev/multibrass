const accordionItems = [
  {
    id: 1,
    icon: "/images/icon/icon_108.svg",
    title: "Comprehensive Services",
    content:
      "From an extensive online bookstore to specialized educational services and child care support, we cover every aspect to ensure a holistic approach.",
  },
  {
    id: 2,
    icon: "/images/icon/icon_109.svg",
    title: "Personalized Attention",
    content:
      "Our services are tailored to provide personalized attention, ensuring that you receive the support and resources you need to succeed.",
  },
  {
    id: 3,
    icon: "/images/icon/icon_110.svg",
    title: "Quality Resources",
    content:
      "Our bookstore and publication services offer high-quality books and journals that cater to a wide range of interests and academic needs.",
  },
];

const WhyChoose = () => {
  return (
    <div className="accordion accordion-style-five md-mb-70" id="accordionOne">
      {accordionItems.map((item) => (
        <div className="accordion-item" key={item.id}>
          <div className="accordion-header" id={`heading${item.id}`}>
            <button
              className={`accordion-button ${item.id === 2 ? "" : "collapsed"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${item.id}`}
              aria-expanded={item.id === 2 ? "true" : "false"}
              aria-controls={`collapse${item.id}`}
            >
              <img src={item.icon} alt="" className="me-3" /> {item.title}
            </button>
          </div>
          <div
            id={`collapse${item.id}`}
            className={`accordion-collapse collapse${
              item.id === 2 ? " show" : ""
            }`}
            aria-labelledby={`heading${item.id}`}
            data-bs-parent="#accordionOne"
          >
            <div className="accordion-body">
              <p>{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhyChoose;
