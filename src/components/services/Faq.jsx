const accordionItems = [
  {
    id: 1,
    title: "Online Bookstore",
    content:
      "Explore our extensive collection of books, journals, and educational materials. Find resources for every age and interest, curated to enhance learning and development.",
  },
  {
    id: 2,
    title: "Educational Services",
    content:
      "Our expert team provides personalized tutoring, test preparation, and academic guidance. Empowering students to achieve their full potential with tailored support.",
  },
  {
    id: 3,
    title: "Child Care Support and Creche",
    content:
      "Providing a safe and nurturing environment for your little ones. Our child care services ensure your children receive the care and attention they need while you focus on your day.",
  },
];

const Faq = () => {
  return (
    <div className="accordion accordion-style-two md-mt-60" id="accordionOne">
      {accordionItems.map((item) => (
        <div className="accordion-item" key={item.id}>
          <div className="accordion-header" id={`heading${item.id}`}>
            <button
              className={`accordion-button ${item.id === 2 ? "" : "collapsed"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${item.id}`}
              aria-expanded={item.id === 1 ? "true" : "false"}
              aria-controls={`collapse${item.id}`}
            >
              {item.title}
            </button>
          </div>
          <div
            id={`collapse${item.id}`}
            className={`accordion-collapse collapse${
              item.id === 1 ? " show" : ""
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

export default Faq;
