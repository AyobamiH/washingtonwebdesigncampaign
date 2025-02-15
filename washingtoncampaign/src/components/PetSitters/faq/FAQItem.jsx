
import React, { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="border-b border-gray-200 py-4 bg-[#f0f8ff] p-8   sm:bg-white   rounded-lg ">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => {setIsOpen(!isOpen), toggleFAQ(index)} }
      >
        <h3 className=" text-2xl font-bold mb-4">{question}</h3>
        <p className="text-2xl">{isOpen ? "−" : "+"}</p>
      </button>
      {isOpen && <p className="mt-2 text-lg text-gray-700 font-roboto-mono">{answer}</p>}
    </div>
  );
};

export default FAQItem;
