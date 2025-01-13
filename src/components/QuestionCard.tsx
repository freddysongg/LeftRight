import { motion, PanInfo, useMotionValue, useTransform } from 'framer-motion';
import { Question } from '@/lib/questions';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';
import { useDeviceType } from '@/hooks/use-device-type';

interface QuestionCardProps {
  question: Question;
  onSwipe: (direction: 'left' | 'right') => void;
  className?: string;
}

export function QuestionCard({
  question,
  onSwipe,
  className,
}: QuestionCardProps) {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-30, 30]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0]);
  const backgroundColor = useTransform(
    x,
    [-200, -100, 0, 100, 200],
    [
      'rgba(220, 38, 38, 0.8)', // Strong red
      'rgba(220, 38, 38, 0.5)', // Muted red
      'rgba(255, 255, 255, 1)', // Neutral (white)
      'rgba(37, 99, 235, 0.5)', // Muted blue
      'rgba(37, 99, 235, 0.8)', // Strong blue
    ]
  );

  const deviceType = useDeviceType();
  const paddingY =
    deviceType === 'mobile'
      ? 'py-[2vh]'
      : deviceType === 'tablet'
        ? 'py-[3vh]'
        : 'py-[5vh]';
  const textSize =
    deviceType === 'mobile'
      ? 'text-base'
      : deviceType === 'tablet'
        ? 'text-xl'
        : 'text-xl';

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (Math.abs(info.offset.x) > 100) {
      onSwipe(info.offset.x > 0 ? 'right' : 'left');
    }
  };

  return (
    <motion.div
      style={{ x, rotate, opacity }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      className={cn('absolute w-full h-full', className)}
    >
      <motion.div
        style={{
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        }}
        className="rounded-lg h-full w-full"
      >
        <Card className="h-full w-full overflow-hidden">
          <motion.div
            style={{ backgroundColor }}
            className="h-full w-full flex flex-col justify-between p-4 sm:p-6"
          >
            <div className="relative">
              <div className="mb-4 py-3">
                <span className="inline-block rounded-full bg-muted px-3 py-1 text-xs sm:text-sm">
                  {question.category}
                </span>
              </div>
              <div
                className={`flex-grow flex items-center justify-center ${paddingY}`}
              >
                <p className={`font-medium leading-relaxed ${textSize}`}>
                  {question.text}
                </p>
              </div>
            </div>
          </motion.div>
        </Card>
      </motion.div>
    </motion.div>
  );
}
