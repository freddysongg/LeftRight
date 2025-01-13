import { Share2 } from 'lucide-react';
import { AlignmentResult } from '@/lib/calculate-alignment';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface ResultScreenProps {
  result: AlignmentResult;
  onRestart: () => void;
}

export function ResultScreen({ result, onRestart }: ResultScreenProps) {
  const democratPercent = Math.round(result.democrat * 100);
  const republicanPercent = Math.round(result.republican * 100);

  return (
    <Card className="w-full p-4 sm:p-8">
      <h2 className="mb-6 text-center text-xl font-bold sm:text-2xl">
        Your Results
      </h2>

      <div className="mb-8 space-y-4">
        <div>
          <div className="mb-2 flex justify-between text-sm sm:text-base">
            <span className="font-medium text-blue-600">Democrat</span>
            <span>{democratPercent}%</span>
          </div>
          <Progress
            value={democratPercent}
            className="h-2 bg-gray-200 sm:h-3"
          />
        </div>

        <div>
          <div className="mb-2 flex justify-between text-sm sm:text-base">
            <span className="font-medium text-red-600">Republican</span>
            <span>{republicanPercent}%</span>
          </div>
          <Progress
            value={republicanPercent}
            className="h-2 bg-gray-200 sm:h-3"
          />
        </div>
      </div>

      <p className="mb-6 text-center text-base sm:text-lg">
        You align more with the{' '}
        <span className="font-bold text-primary">
          {result.primaryAlignment === 'democrat' ? 'Democratic' : 'Republican'}
        </span>{' '}
        party!
      </p>

      <div className="flex gap-4">
        <Button
          onClick={onRestart}
          variant="outline"
          className="flex-1 text-sm sm:text-base"
        >
          Try Again
        </Button>
        <Button className="flex-1 gap-2 text-sm sm:text-base">
          <Share2 className="h-4 w-4" />
          Share
        </Button>
      </div>
    </Card>
  );
}
