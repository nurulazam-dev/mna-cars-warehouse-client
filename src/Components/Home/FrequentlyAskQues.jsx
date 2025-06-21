import React, { useState } from "react";

const faqs = [
  {
    question: "What types of cars do you have in your warehouse?",
    answer:
      "We stock a wide range of vehicles including used cars, imports, modern classics, and family vehicles. Our inventory is updated regularly to offer the best selection.",
  },
  {
    question: "Are all vehicles inspected before sale?",
    answer:
      "Yes, every car undergoes a comprehensive multi-point inspection and is fully certified by our expert mechanics before being listed for sale.",
  },
  {
    question: "Can I book a test drive online?",
    answer:
      "Absolutely! You can book a test drive through our website or by calling our customer service. We’ll confirm your appointment and have the car ready for you.",
  },
  {
    question: "Do you offer financing options?",
    answer:
      "Yes, we offer flexible financing solutions to suit your needs. Our team will help you find the best plan, whether you’re buying for personal or business use.",
  },
  {
    question: "Is nationwide delivery available?",
    answer:
      "Yes, we provide safe and reliable nationwide delivery for all vehicles purchased from our warehouse.",
  },
  {
    question: "What documents do I need to buy a car?",
    answer:
      "You’ll need a valid driver’s license, proof of address, and payment method. Our team will guide you through the entire process.",
  },
];

const FrequentlyAskQues = () => {
  const [openIdx, setOpenIdx] = useState(null);

  const handleToggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-4" style={{ background: "#f8fafc" }}>
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-lg-8 text-center">
            <h2 className="fw-bold mb-3 animate__animated animate__fadeInDown">
              <i className="bi bi-question-circle text-primary me-2"></i>
              Frequently Asked Questions
            </h2>
            <p className="text-secondary fs-5 animate__animated animate__fadeIn animate__delay-1s">
              Find answers to the most common questions about our car warehouse,
              services, and buying process.
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="faq-list animate__animated animate__fadeInUp animate__delay-2s">
              {faqs.map((faq, idx) => (
                <div
                  className={`faq-card mb-3 p-0 border-0 shadow-sm rounded-4 ${
                    openIdx === idx ? "open" : ""
                  }`}
                  key={idx}
                  style={{
                    background: "#fff",
                    transition: "box-shadow 0.3s",
                  }}
                >
                  <button
                    className={`faq-toggle w-100 text-start d-flex align-items-center px-4 py-3 border-0 bg-transparent fw-bold fs-5`}
                    onClick={() => handleToggle(idx)}
                    aria-expanded={openIdx === idx}
                    style={{
                      outline: "none",
                      borderRadius: "1.2rem",
                      background: openIdx === idx ? "#e9f5ff" : "#f8fafc",
                      transition: "background 0.3s",
                    }}
                  >
                    <span className="me-3">
                      <i
                        className={`bi ${
                          openIdx === idx
                            ? "bi-chevron-down text-primary"
                            : "bi-chevron-right text-secondary"
                        } fs-4`}
                      ></i>
                    </span>
                    {faq.question}
                  </button>
                  <div
                    className={`faq-answer px-4 pb-3 ${
                      openIdx === idx
                        ? "animate__animated animate__fadeIn"
                        : "d-none"
                    }`}
                  >
                    <div className="text-secondary">{faq.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrequentlyAskQues;
