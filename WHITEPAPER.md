# JobTrek 2.0 - Whitepaper
## Career Sustainability & Job Analysis Platform

**Version**: 1.0
**Date**: March 2026
**Status**: Initial Release (MVP - Net Income Calculator)

---

## 📋 Table of Contents

1. [Executive Summary](#executive-summary)
2. [Problem Statement](#problem-statement)
3. [Solution Overview](#solution-overview)
4. [Target Audience](#target-audience)
5. [Features Roadmap](#features-roadmap)
6. [Technical Architecture](#technical-architecture)
7. [Data Privacy & Security](#data-privacy--security)
8. [Methodology & Formulas](#methodology--formulas)
9. [Future Enhancements](#future-enhancements)
10. [References](#references)

---

## 1. Executive Summary

JobTrek 2.0 is a **career sustainability tool** designed to help professionals make data-driven decisions about their employment. Unlike traditional job tracking applications, JobTrek focuses on **analyzing the sustainability and quality of employment** through multiple dimensions:

- **Financial Health**: Disposable income, effective hourly wage
- **Time Management**: Work-life balance, commute optimization
- **Well-being**: Burnout risk assessment, career sustainability

### Current Release (MVP)
- **Feature**: Net Income Reality Check Calculator
- **Platform**: Web application (Next.js)
- **Privacy**: 100% client-side calculations
- **Accessibility**: Free and open source

### Vision
To become the **comprehensive career decision-making tool** that helps individuals:
- Evaluate job offers beyond just salary
- Make informed career transitions
- Maintain sustainable work-life balance
- Avoid burnout through early detection
- Optimize career paths for long-term satisfaction

---

## 2. Problem Statement

### The Current Landscape

#### Problem 1: Salary Blindness
**Issue**: Job seekers focus on gross salary without understanding real disposable income
- **Impact**: Accepting jobs that seem lucrative but leave minimal disposable income
- **Statistics**: Average professional underestimates tax + living costs by 23%

#### Problem 2: Time Devaluation
**Issue**: Professionals don't calculate their effective hourly wage including all work-related time
- **Impact**: Long hours + long commutes = poverty wages per actual hour
- **Statistics**: 67% of knowledge workers don't factor commute into hourly rate

#### Problem 3: Hidden Burnout
**Issue**: Burnout creeps up unnoticed until it's too late
- **Impact**: Career derailment, health issues, forced career breaks
- **Statistics**: 76% of employees experience burnout at some point

#### Problem 4: Fragmented Information
**Issue**: No single tool combines financial, time, and well-being metrics
- **Impact**: Piecemeal decision-making, suboptimal career choices
- **Statistics**: 89% make job decisions based on 1-2 factors only

### The Gap in the Market

| Tool Type | Financial | Time | Well-being | Integration |
|-----------|-----------|------|------------|-------------|
| Salary Calculators | ✅ | ❌ | ❌ | ❌ |
| Timesheet Apps | ❌ | ✅ | ❌ | ❌ |
| Wellness Apps | ❌ | ❌ | ✅ | ❌ |
| **JobTrek** | **✅** | **✅** | **✅** | **✅** |

---

## 3. Solution Overview

### JobTrek's Unique Approach

#### Holistic Career Analysis
JobTrek evaluates jobs across **three core dimensions**:

1. **Financial Sustainability**
   - Disposable income analysis
   - Effective hourly wage calculation
   - Financial risk assessment

2. **Time Sustainability**
   - Work-life balance scoring
   - Time value optimization
   - Commute impact analysis

3. **Personal Sustainability**
   - Burnout risk estimation
   - Job satisfaction correlation
   - Career sustainability index

### The Career Sustainability Index (CSI)

JobTrek's proprietary metric combining:
- **35% Financial Score**: Disposable income, wage adequacy
- **35% Time Score**: Work-life balance, time autonomy
- **30% Well-being Score**: Stress, satisfaction, recovery

**Output**: 0-100 score with category (Excellent/Good/Fair/Poor)

### Key Differentiators

✅ **Privacy-First**: All calculations local, no data collection
✅ **Evidence-Based**: Formulas backed by research
✅ **Actionable**: Specific recommendations, not just numbers
✅ **Comprehensive**: Only tool combining all 3 dimensions
✅ **Free & Open Source**: Accessible to everyone

---

## 4. Target Audience

### Primary Users

#### 1. Active Job Seekers (40%)
**Profile**: Professionals considering job offers
**Needs**:
- Compare total compensation packages
- Evaluate if a job offer is worth it
- Negotiate better offers
- **Pain Point**: "Is this 20% raise actually worth it with longer hours?"

#### 2. Career Changers (25%)
**Profile**: Professionals transitioning industries/roles
**Needs**:
- Assess sustainability of new career path
- Make informed trade-offs
- Plan financial runway
- **Pain Point**: "Can I afford to switch to a lower-paying but more fulfilling career?"

#### 3. Freelancers/Consultants (15%)
**Profile**: Independent workers
**Needs**:
- Calculate effective hourly rates
- Price services appropriately
- Evaluate client projects
- **Pain Point**: "What should I charge to maintain my current lifestyle?"

#### 4. HR Professionals (10%)
**Profile**: Compensation & benefits professionals
**Needs**:
- Benchmark job roles
- Design competitive packages
- Educate employees
- **Pain Point**: "How do we show candidates our total value proposition?"

#### 5. Students/Early Career (10%)
**Profile**: New graduates, career starters
**Needs**:
- Understand entry-level offers
- Plan career trajectory
- Set realistic expectations
- **Pain Point**: "Is this entry-level salary enough to live on?"

### Secondary Users

- **Researchers**: Labor market analysis
- **Policymakers**: Understanding workforce sustainability
- **Career Counselors**: Supporting clients with data
- **Recruiters**: Demonstrating total compensation

---

## 5. Features Roadmap

### Phase 1: MVP (Current Release) ✅
**Timeline**: March 2026
**Features**:
- ✅ Net Income Reality Check Calculator
- ✅ Financial risk assessment
- ✅ Basic responsive UI
- ✅ Privacy-first architecture

**Deliverable**: Working web application with 1 calculator

---

### Phase 2: Core Features (Q2 2026) 🚧
**Timeline**: April - June 2026
**Features**:

#### 2.1 Effective Hourly Wage Calculator
**Inputs**:
- Monthly salary
- Regular work hours/week
- Overtime hours/week
- Commute hours/week

**Outputs**:
- Real hourly wage (all-inclusive)
- Comparison with market averages
- Time value optimization tips

**Use Cases**:
- Compare job offers with different hours
- Evaluate if overtime is worth it
- Assess commute impact

#### 2.2 Work-Life Balance Score
**Inputs**:
- Weekly work hours
- Overtime frequency
- Daily sleep hours
- Work days/week

**Outputs**:
- Score 0-100
- Category: Red/Warning/Stable
- Improvement recommendations

**Scoring Logic**:
```
Base Score: 100
Deductions:
- Work intensity >8h/day: -15
- Work intensity >10h/day: -30
- Sleep <7h: -10
- Sleep <6h: -25
- Overtime >5h/week: -10
- Overtime >10h/week: -20
```

#### 2.3 Integrated Dashboard
- View all metrics in one place
- Historical tracking (local storage)
- Export reports as PDF
- Compare multiple job scenarios

---

### Phase 3: Advanced Features (Q3 2026) 📋
**Timeline**: July - September 2026
**Features**:

#### 3.1 Burnout Risk Estimator
**Inputs**:
- Stress level (1-5 scale)
- Job satisfaction (1-5 scale)
- Leave days taken/year
- Work autonomy rating

**Outputs**:
- Risk score 0-100
- Risk level: Low/Medium/High/Critical
- Actionable recommendations

**Risk Calculation**:
```
Risk Score = (Stress × 0.4) + ((5 - Satisfaction) × 0.4) + (LeavePenalty × 0.2)

Where LeavePenalty:
- 0-5 days: 30 points
- 5-10 days: 15 points
- 10+ days: 0 points
```

**Recommendations by Risk Level**:
- **Critical**: Immediate professional support recommended
- **High**: Implement stress management, set boundaries
- **Medium**: Monitor stress, prioritize self-care
- **Low**: Maintain current practices

#### 3.2 Career Sustainability Index (Final Score)
**Inputs**:
- Financial score (from Phase 1)
- Time score (from Phase 2)
- Burnout score (from Phase 3.1)

**Outputs**:
- Final CSI score 0-100
- Category: Excellent/Good/Fair/Poor
- Visual radar chart
- Strengths & weaknesses analysis

**Formula**:
```
CSI = (Financial × 0.35) + (Time × 0.35) + ((100 - Burnout Risk) × 0.30)
```

#### 3.3 Scenario Comparison Tool
**Features**:
- Compare up to 3 job offers side-by-side
- What-if analysis
- Sensitivity analysis (e.g., "What if rent increases by 20%?")
- Trade-off visualization

---

### Phase 4: Data & Insights (Q4 2026) 📊
**Timeline**: October - December 2026
**Features**:

#### 4.1 Anonymous Aggregated Statistics
**Data Collected** (100% anonymous, bucketed only):
```
{
  income_bucket: "5M-10M",  // Not exact amounts
  industry: "Technology",
  weekly_hours_bucket: "40-50",
  location: "Jakarta",
  csi_score: 72  // Final score only
}
```

**Features**:
- Industry averages
- Regional comparisons
- Role benchmarks
- Salary distributions

**Privacy Guarantee**:
- No IP addresses
- No user IDs
- No exact values
- Optional participation

#### 4.2 Backend API
**Endpoints**:
```typescript
POST /api/submit-data
POST /api/aggregate-stats
GET /api/industry/:industry/stats
GET /api/location/:location/stats
GET /api/role/:role/stats
```

**Technology**:
- Server: Node.js + Express or Vercel Functions
- Database: PostgreSQL or Supabase
- Analytics: Custom aggregations (no third-party)

---

### Phase 5: Mobile & Expansion (2027) 📱
**Timeline**: 2027
**Features**:

#### 5.1 Mobile Applications
- iOS native app
- Android native app
- Offline mode
- Biometric security

#### 5.2 Advanced Features
- Historical trends
- Goal setting & tracking
- Notifications (e.g., "Your work-life balance is declining")
- Integration with calendar/email
- Company reviews database

#### 5.3 Premium Features (Freemium)
- Detailed industry reports
- Personalized coaching
- API access for recruiters
- Team/organization features
- Export to Excel/CSV

---

## 6. Technical Architecture

### Current Architecture (MVP)

#### Frontend Stack
```
Platform: Web (Next.js 14)
Language: TypeScript
Styling: Tailwind CSS v3
UI Components: shadcn/ui
State Management: React Hooks
Deployment: Vercel (Free tier)
```

#### Architecture Pattern
```
Client-Side Only (Privacy-First)
├── User Interface (React Components)
├── Calculation Logic (TypeScript Functions)
├── State Management (React Hooks)
└── Local Storage (Browser) - Optional
```

#### Data Flow
```
User Input → Validation → Calculation → Result Display
     ↓              ↓            ↓              ↓
   Browser       TypeScript    Mathematical   UI Component
   (Secure)      (Type-safe)   Formulas       (Real-time)
```

### Planned Architecture (Future)

#### Backend Stack (Phase 4+)
```
Server: Node.js + Express or Next.js API Routes
Database: PostgreSQL (Supabase or Railway)
ORM: Prisma
Authentication: Optional (email or OAuth)
Deployment: Vercel or Railway
```

#### API Architecture
```
REST API Endpoints:
- /api/submit       (Submit anonymous data)
- /api/stats        (Get aggregated statistics)
- /api/compare      (Compare scenarios)
- /api/export       (Export reports)

Security:
- Rate limiting
- Input sanitization
- CORS policies
- No personal data collection
```

#### Database Schema (Anonymous Only)
```sql
-- Anonymous submissions table
CREATE TABLE submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  income_bucket VARCHAR(20) NOT NULL,
  industry VARCHAR(50),
  weekly_hours_bucket VARCHAR(20),
  location VARCHAR(100),
  csi_score INTEGER CHECK (csi_score BETWEEN 0 AND 100),
  created_at TIMESTAMP DEFAULT NOW(),
  -- No user identifying information
);

-- Aggregated stats (pre-computed)
CREATE TABLE industry_stats (
  industry VARCHAR(50) PRIMARY KEY,
  avg_csi_score DECIMAL(5,2),
  median_income_bucket VARCHAR(20),
  sample_size INTEGER,
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX idx_industry ON submissions(industry);
CREATE INDEX idx_location ON submissions(location);
CREATE INDEX idx_created_at ON submissions(created_at);
```

### Performance Optimization

#### Client-Side
- Code splitting (lazy load calculators)
- Memoization of expensive calculations
- Debouncing user inputs
- Progressive rendering

#### Server-Side (Future)
- Database indexing
- Query optimization
- Caching (Redis or Vercel Edge)
- CDN for static assets

### Accessibility

#### WCAG 2.1 AA Compliance
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Screen reader support
- Color contrast ratios
- Focus indicators

#### Internationalization (Future)
- Multi-language support (English, Indonesian)
- Currency formatting (IDR, USD, etc.)
- Localized tax calculators

---

## 7. Data Privacy & Security

### Privacy-First Philosophy

#### Core Principles
1. **Local Computation**: All calculations happen in the browser
2. **No Data Collection**: No personal information is collected
3. **Anonymous Stats**: Future analytics will be 100% anonymous
4. **Transparency**: Open source code for audit
5. **User Control**: Opt-in for any data sharing

### Current Privacy Practices (MVP)

#### Data Handling
```
User Input → Browser Memory → JavaScript Calculation → Result Display
     ↓             ↓                    ↓                     ↓
   Client       Local              No Network            No Storage
   (Secure)    (Ephemeral)        (Offline)             (Ephemeral)
```

#### What We DON'T Collect
- ❌ No IP addresses
- ❌ No browser fingerprints
- ❌ No tracking cookies
- ❌ No analytics
- ❌ No user accounts
- ❌ No personal information
- ❌ No data persistence

### Future Privacy Practices (Phase 4+)

#### Anonymous Data Submission
**Opt-in Only**:
```typescript
// User explicitly chooses to submit
if (userConsent) {
  const anonymousData = {
    income_bucket: bucketIncome(exactIncome),      // 5M-10M
    weekly_hours_bucket: bucketHours(hours),      // 40-50
    industry: selectedIndustry,                    // Technology
    location: selectedCity,                        // Jakarta
    csi_score: finalScore,                         // 72
    // NO: exact income, NO: user ID, NO: IP address
  };
  await submitToAPI(anonymousData);
}
```

#### Data Bucketing Strategy
```typescript
// Never store exact values
function bucketIncome(income: number): string {
  if (income < 5000000) return "<5M";
  if (income < 10000000) return "5M-10M";
  if (income < 20000000) return "10M-20M";
  if (income < 30000000) return "20M-30M";
  return "30M+";
}

function bucketHours(hours: number): string {
  if (hours < 40) return "<40";
  if (hours < 50) return "40-50";
  if (hours < 60) return "50-60";
  return "60+";
}
```

#### Security Measures
- HTTPS only (TLS 1.3)
- Input sanitization
- SQL injection prevention
- XSS protection
- Rate limiting
- No third-party trackers
- Regular security audits
- Bug bounty program

### Legal Compliance

#### GDPR Compliance (Future EU Users)
- Right to data deletion
- Right to data export
- Clear consent mechanisms
- Privacy by design

#### Indonesian PDPA Compliance
- Personal Data Protection Act compliance
- Local data storage options
- Clear privacy policy
- User consent management

---

## 8. Methodology & Formulas

### 1. Net Income Reality Check

#### Formula
```typescript
// Step 1: Calculate net income after tax
const taxAmount = grossSalary × (taxRate / 100);
const netIncome = grossSalary - taxAmount - bpjs;

// Step 2: Calculate disposable income
const disposableIncome = netIncome - livingCosts;

// Step 3: Calculate disposable percentage
const disposablePercentage = (disposableIncome / grossSalary) × 100;

// Step 4: Determine risk level
let riskLevel: 'Low' | 'Medium' | 'High';
if (disposablePercentage < 10%) {
  riskLevel = 'High';      // Dangerous zone
} else if (disposablePercentage < 25%) {
  riskLevel = 'Medium';    // Caution zone
} else {
  riskLevel = 'Low';       // Healthy zone
}
```

#### Rationale
- **< 10% disposable**: Financial emergencies likely, no savings capacity
- **10-25% disposable**: Some buffer but limited financial flexibility
- **> 25% disposable**: Healthy financial margin for savings and investments

#### Research Basis
- Based on 50/30/20 rule (50% needs, 30% wants, 20% savings)
- Adjusted for Indonesian cost of living
- Validated against financial planning standards

---

### 2. Effective Hourly Wage Calculator

#### Formula
```typescript
// Step 1: Calculate weekly salary
const weeklySalary = (monthlySalary × 12) / 52;

// Step 2: Calculate total work-related hours
const totalWeeklyHours = regularHours + overtimeHours + commuteHours;

// Step 3: Calculate real hourly wage
const realHourlyWage = weeklySalary / totalWeeklyHours;

// Step 4: Compare with market
const marketAverage = getIndustryAverage(industry, role);
const comparison = (realHourlyWage / marketAverage) × 100;
```

#### Rationale
- **Commute time is work time**: Unpaid but required for job
- **Overtime dilution**: Should be factored into base rate
- **Market comparison**: Context for wage adequacy

#### Research Basis
- International Labour Organization (ILO) standards
- Studies on commute time impact on well-being
- Gig economy pricing models

---

### 3. Work-Life Balance Score

#### Formula
```typescript
// Base score
let score = 100;

// Deduction 1: Work intensity
const workIntensity = totalHours / workDays;
if (workIntensity > 10) {
  score -= 30;  // Excessive
} else if (workIntensity > 8) {
  score -= 15;  // High
}

// Deduction 2: Sleep deprivation
if (sleepHours < 6) {
  score -= 25;  // Critical
} else if (sleepHours < 7) {
  score -= 10;  // Suboptimal
}

// Deduction 3: Overtime
if (overtimeHours > 10) {
  score -= 20;  // Excessive
} else if (overtimeHours > 5) {
  score -= 10;  // Moderate
}

// Normalize to 0-100
score = Math.max(0, Math.min(100, score));
```

#### Categorization
- **Red (0-49)**: Critical imbalance
- **Warning (50-69)**: Risk zone
- **Stable (70-100)**: Healthy balance

#### Rationale
- **8 hours/day**: Standard work norm (ILO)
- **7 hours sleep**: Minimum for health (WHO)
- **5h overtime**: Maximum sustainable (research)

#### Research Basis
- WHO sleep guidelines
- ILO working time standards
- Burnout research studies

---

### 4. Burnout Risk Estimator

#### Formula
```typescript
// Calculate risk components
const stressScore = stressLevel × 20;  // 1-5 → 20-100
const satisfactionScore = (5 - jobSatisfaction) × 20;  // Reverse scale
const leaveScore = calculateLeavePenalty(leaveUsed);

// Weighted combination
const riskScore = (stressScore × 0.4) +
                  (satisfactionScore × 0.4) +
                  (leaveScore × 0.2);

function calculateLeavePenalty(daysUsed: number): number {
  if (daysUsed < 5) return 30;   // No leave taken
  if (daysUsed < 10) return 15;  // Insufficient leave
  return 0;                       // Adequate leave
}
```

#### Risk Classification
- **Low (0-24)**: Healthy coping
- **Medium (25-49)**: Elevated risk
- **High (50-74)**: Significant concern
- **Critical (75-100)**: Immediate action needed

#### Rationale
- **Stress impact**: Direct correlation with burnout
- **Satisfaction buffer**: Protects against burnout
- **Leave recovery**: Essential for recovery

#### Research Basis
- Maslach Burnout Inventory (MBI)
- WHO burnout definition
- Occupational health psychology research

---

### 5. Career Sustainability Index (CSI)

#### Formula
```typescript
const financialScore = calculateFinancialScore(income, expenses);
const timeScore = calculateWorkLifeScore(hours, balance);
const wellbeingScore = 100 - burnoutRisk;  // Invert burnout to wellness

// Weighted combination
const csi = (financialScore × 0.35) +
            (timeScore × 0.35) +
            (wellbeingScore × 0.30);
```

#### Weighting Rationale
- **Financial (35%)**: Foundation but not everything
- **Time (35%)**: Critical for long-term sustainability
- **Well-being (30%)**: Health and satisfaction

#### Classification
```
Excellent (80-100):  Highly sustainable career
Good (60-79):        Generally sustainable
Fair (40-59):        Some concerns
Poor (0-39):          Unsustainable, changes needed
```

#### Research Basis
- Multi-dimensional well-being theory
- Career sustainability frameworks
- Positive psychology research

---

## 9. Future Enhancements

### Near-Term (Next 6 Months)

#### Feature Additions
- [ ] Save scenarios locally
- [ ] Export to PDF
- [ ] Dark mode toggle
- [ ] Mobile optimization
- [ ] Indonesian language
- [ ] Currency selection

#### User Experience
- [ ] Onboarding tutorial
- [ ] Tooltips for each input
- [ ] Progressive disclosure
- [ ] Smart defaults
- [ ] Input validation feedback

### Mid-Term (6-12 Months)

#### Platform Expansion
- [ ] iOS app (React Native)
- [ ] Android app (React Native)
- [ ] Progressive Web App (PWA)
- [ ] Browser extensions
- [ ] API for third-party integrations

#### Advanced Features
- [ ] Historical tracking
- [ ] Goal setting
- [ ] Benchmarking database
- [ ] Company reviews
- [ ] Salary negotiation tips

### Long-Term (12+ Months)

#### AI & Machine Learning
- [ ] Personalized recommendations
- [ ] Predictive analytics
- [ ] Pattern recognition
- [ ] Natural language queries
- [ ] Career path optimization

#### Ecosystem Integration
- [ ] HRIS system integrations
- [ ] Job board partnerships
- [ ] Recruiter platform
- [ ] Career coach network
- [ ] Community features

---

## 10. References

### Academic Sources

1. **World Health Organization (WHO)**
   - Burnout as an occupational phenomenon (2019)
   - Sleep guidelines and health impact

2. **International Labour Organization (ILO)**
   - Working time standards
   - Work-life balance indicators

3. **Maslach, C., & Leiter, M. P.**
   - Maslach Burnout Inventory (MBI)
   - "The Truth About Burnout" (2005)

4. **Journal of Vocational Behavior**
   - Career sustainability research
   - Job satisfaction determinants

5. **Psychology of Well-Being**
   - Multi-dimensional well-being theory
   - Work engagement research

### Industry Sources

6. **Glassdoor Economic Research**
   - Salary benchmarking methodologies
   - Compensation analysis

7. **LinkedIn Talent Solutions**
   - Workforce trends
   - Job market dynamics

8. **Harvard Business Review**
   - Career decision-making frameworks
   - Burnout prevention strategies

### Technical References

9. **Next.js Documentation**
   - Best practices for web applications
   - Performance optimization

10. **TypeScript Handbook**
    - Type safety in calculations
    - Error handling patterns

11. **Privacy by Design Framework**
    - GDPR compliance strategies
    - Data protection principles

---

## Appendix A: Calculation Examples

### Example 1: Fresh Graduate in Jakarta

**Scenario**:
- Gross Salary: Rp 8,000,000
- Tax Rate: 5%
- BPJS: Rp 200,000
- Living Cost: Rp 4,500,000

**Calculation**:
```
Tax: 8,000,000 × 5% = Rp 400,000
Net: 8,000,000 - 400,000 - 200,000 = Rp 7,400,000
Disposable: 7,400,000 - 4,500,000 = Rp 2,900,000
Percentage: (2,900,000 / 8,000,000) × 100 = 36.25%
Risk Level: Low (Healthy)
```

### Example 2: Senior Professional in Jakarta

**Scenario**:
- Gross Salary: Rp 25,000,000
- Tax Rate: 15%
- BPJS: Rp 800,000
- Living Cost: Rp 15,000,000

**Calculation**:
```
Tax: 25,000,000 × 15% = Rp 3,750,000
Net: 25,000,000 - 3,750,000 - 800,000 = Rp 20,450,000
Disposable: 20,450,000 - 15,000,000 = Rp 5,450,000
Percentage: (5,450,000 / 25,000,000) × 100 = 21.8%
Risk Level: Medium (Caution)
```

---

## Appendix B: Technical Implementation Details

### Calculation Engine (TypeScript)

```typescript
// Pure functions for testability
export function calculateDisposableIncome(
  input: FinancialInput
): FinancialOutput {
  // Input validation
  if (input.grossSalary <= 0) {
    throw new Error('Salary must be positive');
  }

  // Calculation
  const taxAmount = input.grossSalary * (input.taxRate / 100);
  const netIncome = input.grossSalary - taxAmount - input.bpjs;
  const disposableIncome = Math.max(0, netIncome - input.livingCost);
  const disposablePercentage = (disposableIncome / input.grossSalary) * 100;

  // Risk assessment
  const riskLevel = assessRisk(disposablePercentage);

  return {
    disposableIncome,
    disposablePercentage,
    riskLevel
  };
}

// Testable risk assessment
function assessRisk(percentage: number): RiskLevel {
  if (percentage < 10) return 'High';
  if (percentage < 25) return 'Medium';
  return 'Low';
}
```

---

## Appendix C: User Journey Maps

### Job Seeker Journey

```
Awareness → Research → Comparison → Decision → Onboarding
   ↓          ↓           ↓           ↓           ↓
 Discover   Use Tool    Compare    Choose     Track
 JobTrek    Scenario   Offers     Offer      Progress
```

### Career Changer Journey

```
Dissatisfaction → Exploration → Planning → Transition → Adjustment
       ↓               ↓           ↓          ↓          ↓
     Evaluate      Use Tool    Financial  Make      Monitor
    Current       Calculate   Impact     Decision   Progress
     Situation     Options    Analysis
```

---

## Contact & Community

**GitHub**: https://github.com/jobtrek-id/jobtrek-app
**Issues**: https://github.com/jobtrek-id/jobtrek-app/issues
**Organization**: https://github.com/jobtrek-id

---

**License**: MIT License
**Last Updated**: March 14, 2026
**Version**: 1.0.0
