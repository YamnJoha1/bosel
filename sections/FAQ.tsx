"use client";

import { useState, useRef } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { faqs } from "@/constants";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-full px-6 sm:px-10 md:px-16 lg:px-24 xl:px-40 py-10 max-container flex flex-col items-center text-center">
      <h2 className="text-3xl font-bold text-center mb-10 title-section text-primary">Fragst du an?</h2>
      <div className="space-y-4 w-full m-5 my-7">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          const contentHeight = contentRefs.current[index]?.scrollHeight ?? 0;

          return (
            <Card
              key={index}
              onClick={() => toggle(index)}
              className="rounded-2xl w-[70%] shadow-md mx-auto border-none cursor-pointer max-h-fit transition-all duration-300 ease-in-out"
            >
              <div className="flex items-baseline-last justify-between px-4 min-h-[28px] h-[28px] text-left text-lg font-medium">
                <span className="flex-1">{faq.question}</span>
                {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </div>

              <CardContent
                ref={(el) => {
                  contentRefs.current[index] = el;
                }}
                style={{
                  maxHeight: isOpen ? `${contentHeight + 24}px` : "0px",
                }}
                className={`transition-all duration-500 ease-in-out text-left text-gray-700 px-4 pt-0 overflow-hidden ${
                  isOpen ? "py-2" : "py-0"
                }`}
              >
                {faq.answer}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
