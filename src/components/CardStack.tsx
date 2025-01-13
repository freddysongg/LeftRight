import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Question } from '@/lib/questions';
import { QuestionCard } from './QuestionCard';
import { useDeviceType } from '@/hooks/use-device-type';
import { cn } from '@/lib/utils';

interface CardStackProps {
  questions: Question[];
  onResponse: (questionId: string, agreed: boolean) => void;
}

export function CardStack({ questions, onResponse }: CardStackProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const deviceType = useDeviceType();

  const handleSwipe = (direction: 'left' | 'right') => {
    const question = questions[currentIndex];
    onResponse(question.id, direction === 'right');
    setCurrentIndex((prev) => prev + 1);
  };

  if (currentIndex >= questions.length) {
    return null;
  }

  return (
    <div
      className={cn(
        'relative mx-auto transition-all duration-300',
        deviceType === 'mobile'
          ? 'aspect-[4/5] w-full h-[calc(100vh-68vh)]'
          : deviceType === 'tablet'
            ? 'aspect-[3/4] w-full h-[calc(100vh-65vh)]'
            : 'aspect-[3/4] w-full max-w-md h-[calc(100vh-40vh)]'
      )}
    >
      <AnimatePresence>
        {questions
          .slice(currentIndex, currentIndex + 3)
          .reverse()
          .map((question, index) => (
            <QuestionCard
              key={question.id}
              question={question}
              onSwipe={handleSwipe}
              className={index === 2 ? 'z-20' : index === 1 ? 'z-10' : 'z-0'}
            />
          ))}
      </AnimatePresence>
    </div>
  );
}
