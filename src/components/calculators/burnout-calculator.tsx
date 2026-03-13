'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import { calculateBurnoutRisk, type BurnoutInput, type BurnoutOutput } from '@/lib/calculations';

interface Props {
  onComplete: (input: BurnoutInput, output: BurnoutOutput) => void;
}

export default function BurnoutCalculator({ onComplete }: Props) {
  const [stressLevel, setStressLevel] = useState([3]);
  const [jobSatisfaction, setJobSatisfaction] = useState([3]);
  const [leaveUsed, setLeaveUsed] = useState([10]);
  const [result, setResult] = useState<BurnoutOutput | null>(null);

  const handleCalculate = () => {
    const input: BurnoutInput = {
      stressLevel: stressLevel[0],
      jobSatisfaction: jobSatisfaction[0],
      leaveUsed: leaveUsed[0],
    };

    const output = calculateBurnoutRisk(input);
    setResult(output);
    onComplete(input, output);
  };

  const getRiskColor = (riskLevel: string) => {
    switch (riskLevel) {
      case 'Low':
        return 'bg-green-500';
      case 'Medium':
        return 'bg-yellow-500';
      case 'High':
        return 'bg-orange-500';
      case 'Critical':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStressLabel = (level: number) => {
    switch (level) {
      case 1:
        return 'Very Low';
      case 2:
        return 'Low';
      case 3:
        return 'Moderate';
      case 4:
        return 'High';
      case 5:
        return 'Very High';
      default:
        return '';
    }
  };

  const getSatisfactionLabel = (level: number) => {
    switch (level) {
      case 1:
        return 'Very Dissatisfied';
      case 2:
        return 'Dissatisfied';
      case 3:
        return 'Neutral';
      case 4:
        return 'Satisfied';
      case 5:
        return 'Very Satisfied';
      default:
        return '';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Burnout Risk Estimator</CardTitle>
        <CardDescription>Assess your risk of burnout based on stress and satisfaction</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <label className="text-sm font-medium">
            Stress Level: {getStressLabel(stressLevel[0])}
          </label>
          <Slider
            value={stressLevel}
            onValueChange={setStressLevel}
            min={1}
            max={5}
            step={1}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-gray-500">
            <span>Very Low</span>
            <span>Very High</span>
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-sm font-medium">
            Job Satisfaction: {getSatisfactionLabel(jobSatisfaction[0])}
          </label>
          <Slider
            value={jobSatisfaction}
            onValueChange={setJobSatisfaction}
            min={1}
            max={5}
            step={1}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-gray-500">
            <span>Very Dissatisfied</span>
            <span>Very Satisfied</span>
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-sm font-medium">
            Leave Used This Year: {leaveUsed[0]} days
          </label>
          <Slider
            value={leaveUsed}
            onValueChange={setLeaveUsed}
            min={0}
            max={30}
            step={1}
            className="w-full"
          />
          <p className="text-xs text-gray-500">
            How many vacation days have you actually taken?
          </p>
        </div>

        <Button onClick={handleCalculate} className="w-full">
          Calculate
        </Button>

        {result && (
          <Alert>
            <AlertDescription className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="font-semibold">Burnout Risk Level</p>
                  <Badge className={getRiskColor(result.riskLevel)}>
                    {result.riskLevel}
                  </Badge>
                </div>
                <div className="text-3xl font-bold mb-2">Risk Score: {result.riskScore}/100</div>
                <Progress value={result.riskScore} className="h-2" />
              </div>

              <div>
                <p className="font-semibold mb-1">Recommendation</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {result.advice}
                </p>
              </div>

              {result.riskLevel === 'Critical' && (
                <div className="mt-3 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                  <p className="text-xs text-red-700 dark:text-red-300">
                    <strong>Important:</strong> If you're experiencing severe symptoms,
                    consider speaking with a mental health professional.
                  </p>
                </div>
              )}
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  );
}
