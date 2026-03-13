'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { calculateDisposableIncome, type FinancialInput, type FinancialOutput } from '@/lib/calculations';

export default function Home() {
  const [grossSalary, setGrossSalary] = useState('');
  const [taxRate, setTaxRate] = useState('');
  const [bpjs, setBpjs] = useState('');
  const [livingCost, setLivingCost] = useState('');
  const [result, setResult] = useState<FinancialOutput | null>(null);

  const handleCalculate = () => {
    const input: FinancialInput = {
      grossSalary: parseFloat(grossSalary),
      taxRate: parseFloat(taxRate),
      bpjs: parseFloat(bpjs),
      livingCost: parseFloat(livingCost),
    };

    const output = calculateDisposableIncome(input);
    setResult(output);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'Low':
        return 'bg-green-500';
      case 'Medium':
        return 'bg-yellow-500';
      case 'High':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12 max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 text-blue-600">
            JobTrek
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Calculate Your Disposable Income
          </p>
        </div>

        {/* Calculator Card */}
        <Card>
          <CardHeader>
            <CardTitle>Net Income Calculator</CardTitle>
            <CardDescription>
              Find out how much money you actually have after expenses
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Gross Salary (IDR/month)</label>
              <Input
                type="number"
                placeholder="10000000"
                value={grossSalary}
                onChange={(e) => setGrossSalary(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Tax Rate (%)</label>
              <Input
                type="number"
                placeholder="5"
                value={taxRate}
                onChange={(e) => setTaxRate(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">BPJS (IDR/month)</label>
              <Input
                type="number"
                placeholder="100000"
                value={bpjs}
                onChange={(e) => setBpjs(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Living Expenses (IDR/month)</label>
              <Input
                type="number"
                placeholder="5000000"
                value={livingCost}
                onChange={(e) => setLivingCost(e.target.value)}
              />
              <p className="text-xs text-gray-500">
                Rent, food, transport, loans, etc.
              </p>
            </div>

            <Button onClick={handleCalculate} className="w-full">
              Calculate
            </Button>

            {result && (
              <Alert>
                <AlertDescription className="space-y-4">
                  <div>
                    <p className="font-semibold">Disposable Income</p>
                    <p className="text-2xl font-bold">{formatCurrency(result.disposableIncome)}</p>
                    <p className="text-sm text-gray-500">
                      {result.disposablePercentage.toFixed(1)}% of gross salary
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">Financial Risk Level</p>
                    <Badge className={getRiskColor(result.riskLevel)}>
                      {result.riskLevel}
                    </Badge>
                    <p className="text-xs text-gray-500 mt-2">
                      {result.riskLevel === 'High' &&
                        'Warning: Very limited disposable income. Review your expenses.'}
                      {result.riskLevel === 'Medium' &&
                        'Caution: You have some disposable income. Manage carefully.'}
                      {result.riskLevel === 'Low' &&
                        'Good: Healthy disposable income. Keep managing well!'}
                    </p>
                  </div>
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>All calculations happen locally in your browser</p>
          <p className="mt-1">No data is stored or transmitted</p>
        </div>
      </div>
    </main>
  );
}
