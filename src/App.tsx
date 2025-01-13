import { useState, useEffect } from 'react';
import { questions, Question } from '@/lib/questions';
import { calculateAlignment, AlignmentResult } from '@/lib/calculate-alignment';
import { CardStack } from '@/components/CardStack';
import { ResultScreen } from '@/components/ResultScreen';
import { Toaster } from '@/components/ui/toaster';
import { shuffle } from 'lodash';
import { useDeviceType } from './hooks/use-device-type';

export default function App() {
  const [responses, setResponses] = useState<
    Array<{ questionId: string; agreed: boolean }>
  >([]);
  const [gameComplete, setGameComplete] = useState(false);
  const [randomQuestions, setRandomQuestions] = useState<Question[]>([]);
  const [alignmentResult, setAlignmentResult] =
    useState<AlignmentResult | null>(null);

  const deviceType = useDeviceType();
  const paddingB =
    deviceType === 'mobile'
      ? 'pt-[calc(100vh-95vh)]'
      : deviceType === 'tablet'
        ? 'pt-[calc(100vh-97vh)]'
        : 'pt-[calc(100vh-98vh)]';

  const paddingT =
    deviceType === 'mobile'
      ? 'pb-[calc(100vh-70vh)]'
      : deviceType === 'tablet'
        ? 'pb-[calc(100vh-65vh)]'
        : 'pb-[calc(100vh-97vh)]';

  const shuffleQuestions = () => {
    const categories = ['Economic', 'Social', 'Foreign', 'Domestic'];
    const selectedQuestions: Question[] = [];

    categories.forEach((category) => {
      const categoryQuestions = questions.filter(
        (q) => q.category === category
      );
      const shuffled = shuffle(categoryQuestions);
      selectedQuestions.push(...shuffled.slice(0, 3));
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
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Header */}
      <header className="flex-shrink-0 pt-4 text-center sm:pt-6 md:pt-8">
        <h1 className="mb-2 text-2xl font-bold sm:text-3xl md:text-4xl">
          LeftRight
        </h1>
        <p className="text-sm text-muted-foreground sm:text-base">
          Swipe right to agree, left to disagree
        </p>
      </header>

      {/* Main Content */}
      <main
        className={`flex-1 flex items-center justify-center ${paddingB} overflow-hidden`}
      >
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

      {/* Footer */}
      <footer
        className={`flex-shrink-0 text-center text-xs text-muted-foreground sm:text-sm ${paddingT}`}
      >
        Made for fun, not serious metrics
      </footer>
      <Toaster />
    </div>
  );
}
