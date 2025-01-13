import { useState, useEffect } from 'react';
import { questions } from '@/lib/questions';
import { calculateAlignment } from '@/lib/calculate-alignment';
import { CardStack } from '@/components/CardStack';
import { ResultScreen } from '@/components/ResultScreen';
import { useDeviceType } from '@/hooks/use-device-type';
import { cn } from './lib/utils';

export default function App() {
  const [responses, setResponses] = useState<
    Array<{ questionId: string; agreed: boolean }>
  >([]);
  const [gameComplete, setGameComplete] = useState(false);
  const [randomQuestions, setRandomQuestions] = useState(questions);
  const deviceType = useDeviceType();

  useEffect(() => {
    const shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
    setRandomQuestions(shuffledQuestions.slice(0, 20));
  }, []);

  const handleResponse = (questionId: string, agreed: boolean) => {
    console.log(`Question ID: ${questionId}, Agreed: ${agreed}`);

    setResponses((prev) => [...prev, { questionId, agreed }]);
    if (responses.length + 1 === randomQuestions.length) {
      setGameComplete(true);
    }
  };

  const handleRestart = () => {
    setResponses([]);
    setGameComplete(false);

    // Reshuffle questions on restart
    const shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
    setRandomQuestions(shuffledQuestions.slice(0, 20));
  };

  return (
    <div className="flex min-h-screen flex-col items-center bg-gradient-to-b from-background to-muted px-4 py-8">
      <header className="pt-4 text-center sm:pt-6 md:pt-8">
        <h1 className="mb-2 text-2xl font-bold sm:text-3xl md:text-4xl">
          LeftRight
        </h1>
        <p className="text-sm text-muted-foreground sm:text-base">
          Swipe right to agree, left to disagree
        </p>
      </header>

      <main className="flex w-full flex-1 items-center justify-center py-12 sm:py-16 md:py-20">
        <div
          className={cn(
            'w-full transition-all duration-300',
            deviceType === 'mobile'
              ? 'max-w-[95vw]'
              : deviceType === 'tablet'
                ? 'max-w-[70vw]'
                : 'max-w-xl'
          )}
        >
          {!gameComplete ? (
            <CardStack
              questions={randomQuestions}
              onResponse={handleResponse}
            />
          ) : (
            <ResultScreen
              result={calculateAlignment(randomQuestions, responses)}
              onRestart={handleRestart}
            />
          )}
        </div>
      </main>

      <footer className="pb-4 text-center text-xs text-muted-foreground sm:pb-6 sm:text-sm md:pb-8">
        Made for fun, not serious metrics
      </footer>
    </div>
  );
}
