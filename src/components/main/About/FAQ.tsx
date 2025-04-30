import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "What kind of project can I submit to FOURDEV?",
      answer: "Material Tailwind is a components library that combines the best of Material Design with Tailwind CSS."
    },
    {
      question: "How long does it take to get a response after submiting a gigs?",
      answer: "Install the package and import components as needed. Follow the official documentation for implementation details."
    },
    {
      question: "Do you work for a client outside or inside a country or international?",
      answer: "You can build beautiful, responsive UIs with pre-styled components that follow Material Design principles."
    },
    {
      question: "What happens after I submit my project?",
      answer: "You can build beautiful, responsive UIs with pre-styled components that follow Material Design principles."
    },
    {
      question: "How can I track the status of my project?",
      answer: "You can build beautiful, responsive UIs with pre-styled components that follow Material Design principles."
    }
  ];

  return (
    <div className="max-w-2xl mx-auto p-4 mt-10">
      <h1 className="max-sm:text-2xl text-5xl font-semibold mb-5 text-center">Frequently Asked Questions</h1>
      <p className='pElement px-7 my-2.5 text-zinc-800 max-sm:text-[15px] font-semibold'>Have a question about how FOURDEV work or what we offer we've got answer</p>
      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div key={index} className="border mx-5 transform transition-transform border-gray-200 rounded-2xl overflow-hidden">
            <button
              className="w-[100%] text-left flex justify-between items-center max-sm:p-2 p-3 px= bg-gray-50 transition-colors"
              onClick={() => toggleAccordion(index)}
            >
              <h2 className="w-[82%] text-[18px] font-medium">{item.question}</h2>
              <span
                className="w-11 max-sm:h-11 max-sm:w-11 h-11 flex justify-center max-sm:text-3xl text-4xl font-bold rounded-full bg-black text-white"
              >
                {openIndex === index ? "−" : "+"}
              </span>

            </button>
            
            <div
              className={`px-4 pb-4 ${openIndex === index ? "block" : "hidden"}`}
            >
              <p className="text-gray-700 max-sm:text-[17px]">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;