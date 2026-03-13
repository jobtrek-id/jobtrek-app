'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { calculateDisposableIncome, type FinancialInput, type FinancialOutput } from '@/lib/calculations';

interface Props {
  onComplete: (input: FinancialInput, output: FinancialOutput) => void;
}

export default function FinancialCalculator({ onComplete }: Props) {
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
        <CardTitle>Net Income Reality Check</CardTitle>
        <CardDescription>
          Calculate your disposable income and financial risk level
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
          <label className="text-sm font-medium">Living Cost (IDR/month)</label>
          <Input
            type="number"
            placeholder="5000000"
            value={livingCost}
            onChange={(e) => setLivingCost(e.target.value)}
          />
          <p className="text-xs text-gray-500">
            Include: rent, food, transport, loan installments, etc.
          </p>
        </div>

        <Button onClick={handleCalculate} className="w-full">
          Calculate
        </Button>

        {result && (
          <Alert>
            <AlertDescription className="space-y-3">
              <div>
                <p className="font-semibold">Disposable Income</p>
                <p className="text-2xl font-bold">{formatCurrency(result.disposableIncome)}</p>
                <p className="text-sm text-gray-500">
                  {result.disposablePercentage.toFixed(1)}% of gross salary
                </p>
              </div>

              <div>
                <p className="font-semibold mb-2">Financial Risk Level</p>
                <Badge
                  variant={
                    result.riskLevel === 'Low'
                      ? 'default'
                      : result.riskLevel === 'Medium'
                      ? 'secondary'
                      : 'destructive'
                  }
                >
                  {result.riskLevel}
                </Badge>
                <p className="text-xs text-gray-500 mt-2">
                  {result.riskLevel === 'High' &&
                    'Warning: Your disposable income is very low. Consider reviewing your expenses.'}
                  {result.riskLevel === 'Medium' &&
                    'Caution: You have limited disposable income. Monitor your spending.'}
                  {result.riskLevel === 'Low' &&
                    'Good: Your disposable income is healthy. Keep managing your finances well.'}
                </p>
              </div>
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  );
}
