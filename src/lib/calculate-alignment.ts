import { Question } from './questions';

interface Response {
  questionId: string;
  agreed: boolean;
}

export interface AlignmentResult {
  republican: number;
  democrat: number;
  primaryAlignment: 'republican' | 'democrat';
  strength: number;
}

export function calculateAlignment(
  questions: Question[],
  responses: Response[]
): AlignmentResult {
  let republicanScore = 0;
  let democratScore = 0;

  responses.forEach((response) => {
    const question = questions.find((q) => q.id === response.questionId);
    if (!question) return;

    if (response.agreed) {
      republicanScore += question.weight.republican;
      democratScore += question.weight.democrat;
    } else {
      republicanScore -= question.weight.republican;
      democratScore -= question.weight.democrat;
    }
  });

  const total = Math.abs(republicanScore) + Math.abs(democratScore);
  const republicanPercentage = (republicanScore + total) / (2 * total);
  const democratPercentage = (democratScore + total) / (2 * total);

  const primaryAlignment =
    republicanPercentage > democratPercentage ? 'republican' : 'democrat';
  const strength = Math.abs(republicanPercentage - democratPercentage);

  return {
    republican: republicanPercentage,
    democrat: democratPercentage,
    primaryAlignment,
    strength,
  };
}
