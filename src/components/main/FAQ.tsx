import { useState } from "react";
import {Plus} from "lucide-react"

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
    <div className="max-w-3xl mx-auto p-4 mt-10">
      <p className="text-lg text-deep text-center mb-8">| FAQS</p>
      <h1 className="text-2xl sm:text-4xl font-medium mb-5 text-center">Frequently Asked Questions</h1>
      <p className='pElement text-center px-10 my-2.5 text-text text-base sm:text-xl font-semibold'>Have a question about how FOURDEV work or what we offer we've got answer</p>
      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div key={index} className="border mx-5 transform transition-transform border-gray-200 rounded-2xl overflow-hidden">
            <button
              className="cursor-pointer w-[100%] text-left flex justify-between items-center max-sm:p-2 p-3 bg-gray-50 transition-colors"
              onClick={() => toggleAccordion(index)}
            >
              <h2 className="text-lg">{item.question}</h2>
              <span
                className={`sm:p-2 flex justify-center items-center rounded-full bg-black text-white`}
              >
                <Plus size={30} className={`${openIndex === index ? "rotate-315" : ""} transition-transform duration-500`} />
              </span>

            </button>
            
            <div
              className={`${openIndex === index ? "open" : "close"} overflow-hidden`}
            >
              <p className="px-4 pb-4 text-text max-sm:text-lg">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;