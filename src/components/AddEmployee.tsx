import React, { useEffect, useState } from 'react';
import type { Employee, Dependent } from '../types/types';
import { FaTrash, FaPlus } from 'react-icons/fa';

interface Props {
  editEmployee: Employee | null;
  onAdd: (emp: Employee) => void;
}

export default function AddEmployee({ editEmployee, onAdd }: Props) {
  const [name, setName] = useState('');
  const [dependents, setDependents] = useState<Dependent[]>([]);
  const [errors, setErrors] = useState<string | null>(null);

  useEffect(() => {
    if (editEmployee) {
      setName(editEmployee.name);
      setDependents(editEmployee.dependents || []);
    }
  }, [editEmployee]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrors("Employee name is required.");
      return;
    }
    for (let dep of dependents) {
      if (!dep.name.trim()) {
        setErrors("All dependents must have names.");
        return;
      }
    }

    const data: Employee = {
      id: editEmployee?.id || '',
      name,
      dependents
    };
    onAdd(data);
    setName('');
    setDependents([]);
    setErrors(null);
  };

  const handleDependentChange = (index: number, value: string) => {
    const updated = [...dependents];
    updated[index].name = value;
    setDependents(updated);
  };

  const handleAddDependent = () => {
    setDependents([...dependents, { id: crypto.randomUUID(), name: '' }]);
  };

  const handleRemoveDependent = (index: number) => {
    const updated = dependents.filter((_, i) => i !== index);
    setDependents(updated);
  };

  return (
    <div className="border p-3 space-y-4 mb-6">
      <h2 className="text-xl font-semibold mb-2">Add Employee Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="px-3 text-left">
          {/* Employee Name */}
          <div className="flex mb-2 items-center">
            <label htmlFor="employeeName" className="block mr-3 my-2 text-sm font-medium">
              Employee Name
            </label>
            <input
              id="employeeName"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-2 border rounded-xl"
              aria-required="true"
            />
          </div>

          {/* Add Dependent Button */}
          <div className="flex mb-2 items-center">
            <label className="block mr-3 my-2 text-sm font-medium">Add Dependents</label>
            <button
              type="button"
              onClick={handleAddDependent}
              className="p-2 rounded"
              aria-label="Add dependent"
            >
              <FaPlus />
            </button>
          </div>

          {/* Dependents List */}
          <fieldset>
            <legend className="sr-only">Dependents</legend>
            {dependents.map((dep, i) => (
              <div key={dep.id} className="mb-2 flex items-center">
                <label htmlFor={`dependent-${dep.id}`} className="sr-only">
                  Dependent {i + 1} Name
                </label>
                <input
                  id={`dependent-${dep.id}`}
                  value={dep.name}
                  onChange={(e) => handleDependentChange(i, e.target.value)}
                  className="p-2 mr-3 border rounded-xl"
                  placeholder={`Dependent ${i + 1}`}
                />
                <button
                  type="button"
                  onClick={() => handleRemoveDependent(i)}
                  className="p-2"
                  aria-label={`Remove dependent ${i + 1}`}
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </fieldset>

          {/* Error Message */}
          {errors && (
            <div role="alert" className="text-red-500 text-sm mb-2">
              {errors}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-500 text-white rounded px-4 py-2"
            aria-label="Save employee details"
          >
            Save Employee
          </button>
        </div>
      </form>
    </div>
  );
}
