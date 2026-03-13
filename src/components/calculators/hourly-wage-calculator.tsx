'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { calculateEffectiveHourlyWage, type HourlyWageInput, type HourlyWageOutput } from '@/lib/calculations';

interface Props {
  onComplete: (input: HourlyWageInput, output: HourlyWageOutput) => void;
}

export default function HourlyWageCalculator({ onComplete }: Props) {
  const [monthlySalary, setMonthlySalary] = useState('');
  const [weeklyHours, setWeeklyHours] = useState('');
  const [overtimeHours, setOvertimeHours] = useState('');
  const [commuteHours, setCommuteHours] = useState('');
  const [result, setResult] = useState<HourlyWageOutput | null>(null);

  const handleCalculate = () => {
    const input: HourlyWageInput = {
      monthlySalary: parseFloat(monthlySalary),
      weeklyHours: parseFloat(weeklyHours),
      overtimeHours: parseFloat(overtimeHours),
      commuteHours: parseFloat(commuteHours),
    };

    const output = calculateEffectiveHourlyWage(input);
    setResult(output);
    onComplete(input, output);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Effective Hourly Wage</CardTitle>
        <CardDescription>
          Calculate your real hourly wage including commute and overtime
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Monthly Salary (IDR)</label>
          <Input
            type="number"
            placeholder="10000000"
            value={monthlySalary}
            onChange={(e) => setMonthlySalary(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Regular Work Hours/week</label>
          <Input
            type="number"
            placeholder="40"
            value={weeklyHours}
            onChange={(e) => setWeeklyHours(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Overtime Hours/week</label>
          <Input
            type="number"
            placeholder="5"
            value={overtimeHours}
            onChange={(e) => setOvertimeHours(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Commute Hours/week</label>
          <Input
            type="number"
            placeholder="10"
            value={commuteHours}
            onChange={(e) => setCommuteHours(e.target.value)}
          />
          <p className="text-xs text-gray-500">
            Total time spent traveling to/from work per week
          </p>
        </div>

        <Button onClick={handleCalculate} className="w-full">
          Calculate
        </Button>

        {result && (
          <Alert>
            <AlertDescription className="space-y-3">
              <div>
                <p className="font-semibold">Real Hourly Wage</p>
                <p className="text-2xl font-bold">{formatCurrency(result.realHourlyWage)}/hour</p>
              </div>

              <div>
                <p className="font-semibold mb-2">Market Comparison</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {result.comparisonMessage}
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  This includes all work-related time (regular hours, overtime, and commute)
                </p>
              </div>
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  );
}
