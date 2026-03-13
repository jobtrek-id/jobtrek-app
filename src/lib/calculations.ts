// Calculation utilities for JobTrek Career Sustainability Tool

export interface FinancialInput {
  grossSalary: number;
  taxRate: number;
  bpjs: number;
  livingCost: number;
}

export interface FinancialOutput {
  disposableIncome: number;
  disposablePercentage: number;
  riskLevel: 'Low' | 'Medium' | 'High';
}

export interface HourlyWageInput {
  monthlySalary: number;
  weeklyHours: number;
  overtimeHours: number;
  commuteHours: number;
}

export interface HourlyWageOutput {
  realHourlyWage: number;
  comparisonMessage: string;
}

export interface WorkLifeBalanceInput {
  weeklyHours: number;
  overtimeHours: number;
  sleepHours: number;
  workDaysPerWeek: number;
}

export interface WorkLifeBalanceOutput {
  score: number;
  category: 'Red' | 'Warning' | 'Stable';
  feedback: string;
}

export interface BurnoutInput {
  stressLevel: number; // 1-5
  jobSatisfaction: number; // 1-5
  leaveUsed: number; // days per year
}

export interface BurnoutOutput {
  riskLevel: 'Low' | 'Medium' | 'High' | 'Critical';
  riskScore: number;
  advice: string;
}

export interface SustainabilityInput {
  financialScore: number;
  timeScore: number;
  burnoutScore: number;
}

export interface SustainabilityOutput {
  finalScore: number;
  category: string;
  color: string;
}

// 1. Net Income Reality Check
export function calculateDisposableIncome(input: FinancialInput): FinancialOutput {
  const taxAmount = input.grossSalary * (input.taxRate / 100);
  const netIncome = input.grossSalary - taxAmount - input.bpjs;
  const disposableIncome = netIncome - input.livingCost;
  const disposablePercentage = (disposableIncome / input.grossSalary) * 100;

  let riskLevel: 'Low' | 'Medium' | 'High';
  if (disposablePercentage < 10) {
    riskLevel = 'High';
  } else if (disposablePercentage < 25) {
    riskLevel = 'Medium';
  } else {
    riskLevel = 'Low';
  }

  return {
    disposableIncome: Math.max(0, disposableIncome),
    disposablePercentage,
    riskLevel,
  };
}

// 2. Effective Hourly Wage
export function calculateEffectiveHourlyWage(input: HourlyWageInput): HourlyWageOutput {
  const totalWeeklyHours = input.weeklyHours + input.overtimeHours + input.commuteHours;
  const weeklySalary = input.monthlySalary * 12 / 52;
  const realHourlyWage = totalWeeklyHours > 0 ? weeklySalary / totalWeeklyHours : 0;

  // Average comparison (simplified - in real app would come from backend)
  const averageHourlyWage = 50000; // Example average in IDR
  const comparison = realHourlyWage / averageHourlyWage;

  let comparisonMessage = '';
  if (comparison > 1.2) {
    comparisonMessage = `Your effective hourly wage is ${(comparison * 100).toFixed(0)}% above average`;
  } else if (comparison < 0.8) {
    comparisonMessage = `Your effective hourly wage is ${(100 - comparison * 100).toFixed(0)}% below average`;
  } else {
    comparisonMessage = 'Your effective hourly wage is around average';
  }

  return {
    realHourlyWage,
    comparisonMessage,
  };
}

// 3. Work-Life Balance Score
export function calculateWorkLifeBalance(input: WorkLifeBalanceInput): WorkLifeBalanceOutput {
  const totalWorkHours = input.weeklyHours + input.overtimeHours;
  const workIntensity = totalWorkHours / input.workDaysPerWeek;

  // Score calculation (0-100)
  let score = 100;

  // Deduct for long work hours (>8 hours/day)
  if (workIntensity > 10) {
    score -= 30;
  } else if (workIntensity > 8) {
    score -= 15;
  }

  // Deduct for insufficient sleep (<7 hours)
  if (input.sleepHours < 6) {
    score -= 25;
  } else if (input.sleepHours < 7) {
    score -= 10;
  }

  // Deduct for overtime
  if (input.overtimeHours > 10) {
    score -= 20;
  } else if (input.overtimeHours > 5) {
    score -= 10;
  }

  score = Math.max(0, Math.min(100, score));

  let category: 'Red' | 'Warning' | 'Stable';
  let feedback = '';

  if (score >= 70) {
    category = 'Stable';
    feedback = 'Your work-life balance is good. Keep maintaining your current routine!';
  } else if (score >= 50) {
    category = 'Warning';
    feedback = 'Your work-life balance needs attention. Consider reducing overtime or improving sleep quality.';
  } else {
    category = 'Red';
    feedback = 'Critical: Your work-life balance is at risk. Immediate changes recommended.';
  }

  return {
    score,
    category,
    feedback,
  };
}

// 4. Burnout Risk Estimator
export function calculateBurnoutRisk(input: BurnoutInput): BurnoutOutput {
  // Calculate risk score (0-100)
  const stressScore = input.stressLevel * 20; // 1-5 → 20-100
  const satisfactionScore = (5 - input.jobSatisfaction) * 20; // Reverse: 1 (bad) → 80, 5 (good) → 0

  // Leave usage: less leave used = higher risk
  const leaveScore = input.leaveUsed < 5 ? 30 : input.leaveUsed < 10 ? 15 : 0;

  const riskScore = Math.round((stressScore * 0.4) + (satisfactionScore * 0.4) + (leaveScore * 0.2));

  let riskLevel: 'Low' | 'Medium' | 'High' | 'Critical';
  let advice = '';

  if (riskScore >= 75) {
    riskLevel = 'Critical';
    advice = 'Immediate action needed: Take a break, reassess your workload, and consider professional support.';
  } else if (riskScore >= 50) {
    riskLevel = 'High';
    advice = 'High burnout risk: Start prioritizing self-care, set boundaries, and use your leave days.';
  } else if (riskScore >= 25) {
    riskLevel = 'Medium';
    advice = 'Moderate risk: Monitor your stress levels and make time for activities you enjoy.';
  } else {
    riskLevel = 'Low';
    advice = 'Low burnout risk: You\'re managing work stress well. Keep it up!';
  }

  return {
    riskScore,
    riskLevel,
    advice,
  };
}

// 5. Career Sustainability Index (Final Score)
export function calculateSustainabilityIndex(input: SustainabilityInput): SustainabilityOutput {
  // Weighted combination
  const finalScore = Math.round(
    (input.financialScore * 0.35) +
    (input.timeScore * 0.35) +
    (input.burnoutScore * 0.30)
  );

  let category = '';
  let color = '';

  if (finalScore >= 80) {
    category = 'Excellent';
    color = 'green';
  } else if (finalScore >= 60) {
    category = 'Good';
    color = 'blue';
  } else if (finalScore >= 40) {
    category = 'Fair';
    color = 'yellow';
  } else {
    category = 'Poor';
    color = 'red';
  }

  return {
    finalScore,
    category,
    color,
  };
}

// Helper to bucket values for anonymous aggregated stats
export function bucketValue(value: number, ranges: number[]): string {
  for (let i = 0; i < ranges.length - 1; i++) {
    if (value >= ranges[i] && value < ranges[i + 1]) {
      return `${ranges[i]}-${ranges[i + 1]}`;
    }
  }
  return `${ranges[ranges.length - 1]}+`;
}

export function bucketIncome(income: number): string {
  return bucketValue(income, [0, 5000000, 10000000, 20000000, 30000000]);
}

export function bucketHours(hours: number): string {
  return bucketValue(hours, [0, 40, 50, 60]);
}
