import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const Product = () => {
  const [count, setCount] = useState(0); 

  const updateCount = (num) => {
    setCount((num));
  };

  const faqData = [
    {
      question: 'How do I get started?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam adipisci iusto aperiam? Sint asperiores sequi nobis inventore ratione deleniti?',
    },
    {
      question: 'What is the difference between a free and paid account?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam adipisci iusto aperiam? Sint asperiores sequi nobis inventore ratione deleniti?',
    },
    {
      question: 'How do I get started?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam adipisci iusto aperiam? Sint asperiores sequi nobis inventore ratione deleniti?',
    },
    {
      question: 'What is the difference between a free and paid account?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam adipisci iusto aperiam? Sint asperiores sequi nobis inventore ratione deleniti?',
    },
    {
      question: 'How do I get started?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam adipisci iusto aperiam? Sint asperiores sequi nobis inventore ratione deleniti?',
    },
    {
      question: 'What is the difference between a free and paid account?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam adipisci iusto aperiam? Sint asperiores sequi nobis inventore ratione deleniti?',
    },
  ];
  
  return (
    <section className="mx-auto max-w-7xl px-2 py-10 md:px-0">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-900 lg:mx-auto">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, assumenda
        </p>
      </div>
      <div className="mx-auto mt-8 max-w-3xl space-y-4 md:mt-16">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="cursor-pointer rounded-md border border-gray-900 shadow-lg transition-all duration-200"
          >
            <button
              type="button"
              onClick={() => updateCount(index)}
              className="flex w-full items-center justify-between px-4 py-5 sm:p-6"
            >
              <span className="text-lg font-semibold text-black">{item.question}</span>
              {count === index ? 
                <ChevronUp className="h-5 w-5 text-gray-900" />
              : 
                <ChevronDown className="h-5 w-5 text-gray-900" />
              }
            </button>
            {count === index && (
              <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                <p className="text-gray-900">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;
