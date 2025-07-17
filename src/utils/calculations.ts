import type { Employee } from '../types/types';

const BASE_EMPLOYEE_COST = 1000;
const BASE_DEPENDENT_COST = 500;
const PAY_PERIODS = 26;

function hasDiscount(name: string): boolean {
  return name.trim().toLowerCase().startsWith('a');
}

export function calculateAnnualCost(employee: Employee): number {
  let total = BASE_EMPLOYEE_COST * (hasDiscount(employee.name) ? 0.9 : 1);
  total += employee.dependents.reduce((sum, dep) => {
    return sum + BASE_DEPENDENT_COST * (hasDiscount(dep.name) ? 0.9 : 1);
  }, 0);
  return total;
}

export function calculatePerPaycheckCost(employee: Employee): number {
  return +(calculateAnnualCost(employee) / PAY_PERIODS).toFixed(2);
}

export function calculateAnnualCostForAllEmployees(employees: Employee[]): number {
  const yearlyTotal = employees.reduce((sum, emp) => {
    const empCost = calculateAnnualCost(emp);
    return sum + empCost;
  }, 0);
  return yearlyTotal;
}