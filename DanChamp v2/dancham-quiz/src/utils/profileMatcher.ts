import { Profile } from '../types/quiz.types';

export const matchProfile = (
  answers: Record<string, string | string[]>,
  profiles: Profile[]
): string => {
  let bestMatch: Profile | null = null;
  let highestScore = 0;

  for (const profile of profiles) {
    let score = 0;
    const triggers = profile.triggers;

    // Check business situation
    if (triggers.businessSituation && answers.q1) {
      const answer = Array.isArray(answers.q1) ? answers.q1[0] : answers.q1;
      if (triggers.businessSituation.includes(answer)) {
        score += 3;
      }
    }

    // Check Denmark connection
    if (triggers.denmarkConnection && answers.q2) {
      const answer = Array.isArray(answers.q2) ? answers.q2[0] : answers.q2;
      if (triggers.denmarkConnection.includes(answer)) {
        score += 3;
      }
    }

    // Check goals
    if (triggers.goals && answers.q3) {
      const selectedGoals = Array.isArray(answers.q3) ? answers.q3 : [answers.q3];
      const matches = selectedGoals.filter((goal) => triggers.goals?.includes(goal));
      score += matches.length * 2;
    }

    // Check industry
    if (triggers.industry && answers.q4) {
      const selectedIndustries = Array.isArray(answers.q4) ? answers.q4 : [answers.q4];
      const matches = selectedIndustries.filter((industry) =>
        triggers.industry?.includes(industry)
      );
      score += matches.length * 2;
    }

    // Check event priorities
    if (triggers.eventPriorities && answers.q5) {
      const selectedPriorities = Array.isArray(answers.q5) ? answers.q5 : [answers.q5];
      const matches = selectedPriorities.filter((priority) =>
        triggers.eventPriorities?.includes(priority)
      );
      score += matches.length * 2;
    }

    // Check experience
    if (triggers.experience && answers.q6) {
      const answer = Array.isArray(answers.q6) ? answers.q6[0] : answers.q6;
      if (triggers.experience.includes(answer)) {
        score += 3;
      }
    }

    // Check hesitations (lower weight)
    if (triggers.hesitations && answers.q7) {
      const selectedHesitations = Array.isArray(answers.q7) ? answers.q7 : [answers.q7];
      const matches = selectedHesitations.filter((hesitation) =>
        triggers.hesitations?.includes(hesitation)
      );
      score += matches.length;
    }

    // Check age group
    if (triggers.ageGroup && answers.q8) {
      const answer = Array.isArray(answers.q8) ? answers.q8[0] : answers.q8;
      if (triggers.ageGroup.includes(answer)) {
        score += 2;
      }
    }

    if (score > highestScore) {
      highestScore = score;
      bestMatch = profile;
    }
  }

  return bestMatch?.id || 'corporate-navigator';
};

