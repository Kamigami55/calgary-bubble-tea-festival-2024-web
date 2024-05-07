import { type ReactElement, type ReactNode, useState } from 'react';

import { MinusIcon } from './MinusIcon';
import { PlusIcon } from './PlusIcon';

interface AccordionProps {
  items: {
    question: string;
    answer: ReactNode | string;
  }[];
}

function Accordion({ items }: AccordionProps): ReactElement {
  const [openQuestionIndex, setOpenQuestionIndex] = useState<number>();

  const toggleQuestionOpen = (index: number) => {
    setOpenQuestionIndex((currentIndex) =>
      currentIndex === index ? undefined : index
    );
  };

  return (
    <div className="space-y-5">
      {items.map((item, index) => (
        <div
          className="rounded-[5px] bg-surfacePrimary px-6 py-5"
          key={item.question}
        >
          <button
            className="flex w-full cursor-pointer items-center justify-between"
            onClick={() => toggleQuestionOpen(index)}
            aria-expanded={openQuestionIndex === index ? true : false}
          >
            <span className="text-body1regular">{item.question}</span>
            {openQuestionIndex === index ? <MinusIcon /> : <PlusIcon />}
          </button>
          <div
            className={`overflow-hidden transition-all ease-out ${
              openQuestionIndex === index
                ? 'mt-2 max-h-screen opacity-100'
                : 'max-h-0 pt-0 opacity-0'
            }`}
          >
            <p className="text-body2">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export { Accordion };
export type { AccordionProps };
