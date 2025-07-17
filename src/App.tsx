import React, { useEffect, useState } from 'react';
import './App.css';
import type { Employee } from './types/types';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';
import ShowBenefits from './components/ShowBenefits';

function App() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [editEmployee, setEditEmployee] = useState<Employee | null>(null);

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => {
        setEmployees(data);
      });
  }, []);

  const onAdd = (emp: Employee) => {
    let updated;
    if (emp.id && emp.id !== '') {
      updated = employees.map(e => e.id === emp.id ? emp : e);
    } else {
      emp.id = crypto.randomUUID();
      updated = [...employees, emp];
    }

    setEmployees(updated);
    setEditEmployee(null);
  }

  const onUpdate = (emp: Employee) => {
    setEditEmployee(emp);
  }

  const onDelete = (id: string) => {
    const updated = employees.filter(emp => emp.id !== id);
    setEmployees(updated);
  }

  return (
    <div className="App">
      <header className="App-header my-5">
        <h2 className='text-2xl font-semibold mb-2'>Healthcare Benefits</h2>
      </header>
      <main>
        <AddEmployee editEmployee={editEmployee} onAdd={onAdd} />
        <ShowBenefits employees={employees} />
        <EmployeeList employees={employees} onUpdate={onUpdate} onDelete={onDelete} />
      </main>
    </div>
  );
}

export default App;
