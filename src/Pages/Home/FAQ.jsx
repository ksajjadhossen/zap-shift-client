import React from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "How can I track my parcel?",
      answer:
        "You can track your parcel by entering the tracking ID in the 'Track Your Parcel' section on our homepage. You will get real-time updates on your shipment's status.",
    },
    {
      question: "What are the delivery charges?",
      answer:
        "Delivery charges depend on the weight, dimensions, and destination of the parcel. You can check our pricing page for a detailed rate card.",
    },
    {
      question: "How do I become a merchant?",
      answer:
        "To become a merchant, simply sign up on our platform, verify your business details, and start shipping. We offer special rates for registered merchants.",
    },
    {
      question: "Is there insurance for valuable items?",
      answer:
        "Yes, we offer insurance coverage for valuable items. Please declare the value of your shipment during booking to avail of this service.",
    },
    {
      question: "What is the delivery time?",
      answer:
        "For inside Dhaka, we offer 24-48 hour delivery. For nationwide delivery, it typically takes 3-5 business days.",
    },
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center text-[#003C3C] mb-4">
          Frequently Asked Question (FAQ)
        </h2>
        <p className="text-center text-gray-500 mb-12">
          Find answers to common questions about our services and policies.
        </p>

        <div className="join join-vertical w-full bg-white rounded-2xl shadow-sm">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="collapse collapse-arrow join-item border-base-300 border-b last:border-none"
            >
              <input type="radio" name="my-accordion-4" defaultChecked={index === 0} />
              <div className="collapse-title text-lg font-medium text-[#003C3C] py-6">
                {faq.question}
              </div>
              <div className="collapse-content text-gray-500">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="btn bg-[#B6F01E] hover:bg-[#a3d61b] text-black border-none rounded-full px-8 font-bold flex items-center gap-2 mx-auto">
            See More FAQ's
            <span className="bg-black text-white rounded-full p-1 w-6 h-6 flex items-center justify-center text-xs">
              ↗
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
