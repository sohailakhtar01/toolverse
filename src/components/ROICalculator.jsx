'use client'
import { useState, useEffect } from 'react'
import { 
  User, 
  DollarSign, 
  Clock, 
  Calendar, 
  TrendingUp, 
  Target, 
  Calculator, 
  Lightbulb,
  Rocket
} from 'lucide-react'

export default function ROICalculator() {
  const [employeesCount, setEmployeesCount] = useState(50)
  const [hourlyRate, setHourlyRate] = useState(25)
  const [isCalculating, setIsCalculating] = useState(false)

  const hoursSavedPerWeek = 15
  const weeksPerYear = 52

  const employees = Math.max(0, parseInt(employeesCount) || 0)
  const rate = Math.max(0, parseFloat(hourlyRate) || 0)

  const annualSavings = employees * hoursSavedPerWeek * rate * weeksPerYear
  const monthlySavings = annualSavings / 12
  const weeklyHoursSaved = employees * hoursSavedPerWeek

  useEffect(() => {
    setIsCalculating(true)
    const timer = setTimeout(() => setIsCalculating(false), 300)
    return () => clearTimeout(timer)
  }, [employeesCount, hourlyRate])

  const handleEmployeesChange = (e) => {
    const value = e.target.value
    if (value === '' || (parseInt(value) >= 0 && parseInt(value) <= 10000)) {
      setEmployeesCount(value)
    }
  }

  const handleRateChange = (e) => {
    const value = e.target.value
    if (value === '' || (parseFloat(value) >= 0 && parseFloat(value) <= 500)) {
      setHourlyRate(value)
    }
  }

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Calculator className="w-10 h-10 text-blue-600" />
            <h2 className="text-4xl font-bold text-gray-900">Calculate Your Potential Savings</h2>
          </div>
          <p className="text-xl text-gray-600">
            See how much these free AI tools can save your business
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
          {/* Input Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                <User className="w-5 h-5 text-gray-500" />
                Number of Employees
              </label>
              <input
                type="number"
                value={employeesCount}
                onChange={handleEmployeesChange}
                placeholder="50"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                min="0"
                max="10000"
              />
              <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                Enter number of employees (1-10,000)
              </p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-gray-500" />
                Average Hourly Rate ($)
              </label>
              <input
                type="number"
                value={hourlyRate}
                onChange={handleRateChange}
                placeholder="25"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                min="0"
                max="500"
                step="0.01"
              />
              <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                Average hourly wage of your employees
              </p>
            </div>
          </div>

          {/* Calculation Breakdown */}
          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
              <Calculator className="w-5 h-5" />
              Calculation Breakdown:
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm text-blue-800">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" /> 
                Employees: <strong>{employees.toLocaleString()}</strong>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4" /> 
                Hourly Rate: <strong>${rate}</strong>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" /> 
                Hours Saved/Week: <strong>{weeklyHoursSaved.toLocaleString()}</strong>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" /> 
                Weeks/Year: <strong>{weeksPerYear}</strong>
              </div>
            </div>
          </div>

          {/* Results Display */}
          <div className={`bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl p-6 text-center transition-all duration-300 ${isCalculating ? 'scale-105' : 'scale-100'}`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <div className="text-xl font-bold">
                  {isCalculating ? '...' : `$${Math.round(annualSavings / 52).toLocaleString()}`}
                </div>
                <div className="text-sm opacity-90 flex items-center justify-center gap-1">
                  <Calendar className="w-4 h-4" />
                  Weekly Savings
                </div>
              </div>
              <div>
                <div className="text-xl font-bold">
                  {isCalculating ? '...' : `$${Math.round(monthlySavings).toLocaleString()}`}
                </div>
                <div className="text-sm opacity-90 flex items-center justify-center gap-1">
                  <Calendar className="w-4 h-4" />
                  Monthly Savings
                </div>
              </div>
              <div>
                <div className="text-xl font-bold">
                  {isCalculating ? '...' : `${weeklyHoursSaved.toLocaleString()}h`}
                </div>
                <div className="text-sm opacity-90 flex items-center justify-center gap-1">
                  <Clock className="w-4 h-4" />
                  Hours Saved/Week
                </div>
              </div>
            </div>

            <div className="border-t border-white/20 pt-4">
              <div className={`text-4xl font-bold mb-2 transition-all duration-500 ${isCalculating ? 'animate-pulse' : ''}`}>
                {isCalculating ? 'Calculating...' : `$${annualSavings.toLocaleString()}`}
              </div>
              <div className="text-xl font-medium flex items-center justify-center gap-2">
                <TrendingUp className="w-6 h-6" />
                Total Annual Savings
              </div>
              <div className="text-sm opacity-90 mt-2">
                Based on {hoursSavedPerWeek} hours saved per employee per week
              </div>
            </div>
          </div>

          {/* Additional Insights */}
          {annualSavings > 0 && (
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5" />
                  Productivity Impact
                </h4>
                <p className="text-sm text-yellow-700">
                  Your team could save <strong>{(weeklyHoursSaved / employees / 40 * 100).toFixed(0)}%</strong> of their work time with AI automation!
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  ROI Comparison
                </h4>
                <p className="text-sm text-green-700">
                  This equals <strong>{Math.round(annualSavings / 50000)} full-time employees</strong> worth of productivity gains!
                </p>
              </div>
            </div>
          )}

          {/* CTA Section */}
          {annualSavings > 10000 && (
            <div className="mt-6 text-center">
              <button
                onClick={() => window.open('https://thetoolsverse.com/categories/business-management', '_blank')}
                className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 mx-auto"
              >
                <Rocket className="w-5 h-5" />
                Start Saving ${Math.round(annualSavings).toLocaleString()} Now!
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
