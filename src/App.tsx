import { useState, useEffect } from 'react';
import { questions, Question } from '@/lib/questions';
import { calculateAlignment, AlignmentResult } from '@/lib/calculate-alignment';
import { CardStack } from '@/components/CardStack';
import { ResultScreen } from '@/components/ResultScreen';
import { shuffle } from 'lodash';

export default function App() {
  const [responses, setResponses] = useState<
    Array<{ questionId: string; agreed: boolean }>
  >([]);
  const [gameComplete, setGameComplete] = useState(false);
  const [randomQuestions, setRandomQuestions] = useState<Question[]>([]);
  const [alignmentResult, setAlignmentResult] =
    useState<AlignmentResult | null>(null);

  const shuffleQuestions = () => {
    const categories = ['Economic', 'Social', 'Foreign', 'Domestic'];
    const selectedQuestions: Question[] = [];

    categories.forEach((category) => {
      const categoryQuestions = questions.filter(
        (q) => q.category === category
      );
      const shuffled = shuffle(categoryQuestions);
      selectedQuestions.push(...shuffled.slice(0, 5));
    });

    setRandomQuestions(shuffle(selectedQuestions));
  };

  useEffect(() => {
    shuffleQuestions();
  }, []);

  const handleResponse = (questionId: string, agreed: boolean) => {
    const question = randomQuestions.find((q) => q.id === questionId);
    if (!question) return;

    setResponses((prev) => [...prev, { questionId, agreed }]);
    if (responses.length + 1 === randomQuestions.length) {
      const result = calculateAlignment(randomQuestions, responses);
      setAlignmentResult(result);
      setGameComplete(true);
    }
  };

  const handleRestart = () => {
    setResponses([]);
    setGameComplete(false);
    setAlignmentResult(null);
    shuffleQuestions();
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="flex-shrink-0 pt-4 text-center sm:pt-6 md:pt-8">
        <h1 className="mb-2 text-2xl font-bold sm:text-3xl md:text-4xl">
          LeftRight
        </h1>
        <p className="text-sm text-muted-foreground sm:text-base">
          Swipe right to agree, left to disagree
        </p>
      </header>

      <main className="flex flex-1 items-center justify-center">
        <div className="w-full max-w-[95vw] sm:max-w-[70vw] md:max-w-xl px-4">
          {!gameComplete ? (
            <CardStack
              questions={randomQuestions}
              onResponse={handleResponse}
            />
          ) : (
            alignmentResult && (
              <ResultScreen
                result={alignmentResult}
                onRestart={handleRestart}
              />
            )
          )}
        </div>
      </main>

      <footer className="flex-shrink-0 pb-6 text-center text-xs text-muted-foreground sm:pb-6 med:pb-8 sm:text-sm">
        Made for fun, not serious metrics
      </footer>
    </div>
  );
}
