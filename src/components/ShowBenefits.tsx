import React from 'react';
import { calculateAnnualCostForAllEmployees } from '../utils/calculations';
import type { Employee } from '../types/types';

interface Props {
    employees: Employee[];
}
export default function ShowBenefits({ employees }: Props) {
    return (
        <div className="bg-gray-100 rounded-xl p-4 mb-6">
            <h2 className="text-xl font-semibold mb-2">Benefit Cost Preview</h2>
            <p className="text-left">Total Yearly Cost: <strong>${calculateAnnualCostForAllEmployees(employees)}</strong></p>
            <p className="text-left">Cost Per Paycheck: <strong>${(calculateAnnualCostForAllEmployees(employees) / 26).toFixed(2)}</strong></p>
        </div>
    );
}