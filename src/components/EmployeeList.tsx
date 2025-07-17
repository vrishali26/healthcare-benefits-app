import React from 'react';
import type { Employee } from '../types/types';
import { calculateAnnualCost, calculatePerPaycheckCost } from '../utils/calculations';
import { FaEdit, FaTrash } from 'react-icons/fa';

interface Props {
    employees: Employee[];
    onUpdate: (emp: Employee) => void;
    onDelete: (id: string) => void;
}

export default function EmployeeForm({ employees, onUpdate, onDelete }: Props) {

    return (
        <>
            <h2 className='text-xl font-semibold mb-2'>Employee List</h2>
            <table className="w-full table-auto border-collapse mb-6">
                <thead>
                    <tr className="bg-gray-100">
                        <th scope="col" className="border px-4 py-2 text-left">Employee</th>
                        <th scope="col" className="border px-4 py-2 text-left">Dependents</th>
                        <th scope="col" className="border px-4 py-2 text-left">Annual Cost</th>
                        <th scope="col" className="border px-4 py-2 text-left">Paycheck Cost</th>
                        <th scope="col" className="border px-4 py-2 text-left">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(emp => {
                        return (
                            <tr key={emp.id} className="border-t align-top">
                                <td className="border px-4 py-2 text-left">{emp.name}</td>
                                <td className="border px-4 py-2 text-left"><ul> {
                                    emp.dependents.map(dep => {
                                        return (
                                            <li key={dep.id}>{dep.name}</li>
                                        )
                                    })
                                }</ul></td>
                                <td className="border px-4 py-2 text-left">${calculateAnnualCost(emp)}</td>
                                <td className="border px-4 py-2 text-left">${calculatePerPaycheckCost(emp)}</td>
                                <td className="border px-4 py-2 text-left">
                                    <button onClick={() => onUpdate(emp)}><FaEdit /></button>
                                    <button onClick={() => onDelete(emp.id)}><FaTrash /> </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}