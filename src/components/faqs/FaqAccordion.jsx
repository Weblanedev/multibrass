const FaqAccordion = () => {
  const accordionItems = [
    {
      id: "faq-1",
      question: "What types of books are available in your online bookstore?",
      answer: "We offer a wide range of books, including textbooks, fiction, non-fiction, and journals across various subjects and interests."
    },
    {
      id: "faq-2",
      question: "How can I register for your educational events?",
      answer: "You can register for our symposiums, conferences, and workshops through our website. Contact us for more details."
    },
    {
      id: "faq-3",
      question: "What child care services do you provide?",
      answer: "We offer a crèche and child care support services designed to provide a safe and nurturing environment for young children."
    },
    {
      id: "faq-4",
      question: "How can I get in touch with a counselor?",
      answer: "You can contact our counseling services via email or phone to schedule an appointment with one of our professional counselors."
    },
    {
      id: "faq-5",
      question: "Do you offer online educational services?",
      answer: "Yes, we provide online tutoring and educational support services. Please visit our educational services page for more information."
    }
  ];
  

  return (
    <div className="accordion accordion-style-four" id="accordionOne">
      {accordionItems.map((item, index) => (
        <div className="accordion-item" key={item.id}>
          <div className="accordion-header" id={`heading-${index}`}>
            <button
              className={`accordion-button ${index === 2 ? "" : "collapsed"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse-${index}`}
              aria-expanded={index === 2 ? "true" : "false"}
              aria-controls={`collapse-${index}`}
            >
              <span>{`0${index + 1}.`}</span> {item.question}
            </button>
          </div>
          <div
            id={`collapse-${index}`}
            className={`accordion-collapse collapse ${
              index === 2 ? "show" : ""
            }`}
            aria-labelledby={`heading-${index}`}
            data-bs-parent="#accordionOne"
          >
            <div className="accordion-body">
              <p>{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;
