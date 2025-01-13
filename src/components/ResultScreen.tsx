import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlignmentResult } from '@/lib/calculate-alignment';
import { Share2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useDeviceType } from '@/hooks/use-device-type';
import { useNavigate } from 'react-router-dom';

interface ResultScreenProps {
  result: AlignmentResult;
  onRestart: () => void;
}

export function ResultScreen({ result, onRestart }: ResultScreenProps) {
  const { toast } = useToast();
  const deviceType = useDeviceType();
  const navigate = useNavigate();

  const handleShare = async () => {
    const shareUrl = window.location.href;

    if (deviceType === 'mobile' && navigator.share) {
      try {
        await navigator.share({
          title: 'Check out my Political Alignment!',
          text: `I align more with the ${
            result.primaryAlignment === 'democrat' ? 'Democratic' : 'Republican'
          } party!`,
          url: shareUrl,
        });
        console.log('Shared successfully!');
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareUrl);
        toast({
          title: 'Link Copied!',
          description: 'The link has been copied to your clipboard.',
          variant: 'default',
        });
        navigate('/');
      } catch (error) {
        console.error('Error copying link:', error);
        toast({
          title: 'Error',
          description: 'Failed to copy the link. Please try again.',
          variant: 'destructive',
        });
      }
    }
  };

  const democratPercent = Math.round(result.democrat);
  const republicanPercent = Math.round(result.republican);

  return (
    <Card className="w-full p-6 sm:p-8">
      {/* Heading */}
      <h2 className="mb-6 text-center text-2xl font-bold sm:text-3xl">
        Your Results
      </h2>

      {/* Main Alignment Bar */}
      <div className="mb-5">
        <div className="mb-4 flex justify-between items-center text-lg sm:text-xl font-semibold">
          <span className="text-blue-600">{democratPercent}% Democrat</span>
          <span className="text-red-600">{republicanPercent}% Republican</span>
        </div>
        <div className="relative h-4 sm:h-5 bg-gray-200 rounded-lg overflow-hidden">
          <div
            style={{ width: `${democratPercent}%` }}
            className="absolute left-0 h-full bg-blue-600"
          />
          <div
            style={{ width: `${republicanPercent}%` }}
            className="absolute right-0 h-full bg-red-600"
          />
        </div>
        <p className="mt-4 text-center text-lg sm:text-xl font-medium">
          You align more with the{' '}
          <span className="font-bold text-primary">
            {result.primaryAlignment === 'democrat'
              ? 'Democratic'
              : 'Republican'}
          </span>{' '}
          party!
        </p>
      </div>

      {/* Secondary Category Alignment */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-muted-foreground text-center">
          Category Breakdown
        </h3>
        <div className="space-y-2">
          {Object.entries(result.categoryAlignment).map(
            ([category, alignment]) => (
              <div key={category} className="space-y-1">
                <p className="text-center font-medium capitalize text-sm sm:text-base text-muted-foreground">
                  {category}
                </p>
                <div className="relative h-2 bg-gray-100 rounded overflow-hidden">
                  <div
                    style={{ width: `${Math.round(alignment.democrat)}%` }}
                    className="absolute left-0 h-full bg-blue-300"
                  />
                  <div
                    style={{ width: `${Math.round(alignment.republican)}%` }}
                    className="absolute right-0 h-full bg-red-300"
                  />
                </div>
                <div className="mt-1 flex justify-between text-xs sm:text-sm text-muted-foreground">
                  <span className="text-blue-600">Democrat</span>
                  <span className="text-red-600">Republican</span>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-5 flex gap-4">
        <Button
          onClick={onRestart}
          variant="outline"
          className="flex-1 text-sm sm:text-base"
        >
          Try Again
        </Button>
        <Button
          onClick={handleShare}
          className="flex-1 gap-2 text-sm sm:text-base"
        >
          <Share2 className="h-4 w-4" />
          Share
        </Button>
      </div>
    </Card>
  );
}
