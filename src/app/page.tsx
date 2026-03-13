'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import {
  calculateDisposableIncome,
  calculateEffectiveHourlyWage,
  calculateWorkLifeBalance,
  calculateBurnoutRisk,
  calculateSustainabilityIndex,
  type FinancialInput,
  type HourlyWageInput,
  type WorkLifeBalanceInput,
  type BurnoutInput,
} from '@/lib/calculations';
import FinancialCalculator from '@/components/calculators/financial-calculator';
import HourlyWageCalculator from '@/components/calculators/hourly-wage-calculator';
import WorkLifeBalanceCalculator from '@/components/calculators/work-life-balance-calculator';
import BurnoutCalculator from '@/components/calculators/burnout-calculator';

export default function Home() {
  const [finalScores, setFinalScores] = useState({
    financial: 0,
    time: 0,
    burnout: 0,
  });

  const [sustainabilityResult, setSustainabilityResult] = useState<{
    finalScore: number;
    category: string;
    color: string;
  } | null>(null);

  const handleFinancialComplete = (input: FinancialInput, output: any) => {
    // Convert financial result to 0-100 score
    const score = Math.min(100, output.disposablePercentage * 2);
    setFinalScores(prev => ({ ...prev, financial: score }));
  };

  const handleHourlyWageComplete = (input: HourlyWageInput, output: any) => {
    // Time score based on effective hourly wage
    const score = Math.min(100, (output.realHourlyWage / 100000) * 100);
    setFinalScores(prev => ({ ...prev, time: score }));
  };

  const handleWorkLifeComplete = (input: WorkLifeBalanceInput, output: any) => {
    setFinalScores(prev => ({ ...prev, time: output.score }));
  };

  const handleBurnoutComplete = (input: BurnoutInput, output: any) => {
    // Convert burnout risk to score (inverse)
    const score = 100 - output.riskScore;
    setFinalScores(prev => ({ ...prev, burnout: score }));
  };

  const calculateFinalScore = () => {
    const result = calculateSustainabilityIndex({
      financialScore: finalScores.financial,
      timeScore: finalScores.time,
      burnoutScore: finalScores.burnout,
    });
    setSustainabilityResult(result);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            JobTrek 2.0
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">
            Career Sustainability Tool
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Analyze your job's financial value, work-life balance, and burnout risk
          </p>
        </div>

        {/* Final Score Display */}
        {sustainabilityResult && (
          <Alert className="mb-8 border-2">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-lg mb-2">Career Sustainability Index</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Your overall score: <span className="font-bold text-2xl">{sustainabilityResult.finalScore}</span>/100
                </p>
                <Badge className={`mt-2 bg-${sustainabilityResult.color}-500`}>
                  {sustainabilityResult.category}
                </Badge>
              </div>
              <button
                onClick={() => setSustainabilityResult(null)}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg dark:bg-gray-700 dark:hover:bg-gray-600"
              >
                Reset
              </button>
            </div>
          </Alert>
        )}

        {/* Progress Indicators */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Financial Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{finalScores.financial}</div>
              <div className="text-xs text-gray-500 mt-1">
                {finalScores.financial > 0 ? 'Calculated' : 'Not calculated'}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Time Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{finalScores.time}</div>
              <div className="text-xs text-gray-500 mt-1">
                {finalScores.time > 0 ? 'Calculated' : 'Not calculated'}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Burnout Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{finalScores.burnout}</div>
              <div className="text-xs text-gray-500 mt-1">
                {finalScores.burnout > 0 ? 'Calculated' : 'Not calculated'}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Calculate Final Score Button */}
        <div className="mb-8 text-center">
          <button
            onClick={calculateFinalScore}
            disabled={finalScores.financial === 0 || finalScores.time === 0 || finalScores.burnout === 0}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            Calculate Career Sustainability Index
          </button>
          <p className="text-sm text-gray-500 mt-2">
            Complete all 4 calculators above to get your final score
          </p>
        </div>

        {/* Calculator Tabs */}
        <Tabs defaultValue="financial" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="financial">Financial</TabsTrigger>
            <TabsTrigger value="hourly">Hourly Wage</TabsTrigger>
            <TabsTrigger value="worklife">Work-Life</TabsTrigger>
            <TabsTrigger value="burnout">Burnout</TabsTrigger>
          </TabsList>

          <TabsContent value="financial">
            <FinancialCalculator onComplete={handleFinancialComplete} />
          </TabsContent>

          <TabsContent value="hourly">
            <HourlyWageCalculator onComplete={handleHourlyWageComplete} />
          </TabsContent>

          <TabsContent value="worklife">
            <WorkLifeBalanceCalculator onComplete={handleWorkLifeComplete} />
          </TabsContent>

          <TabsContent value="burnout">
            <BurnoutCalculator onComplete={handleBurnoutComplete} />
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <div className="mt-12 text-center text-sm text-gray-500">
          <p>Built with Next.js + shadcn/ui</p>
          <p className="mt-2">
            Data is processed locally in your browser. No personal information is stored.
          </p>
        </div>
      </div>
    </main>
  );
}
