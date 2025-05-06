
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  toggleItem: () => void;
}

const AccordionItem = ({ title, children, isOpen = false, toggleItem }: AccordionItemProps) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-4 text-left font-medium focus:outline-none"
        onClick={toggleItem}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <ChevronDown
          size={20}
          className={cn(
            "transition-transform duration-200",
            isOpen ? "transform rotate-180" : ""
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96 pb-4" : "max-h-0"
        )}
      >
        <div className="prose prose-sm max-w-none text-gray-600">{children}</div>
      </div>
    </div>
  );
};

interface AccordionProps {
  items: {
    title: string;
    content: React.ReactNode;
  }[];
}

const Accordion = ({ items }: AccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="divide-y divide-gray-200">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          isOpen={openIndex === index}
          toggleItem={() => toggleItem(index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;
