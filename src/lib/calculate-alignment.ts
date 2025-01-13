import { Question } from './questions';

export interface AlignmentResult {
  democrat: number;
  republican: number;
  primaryAlignment: 'democrat' | 'republican';
  categoryAlignment: {
    [key: string]: {
      democrat: number;
      republican: number;
    };
  };
}

export interface AlignmentResult {
  democrat: number;
  republican: number;
  primaryAlignment: 'democrat' | 'republican';
  categoryAlignment: {
    [key: string]: {
      democrat: number;
      republican: number;
    };
  };
}

export function calculateAlignment(
  questions: Question[],
  responses: Array<{ questionId: string; agreed: boolean }>
): AlignmentResult {
  const alignment = { democrat: 0, republican: 0 };
  const categoryScores: {
    [key: string]: { democrat: number; republican: number };
  } = {};

  responses.forEach(({ questionId, agreed }) => {
    const question = questions.find((q) => q.id === questionId);
    if (!question) return;

    const multiplier = agreed ? 1 : -1;
    alignment.democrat += question.weight.democrat * multiplier;
    alignment.republican += question.weight.republican * multiplier;

    if (!categoryScores[question.category]) {
      categoryScores[question.category] = { democrat: 0, republican: 0 };
    }
    categoryScores[question.category].democrat +=
      question.weight.democrat * multiplier;
    categoryScores[question.category].republican +=
      question.weight.republican * multiplier;
  });

  // Normalize overall alignment to 100%
  const total = Math.abs(alignment.democrat) + Math.abs(alignment.republican);
  const normalizedAlignment = {
    democrat: (Math.abs(alignment.democrat) / total) * 100,
    republican: (Math.abs(alignment.republican) / total) * 100,
  };

  // Normalize category alignment
  const normalizedCategoryScores = Object.fromEntries(
    Object.entries(categoryScores).map(([category, scores]) => {
      const total = Math.abs(scores.democrat) + Math.abs(scores.republican);
      return [
        category,
        {
          democrat: (Math.abs(scores.democrat) / total) * 100,
          republican: (Math.abs(scores.republican) / total) * 100,
        },
      ];
    })
  );

  return {
    democrat: normalizedAlignment.democrat,
    republican: normalizedAlignment.republican,
    primaryAlignment:
      normalizedAlignment.democrat > normalizedAlignment.republican
        ? 'democrat'
        : 'republican',
    categoryAlignment: normalizedCategoryScores,
  };
}
