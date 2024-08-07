const Faq = () => {
  const faqData = [
    {
      question: "What services does Multibrass offer?",
      answer:
        "Multibrass provides a range of services including guidance and counseling, organizing symposiums and workshops, We aim to meet various needs through comprehensive and tailored solutions.",
    },
    {
      question: "How can I contact Multibrass for support or inquiries?",
      answer:
        "You can reach out to us through our contact form on the website. Our customer support team is available to assist you with any questions or concerns.",
    },
    {
      question: "What types of guidance and counseling services do you offer?",
      answer:
        "We offer individual and group counseling sessions, career guidance, and life coaching. Our services are designed to support personal growth, resolve challenges, and achieve your goals through professional and empathetic support.",
    },
    {
      question: "How can I book a counseling session?",
      answer:
        "You can book a counseling session by visiting our website and filling out the appointment request form. Alternatively, you can contact us directly via email or phone to schedule a session.",
    },
    {
      question: "What types of symposiums and workshops do you organize?",
      answer:
        "We organize a variety of symposiums and workshops covering topics such as personal development, industry trends, and professional skills. Our events are designed to provide valuable insights, networking opportunities, and practical knowledge.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept various payment methods including credit/debit cards, bank transfers, and other secure online payment options. Details of accepted payment methods are provided during the checkout process.",
    },
  ];
  

  return (
    <div className="accordion accordion-style-two" id="accordionOne">
      {faqData.map((faq, index) => (
        <div className="accordion-item" key={index}>
          <div className="accordion-header" id={`heading${index}`}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${index}`}
              aria-expanded="false"
              aria-controls={`collapse${index}`}
            >
              {faq.question}
            </button>
          </div>
          <div
            id={`collapse${index}`}
            className="accordion-collapse collapse"
            aria-labelledby={`heading${index}`}
            data-bs-parent="#accordionOne"
          >
            <div className="accordion-body">
              <p>{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
