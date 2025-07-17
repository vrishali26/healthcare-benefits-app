import React from 'react';
import { calculateAnnualCostForAllEmployees } from '../utils/calculations';
import type { Employee } from '../types/types';

interface Props {
  employees: Employee[];
}

export default function ShowBenefits({ employees }: Props) {
  const totalAnnual = calculateAnnualCostForAllEmployees(employees);
  const perPaycheck = (totalAnnual / 26).toFixed(2);

  return (
    <section
      className="bg-gray-100 rounded-xl p-4 mb-6"
      role="region"
      aria-labelledby="benefit-summary-heading"
    >
      <h2 id="benefit-summary-heading" className="text-xl font-semibold mb-2">
        Benefit Cost Preview
      </h2>

      <dl>
        <div className="mb-2">
          <dt className="text-left font-medium">Total Yearly Cost</dt>
          <dd className="text-left" aria-label={`Total yearly cost is $${totalAnnual}`}>
            <strong>${totalAnnual}</strong>
          </dd>
        </div>
        <div>
          <dt className="text-left font-medium">Cost Per Paycheck</dt>
          <dd className="text-left" aria-label={`Cost per paycheck is $${perPaycheck}`}>
            <strong>${perPaycheck}</strong>
          </dd>
        </div>
      </dl>
    </section>
  );
}
