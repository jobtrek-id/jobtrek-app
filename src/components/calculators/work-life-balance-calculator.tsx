'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import {
  calculateWorkLifeBalance,
  type WorkLifeBalanceInput,
  type WorkLifeBalanceOutput,
} from '@/lib/calculations';

interface Props {
  onComplete: (input: WorkLifeBalanceInput, output: WorkLifeBalanceOutput) => void;
}

export default function WorkLifeBalanceCalculator({ onComplete }: Props) {
  const [weeklyHours, setWeeklyHours] = useState([40]);
  const [overtimeHours, setOvertimeHours] = useState([0]);
  const [sleepHours, setSleepHours] = useState([7]);
  const [workDaysPerWeek, setWorkDaysPerWeek] = useState([5]);
  const [result, setResult] = useState<WorkLifeBalanceOutput | null>(null);

  const handleCalculate = () => {
    const input: WorkLifeBalanceInput = {
      weeklyHours: weeklyHours[0],
      overtimeHours: overtimeHours[0],
      sleepHours: sleepHours[0],
      workDaysPerWeek: workDaysPerWeek[0],
    };

    const output = calculateWorkLifeBalance(input);
    setResult(output);
    onComplete(input, output);
  };

  const getScoreColor = (category: string) => {
    switch (category) {
      case 'Stable':
        return 'bg-green-500';
      case 'Warning':
        return 'bg-yellow-500';
      case 'Red':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Work-Life Balance Score</CardTitle>
        <CardDescription>
          Calculate your work-life balance score (0-100)
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <label className="text-sm font-medium">
            Weekly Work Hours: {weeklyHours[0]}h
          </label>
          <Slider
            value={weeklyHours}
            onValueChange={setWeeklyHours}
            min={20}
            max={80}
            step={1}
            className="w-full"
          />
        </div>

        <div className="space-y-3">
          <label className="text-sm font-medium">
            Overtime Hours/week: {overtimeHours[0]}h
          </label>
          <Slider
            value={overtimeHours}
            onValueChange={setOvertimeHours}
            min={0}
            max={20}
            step={1}
            className="w-full"
          />
        </div>

        <div className="space-y-3">
          <label className="text-sm font-medium">
            Sleep Hours/day: {sleepHours[0]}h
          </label>
          <Slider
            value={sleepHours}
            onValueChange={setSleepHours}
            min={4}
            max={10}
            step={0.5}
            className="w-full"
          />
        </div>

        <div className="space-y-3">
          <label className="text-sm font-medium">
            Work Days/week: {workDaysPerWeek[0]}
          </label>
          <Slider
            value={workDaysPerWeek}
            onValueChange={setWorkDaysPerWeek}
            min={3}
            max={7}
            step={1}
            className="w-full"
          />
        </div>

        <Button onClick={handleCalculate} className="w-full">
          Calculate
        </Button>

        {result && (
          <Alert>
            <AlertDescription className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="font-semibold">Work-Life Balance Score</p>
                  <Badge
                    className={
                      result.category === 'Stable'
                        ? 'bg-green-500'
                        : result.category === 'Warning'
                        ? 'bg-yellow-500'
                        : 'bg-red-500'
                    }
                  >
                    {result.category}
                  </Badge>
                </div>
                <div className="text-3xl font-bold mb-2">{result.score}/100</div>
                <Progress value={result.score} className="h-2" />
              </div>

              <div>
                <p className="font-semibold mb-1">Feedback</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {result.feedback}
                </p>
              </div>
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  );
}
